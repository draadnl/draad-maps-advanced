<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_ajax_draad_maps_get_meta_keys', 'draad_maps_ajax_get_meta_keys' );

function draad_maps_ajax_get_meta_keys() {
	check_ajax_referer( 'draad_maps_admin', 'nonce' );

	if ( ! current_user_can( 'edit_posts' ) ) {
		wp_send_json_error( 'Unauthorized', 403 );
	}

	$post_type = isset( $_GET['post_type'] ) ? sanitize_key( $_GET['post_type'] ) : '';

	if ( ! $post_type || ! post_type_exists( $post_type ) ) {
		wp_send_json_error( 'Invalid post type' );
	}

	wp_send_json_success( draad_maps_get_meta_keys_for_post_type( $post_type ) );
}

add_action( 'wp_ajax_draad_maps_get_taxonomies', 'draad_maps_ajax_get_taxonomies' );

function draad_maps_ajax_get_taxonomies() {
	check_ajax_referer( 'draad_maps_admin', 'nonce' );

	$post_type = sanitize_key( $_GET['post_type'] ?? '' );

	if ( ! $post_type || ! post_type_exists( $post_type ) ) {
		wp_send_json_error();
	}

	$taxonomies = get_object_taxonomies( $post_type, 'objects' );
	$result     = [];

	foreach ( $taxonomies as $tax ) {
		$result[] = [
			'name'  => $tax->name,
			'label' => $tax->label,
		];
	}

	wp_send_json_success( $result );
}

add_action( 'wp_ajax_draad_maps_get_source_values', 'draad_maps_ajax_get_source_values' );

/**
 * Existing values for one query-filter source: term slugs for "taxonomy:<slug>",
 * distinct meta values otherwise. Suggestions only — the field stays free text.
 */
function draad_maps_ajax_get_source_values() {
	check_ajax_referer( 'draad_maps_admin', 'nonce' );

	if ( ! current_user_can( 'edit_posts' ) ) {
		wp_send_json_error( 'Unauthorized', 403 );
	}

	global $wpdb;

	$post_type = sanitize_key( $_GET['post_type'] ?? '' );
	$source    = trim( sanitize_text_field( wp_unslash( $_GET['source'] ?? '' ) ) );

	if ( ! $post_type || ! post_type_exists( $post_type ) || '' === $source ) {
		wp_send_json_error( 'Invalid request' );
	}

	if ( 0 === strpos( $source, 'taxonomy:' ) || taxonomy_exists( $source ) ) {
		$taxonomy = 0 === strpos( $source, 'taxonomy:' ) ? substr( $source, 9 ) : $source;
		$terms    = taxonomy_exists( $taxonomy )
			? get_terms( [ 'taxonomy' => $taxonomy, 'fields' => 'slugs', 'hide_empty' => false, 'number' => 200 ] )
			: [];

		wp_send_json_success( is_wp_error( $terms ) ? [] : array_values( $terms ) );
	}

	$values = $wpdb->get_col(
		$wpdb->prepare(
			"SELECT DISTINCT pm.meta_value
			 FROM {$wpdb->postmeta} pm
			 INNER JOIN {$wpdb->posts} p ON p.ID = pm.post_id
			 WHERE p.post_type = %s
			   AND p.post_status = 'publish'
			   AND p.post_password = ''
			   AND pm.meta_key = %s
			   AND pm.meta_value != ''
			   AND CHAR_LENGTH( pm.meta_value ) <= 100
			 ORDER BY pm.meta_value ASC
			 LIMIT 200",
			$post_type,
			$source
		)
	);

	wp_send_json_success( array_values( array_unique( $values ?: [] ) ) );
}

add_action( 'wp_ajax_draad_maps_fetch_geojson_properties', 'draad_maps_ajax_fetch_geojson_properties' );

