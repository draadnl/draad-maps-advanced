<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'draad_maps_register_meta_fields' );
add_action( 'admin_init', 'draad_maps_maybe_migrate_datasources' );

function draad_maps_register_meta_fields() {
	$fields = [
		'_draad_map_center' => [
			'type'              => 'string',
			'default'           => '52.0705,4.3007',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_center_label' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_zoom' => [
			'type'              => 'integer',
			'default'           => 12,
			'sanitize_callback' => 'absint',
		],
		'_draad_map_datasources' => [
			'type'              => 'string',
			'default'           => '[]',
			'sanitize_callback' => 'draad_maps_sanitize_datasources',
		],
		'_draad_map_search_enabled' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_search_label' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_filter_enabled' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_list_enabled' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_list_columns' => [
			'type'              => 'integer',
			'default'           => 2,
			'sanitize_callback' => 'absint',
		],
		'_draad_map_action_label' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
		'_draad_map_list_hide_address' => [
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		],
	];

	foreach ( $fields as $key => $args ) {
		register_post_meta( 'map', $key, [
			'type'              => $args['type'],
			'single'            => true,
			'default'           => $args['default'],
			'sanitize_callback' => $args['sanitize_callback'],
			'show_in_rest'      => false,
			'auth_callback'     => function() {
				return current_user_can( 'edit_posts' );
			},
		] );
	}
}

function draad_maps_sanitize_datasources( string $json ): string {
	$allowed_types = [ 'post_query', 'geojson_url', 'wfs', 'wms' ];
	$raw           = json_decode( $json, true );

	if ( ! is_array( $raw ) ) {
		return '[]';
	}

	$sanitized = [];

	foreach ( $raw as $ds ) {
		if ( ! is_array( $ds ) ) {
			continue;
		}

		$type = $ds['type'] ?? '';

		if ( ! in_array( $type, $allowed_types, true ) ) {
			continue;
		}

		$entry = [
			'type'         => $type,
			'label'        => sanitize_text_field( $ds['label'] ?? '' ),
			'display_only' => ! empty( $ds['display_only'] ),
		];

		switch ( $type ) {
			case 'post_query':
				$entry['post_type']         = sanitize_key( $ds['post_type'] ?? '' );
				$entry['location_field']    = sanitize_key( $ds['location_field'] ?? '' );
				$entry['title_field']       = sanitize_key( $ds['title_field'] ?? '' );
				$entry['description_field'] = sanitize_key( $ds['description_field'] ?? '' );
				$entry['image_field']       = sanitize_key( $ds['image_field'] ?? '' );
				$entry['eyebrow_field']     = sanitize_text_field( $ds['eyebrow_field'] ?? '' );
				$entry['address_field']     = sanitize_key( $ds['address_field'] ?? '' );
				$entry['website_field']     = sanitize_key( $ds['website_field'] ?? '' );
				$entry['terms_taxonomy']    = sanitize_key( $ds['terms_taxonomy'] ?? '' );
				$entry['filter_properties'] = sanitize_text_field( $ds['filter_properties'] ?? '' );
				$entry['filter_labels']     = sanitize_text_field( $ds['filter_labels'] ?? '' );
				break;

			case 'geojson_url':
				$entry['url']              = esc_url_raw( $ds['url'] ?? '' );
				$entry['property_mapping'] = draad_maps_sanitize_property_mapping( $ds['property_mapping'] ?? [] );
				break;

			case 'wfs':
				$entry['url']              = esc_url_raw( $ds['url'] ?? '' );
				$entry['typename']         = sanitize_text_field( $ds['typename'] ?? '' );
				$entry['property_mapping'] = draad_maps_sanitize_property_mapping( $ds['property_mapping'] ?? [] );
				break;

			case 'wms':
				$entry['url']    = esc_url_raw( $ds['url'] ?? '' );
				$entry['layers'] = sanitize_text_field( $ds['layers'] ?? '' );
				break;
		}

		$sanitized[] = $entry;
	}

	return wp_json_encode( $sanitized );
}

function draad_maps_sanitize_property_mapping( $mapping ): array {
	if ( ! is_array( $mapping ) ) {
		return [];
	}

	$sanitized = [];
	$seen_keys = [];

	foreach ( $mapping as $item ) {
		if ( ! is_array( $item ) || empty( $item['key'] ) ) {
			continue;
		}

		$key = sanitize_text_field( $item['key'] );
		if ( isset( $seen_keys[ $key ] ) ) {
			continue;
		}
		$seen_keys[ $key ] = true;

		$sanitized[] = [
			'key'     => $key,
			'label'   => sanitize_text_field( $item['label'] ?? $item['key'] ),
			'visible' => ! empty( $item['visible'] ),
		];
	}

	return $sanitized;
}

function draad_maps_maybe_migrate_datasources() {
	global $wpdb;

	$map_ids = $wpdb->get_col(
		"SELECT DISTINCT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_draad_map_datasource_type'"
	);

	if ( empty( $map_ids ) ) {
		return;
	}

	foreach ( $map_ids as $map_id ) {
		$map_id = (int) $map_id;
		$type   = get_post_meta( $map_id, '_draad_map_datasource_type', true );
		$ds     = [];

		if ( $type === 'post_query' ) {
			$ds[] = [
				'type'              => 'post_query',
				'label'             => __( 'Locations', 'draad-maps' ),
				'post_type'         => get_post_meta( $map_id, '_draad_map_datasource_post_type', true ),
				'location_field'    => get_post_meta( $map_id, '_draad_map_datasource_location_field', true ),
				'title_field'       => '',
				'description_field' => '',
				'image_field'       => '',
			];
		} elseif ( $type === 'geojson_url' ) {
			$ds[] = [
				'type'  => 'geojson_url',
				'label' => 'GeoJSON',
				'url'   => get_post_meta( $map_id, '_draad_map_datasource_url', true ),
			];
		}

		update_post_meta( $map_id, '_draad_map_datasources', wp_json_encode( $ds ) );

		delete_post_meta( $map_id, '_draad_map_datasource_type' );
		delete_post_meta( $map_id, '_draad_map_datasource_post_type' );
		delete_post_meta( $map_id, '_draad_map_datasource_location_field' );
		delete_post_meta( $map_id, '_draad_map_datasource_url' );
	}
}
