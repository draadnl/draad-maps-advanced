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

	$search_enabled    = get_post_meta( $map_id, '_draad_map_search_enabled', true );
	$filter_enabled    = get_post_meta( $map_id, '_draad_map_filter_enabled', true );
	$list_enabled      = get_post_meta( $map_id, '_draad_map_list_enabled', true );
	$list_hide_address = get_post_meta( $map_id, '_draad_map_list_hide_address', true );
	$action_label      = get_post_meta( $map_id, '_draad_map_action_label', true );

	// The bundled web component prepends an external-link svg to every
	// .action element. Hide it for internal links (same host as the site, or
	// site-relative paths starting with a single slash).
	$home_host        = (string) wp_parse_url( home_url(), PHP_URL_HOST );
	$internal_css     = sprintf(
		'.action[href*="//%1$s/"] > svg:first-child,'
		. 'a[href*="//%1$s/"] .action > svg:first-child,'
		. '.action[href^="/"]:not([href^="//"]) > svg:first-child,'
		. 'a[href^="/"]:not([href^="//"]) .action > svg:first-child{display:none}',
		esc_attr( $home_host )
	);

	$output = '<dm-map center="' . esc_attr( $center ) . '" zoom="' . esc_attr( $zoom ) . '">';
	$output .= '<style>' . $internal_css . '</style>';

	if ( $search_enabled ) {
		$label   = get_post_meta( $map_id, '_draad_map_search_label', true );
		$output .= '<dm-search slot="toolbar"';
		if ( $label ) {
			$output .= ' label="' . esc_attr( $label ) . '"';
		}
		$output .= '></dm-search>';
	}

	if ( $filter_enabled ) {
		// Collect IDs of filterable sources (those with filter_properties or terms_taxonomy set).
		$filter_source_ids = [];
		foreach ( $datasources as $ds ) {
			$label = $ds['label'] ?? '';
			if ( ! $label ) {
				continue;
			}
			if ( ! empty( $ds['display_only'] ) ) {
				continue;
			}
			if ( ! empty( $ds['filter_properties'] ) || ! empty( $ds['terms_taxonomy'] ) || ! empty( $ds['filter_fields'] ) ) {
				$filter_source_ids[] = sanitize_title( $label );
			}
		}

		$output .= '<dm-filter slot="toolbar" variant="dropdown"';
		if ( ! empty( $filter_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $filter_source_ids ) ) . '"';
		}
		$output .= '></dm-filter>';
	}

	if ( $list_enabled ) {
		$list_columns = (int) ( get_post_meta( $map_id, '_draad_map_list_columns', true ) ?: 3 );

		// Collect IDs of listable sources (skip wms — raster tiles have no features).
		$list_source_ids = [];
		foreach ( $datasources as $ds ) {
			$type  = $ds['type'] ?? '';
			$label = $ds['label'] ?? '';
			if ( 'wms' === $type || ! $label || ! empty( $ds['display_only'] ) ) {
				continue;
			}
			$list_source_ids[] = sanitize_title( $label );
		}

		$output .= '<dm-list slot="toolbar"';
		if ( ! empty( $list_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $list_source_ids ) ) . '"';
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
			$list_action_text = $action_label !== ''
				? $action_label
				: __( 'Read more', 'draad-maps' );

			$output .= '<template>';
			// Hide the action button on cards whose link has no href (i.e.,
			// posts with no website and no post content). The bundle strips
			// the href attribute when properties.url is empty. The second
			// rule hides the external-link icon when the link is internal
			// (cards live in the dm-list shadow DOM so the rule needs to be
			// inlined here, not just in the dm-map style block above).
			$output .= '<style>a:not([href]) .action{display:none}' . $internal_css . '</style>';
			$output .= '<a data-href="properties.url">';
			$output .= '<img data-src="properties.image" alt="" />';
			$output .= '<span class="eyebrow" data-field="properties.eyebrow"></span>';
			$output .= '<h3 data-field="properties.title"></h3>';
			if ( ! $list_hide_address ) {
				$output .= '<span class="address" data-field="properties.address"></span>';
			}
			$output .= '<p data-field="properties.description"></p>';
			$output .= '<span class="chips" data-chips="properties.chips"></span>';
			$output .= '<span class="action">' . esc_html( $list_action_text ) . '</span>';
			$output .= '</a>';
			$output .= '</template>';
		} else {
			// No post_query: use the first feature source's popup config so the
			// list cards mirror the configurable GeoJSON/WFS infowindows.
			foreach ( $datasources as $ds ) {
				$ds_type = $ds['type'] ?? '';
				if ( 'geojson_url' !== $ds_type && 'wfs' !== $ds_type ) {
					continue;
				}
				$ds['_map_action_label'] = $action_label;
				$feature_tpl             = draad_maps_build_feature_list_template( $ds, (bool) $list_hide_address );
				if ( '' === $feature_tpl ) {
					continue;
				}
				$output .= '<template>';
				$output .= '<style>a:not([href]) .action{display:none}</style>';
				$output .= $feature_tpl;
				$output .= '</template>';
				break;
			}
		}

		$output .= '</dm-list>';
	}

	foreach ( $datasources as $ds ) {
		$ds['_map_action_label'] = $action_label;
		$type                    = $ds['type'] ?? '';
		$output                 .= draad_maps_render_datasource( $type, $ds );
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
