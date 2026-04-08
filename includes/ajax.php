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
			   AND pm.meta_key NOT LIKE %s
			 ORDER BY pm.meta_key ASC
			 LIMIT 200",
			$post_type,
			$wpdb->esc_like( '_' ) . '%'
		)
	);

	return array_values( array_unique( array_merge( $fields, $meta_keys ?: [] ) ) );
}
