<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function draad_maps_render( int $map_id ): string {
	$post = get_post( $map_id );

	if ( ! $post || $post->post_type !== 'map' || $post->post_status !== 'publish' ) {
		return '';
	}

	$center      = get_post_meta( $map_id, '_draad_map_center', true ) ?: '52.0705,4.3007';
	$zoom        = (int) ( get_post_meta( $map_id, '_draad_map_zoom', true ) ?: 12 );
	$datasources = json_decode( get_post_meta( $map_id, '_draad_map_datasources', true ) ?: '[]', true );

	if ( ! is_array( $datasources ) ) {
		$datasources = [];
	}

	$search_enabled = get_post_meta( $map_id, '_draad_map_search_enabled', true );
	$filter_enabled = get_post_meta( $map_id, '_draad_map_filter_enabled', true );
	$list_enabled   = get_post_meta( $map_id, '_draad_map_list_enabled', true );

	$output = '<dm-map center="' . esc_attr( $center ) . '" zoom="' . esc_attr( $zoom ) . '" zoom-position="bottom-right">';

	if ( $search_enabled ) {
		$placeholder = get_post_meta( $map_id, '_draad_map_search_placeholder', true );
		$label       = get_post_meta( $map_id, '_draad_map_search_label', true );
		$output     .= '<dm-search slot="toolbar"';
		if ( $placeholder ) {
			$output .= ' placeholder="' . esc_attr( $placeholder ) . '"';
		}
		if ( $label ) {
			$output .= ' label="' . esc_attr( $label ) . '"';
		}
		$output .= '></dm-search>';
	}

	if ( $filter_enabled ) {
		$filter_variant = get_post_meta( $map_id, '_draad_map_filter_variant', true ) ?: 'dropdown';

		// Collect IDs of filterable sources (those with filter_properties or terms_taxonomy set).
		$filter_source_ids = [];
		foreach ( $datasources as $ds ) {
			$label = $ds['label'] ?? '';
			if ( ! $label ) {
				continue;
			}
			if ( ! empty( $ds['filter_properties'] ) || ! empty( $ds['terms_taxonomy'] ) ) {
				$filter_source_ids[] = sanitize_title( $label );
			}
		}

		$output .= '<dm-filter slot="toolbar" variant="' . esc_attr( $filter_variant ) . '"';
		if ( ! empty( $filter_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $filter_source_ids ) ) . '"';
		}
		if ( 'sidebar' === $filter_variant ) {
			$output .= ' collapsible';
		}
		$output .= '></dm-filter>';
	}

	if ( $list_enabled ) {
		$list_label   = get_post_meta( $map_id, '_draad_map_list_label', true );
		$list_columns = (int) ( get_post_meta( $map_id, '_draad_map_list_columns', true ) ?: 2 );

		// Collect IDs of listable sources (skip wms — raster tiles have no features).
		$list_source_ids = [];
		foreach ( $datasources as $ds ) {
			$type  = $ds['type'] ?? '';
			$label = $ds['label'] ?? '';
			if ( 'wms' === $type || ! $label ) {
				continue;
			}
			$list_source_ids[] = sanitize_title( $label );
		}

		$output .= '<dm-list slot="list"';
		if ( ! empty( $list_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $list_source_ids ) ) . '"';
		}
		if ( $list_label ) {
			$output .= ' label="' . esc_attr( $list_label ) . '"';
		}
		$output .= ' columns="' . esc_attr( $list_columns ) . '">';

		// Add card template for post_query datasources.
		$has_post_query = false;
		foreach ( $datasources as $ds ) {
			if ( 'post_query' === ( $ds['type'] ?? '' ) ) {
				$has_post_query = true;
				break;
			}
		}

		if ( $has_post_query ) {
			$output .= '<template>';
			$output .= '<a data-href="properties.url">';
			$output .= '<img data-src="properties.image" alt="" />';
			$output .= '<span class="eyebrow" data-field="properties.eyebrow"></span>';
			$output .= '<h3 data-field="properties.title"></h3>';
			$output .= '<span class="address" data-field="properties.address"></span>';
			$output .= '<p data-field="properties.description"></p>';
			$output .= '<span class="chips" data-chips="properties.chips"></span>';
			$output .= '</a>';
			$output .= '</template>';
		}

		$output .= '</dm-list>';
	}

	foreach ( $datasources as $ds ) {
		$type    = $ds['type'] ?? '';
		$output .= draad_maps_render_datasource( $type, $ds );
	}

	$output .= '</dm-map>';

	return $output;
}

function draad_maps_has_url_markers( int $map_id ): bool {
	$datasources = json_decode( get_post_meta( $map_id, '_draad_map_datasources', true ) ?: '[]', true );

	if ( ! is_array( $datasources ) ) {
		return false;
	}

	foreach ( $datasources as $ds ) {
		if ( ( $ds['type'] ?? '' ) !== 'post_query' ) {
			continue;
		}
		if ( empty( $ds['title_field'] ) && empty( $ds['description_field'] ) && empty( $ds['image_field'] ) ) {
			return true;
		}
	}

	return false;
}