function draad_maps_ajax_fetch_geojson_properties() {
	check_ajax_referer( 'draad_maps_admin', 'nonce' );

	if ( ! current_user_can( 'edit_posts' ) ) {
		wp_send_json_error( 'Unauthorized', 403 );
	}

	$url  = isset( $_POST['url'] ) ? esc_url_raw( wp_unslash( $_POST['url'] ) ) : '';
	$type = isset( $_POST['type'] ) ? sanitize_key( $_POST['type'] ) : 'geojson_url';

	if ( ! $url || ! wp_http_validate_url( $url ) ) {
		wp_send_json_error( __( 'Invalid URL.', 'draad-maps' ) );
	}

	$fetch_url = $url;

	if ( 'wfs' === $type ) {
		$typename = isset( $_POST['typename'] ) ? sanitize_text_field( wp_unslash( $_POST['typename'] ) ) : '';
		if ( ! $typename ) {
			wp_send_json_error( __( 'TypeName is required for WFS sources.', 'draad-maps' ) );
		}
		$separator = str_contains( $url, '?' ) ? '&' : '?';
		$fetch_url = $url . $separator . http_build_query( [
			'service'      => 'WFS',
			'version'      => '1.1.0',
			'request'      => 'GetFeature',
			'typeName'     => $typename,
			'outputFormat'  => 'application/json',
			'maxFeatures'  => 1,
		] );
	}

	$response = wp_remote_get( $fetch_url, [
		'timeout'   => 15,
		'sslverify' => true,
	] );

	if ( is_wp_error( $response ) ) {
		wp_send_json_error( $response->get_error_message() );
	}

	$code = wp_remote_retrieve_response_code( $response );
	if ( $code < 200 || $code >= 300 ) {
		wp_send_json_error( sprintf( __( 'The external server returned HTTP %d.', 'draad-maps' ), $code ) );
	}

	$body         = wp_remote_retrieve_body( $response );
	$content_type = wp_remote_retrieve_header( $response, 'content-type' ) ?: 'application/json';

	// Handle CKAN datastore responses.
	$body = draad_maps_maybe_transform_ckan_response( $body, $content_type );

	$data = json_decode( $body, true );

	if ( ! is_array( $data ) || empty( $data['features'] ) || ! is_array( $data['features'] ) ) {
		wp_send_json_error( __( 'No features found in the response.', 'draad-maps' ) );
	}

	// Merge property keys from up to 5 features for completeness.
	$keys = [];
	$limit = min( 5, count( $data['features'] ) );
	for ( $i = 0; $i < $limit; $i++ ) {
		$props = $data['features'][ $i ]['properties'] ?? [];
		if ( is_array( $props ) ) {
			$keys = array_merge( $keys, array_keys( $props ) );
		}
	}

	$keys = array_values( array_unique( $keys ) );

	if ( empty( $keys ) ) {
		wp_send_json_error( __( 'No properties found in the features.', 'draad-maps' ) );
	}

	wp_send_json_success( $keys );
}

/**
 * Field keys offered as filterable properties for a post_query source. Drops the
 * built-in post fields and unwraps "taxonomy:foo" — draad_maps_render_post_query()
 * resolves filter properties as meta keys or bare taxonomy names.
 *
 * @return string[]
 */
function draad_maps_filter_field_options( string $post_type ): array {
	if ( '' === $post_type ) {
		return [];
	}

	$built_in = [ 'post_title', 'post_excerpt', 'post_content', 'featured_image' ];
	$out      = [];

	foreach ( draad_maps_get_meta_keys_for_post_type( $post_type ) as $key ) {
		if ( in_array( $key, $built_in, true ) ) {
			continue;
		}
		$out[] = str_starts_with( $key, 'taxonomy:' ) ? substr( $key, 9 ) : $key;
	}

	return array_values( array_unique( $out ) );
}

/**
 * Sources selectable in the query-filter repeater: meta keys plus
 * "taxonomy:<slug>" entries. Built-in post fields are dropped — the filters
 * become a meta_query / tax_query, not a post-field search.
 *
 * @return string[]
 */
function draad_maps_query_filter_sources( string $post_type ): array {
	if ( '' === $post_type ) {
		return [];
	}

	$built_in = [ 'post_title', 'post_excerpt', 'post_content', 'featured_image' ];
	$keys     = array_diff( draad_maps_get_meta_keys_for_post_type( $post_type ), $built_in );

	return array_values( array_unique( $keys ) );
}

function draad_maps_get_meta_keys_for_post_type( string $post_type ): array {
	global $wpdb;

	// Built-in post fields.
	$fields = [ 'post_title', 'post_excerpt', 'post_content', 'featured_image' ];

	// ACF registered fields (independent of whether posts have values).
	if ( function_exists( 'acf_get_field_groups' ) ) {
		$groups = acf_get_field_groups( [ 'post_type' => $post_type ] );
		foreach ( $groups as $group ) {
			$acf_fields = acf_get_fields( $group['key'] );
			if ( is_array( $acf_fields ) ) {
				foreach ( $acf_fields as $field ) {
					if ( ! empty( $field['name'] ) ) {
						$fields[] = $field['name'];
					}
				}
			}
		}
	}

	// Taxonomy fields (prefixed with "taxonomy:").
	$taxonomies = get_object_taxonomies( $post_type, 'objects' );
	foreach ( $taxonomies as $tax ) {
		$fields[] = 'taxonomy:' . $tax->name;
	}

	// Postmeta keys from existing posts.
	$meta_keys = $wpdb->get_col(
		$wpdb->prepare(
			"SELECT DISTINCT pm.meta_key
			 FROM {$wpdb->postmeta} pm
			 INNER JOIN {$wpdb->posts} p ON p.ID = pm.post_id
			 WHERE p.post_type = %s
			   AND p.post_status = 'publish'
			   AND p.post_password = ''
			   AND pm.meta_key NOT LIKE %s
			 ORDER BY pm.meta_key ASC
			 LIMIT 200",
			$post_type,
			$wpdb->esc_like( '_' ) . '%'
		)
	);

	return array_values( array_unique( array_merge( $fields, $meta_keys ?: [] ) ) );
}
