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
	$filter_dismiss    = get_post_meta( $map_id, '_draad_map_filter_dismiss', true );
	$list_enabled      = get_post_meta( $map_id, '_draad_map_list_enabled', true );
	$list_hide_address = get_post_meta( $map_id, '_draad_map_list_hide_address', true );
	$action_label      = get_post_meta( $map_id, '_draad_map_action_label', true );

	$output = '<dm-map center="' . esc_attr( $center ) . '" zoom="' . esc_attr( $zoom ) . '">';

	if ( $search_enabled ) {
		$label   = get_post_meta( $map_id, '_draad_map_search_label', true );
		$output .= '<dm-search slot="toolbar"';
		if ( $label ) {
			$output .= ' label="' . esc_attr( $label ) . '"';
		}
		if ( DRAAD_MAPS_ADDRESS_FILTER ) {
			$output .= ' address-filter="' . esc_attr( DRAAD_MAPS_ADDRESS_FILTER ) . '"';
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

		// Checkbox text for bool filters. Translatable, with a filter as the
		// escape hatch — not worth a map setting for a single word.
		$bool_label = (string) apply_filters( 'draad_maps_filter_bool_label', __( 'Ja', 'draad-maps' ), $map_id );

		$output .= '<dm-filter slot="toolbar" variant="dropdown"';
		// The component defaults to explicit apply with the action buttons, so only
		// the opt-out needs attributes — maps saved before this setting existed get
		// the buttons without a migration.
		if ( 'close' === $filter_dismiss ) {
			$output .= ' submit="auto" dismiss="close"';
		}
		if ( ! empty( $filter_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $filter_source_ids ) ) . '"';
		}
		if ( '' !== $bool_label ) {
			$output .= ' bool-label="' . esc_attr( $bool_label ) . '"';
		}
		$output .= '></dm-filter>';
	}

	if ( $list_enabled ) {
		$list_columns = (int) ( get_post_meta( $map_id, '_draad_map_list_columns', true ) ?: 3 );

		// Collect listable sources (skip wms — raster tiles have no features),
		// keyed by the layer id so each one can carry its own card markup.
		$list_sources = [];
		foreach ( $datasources as $ds ) {
			$type  = $ds['type'] ?? '';
			$label = $ds['label'] ?? '';
			if ( 'wms' === $type || ! $label || ! empty( $ds['display_only'] ) ) {
				continue;
			}
			$list_sources[ sanitize_title( $label ) ] = $ds;
		}
		$list_source_ids = array_keys( $list_sources );

		$output .= '<dm-list slot="toolbar"';
		if ( ! empty( $list_source_ids ) ) {
			$output .= ' for="' . esc_attr( implode( ',', $list_source_ids ) ) . '"';
		}
		$output .= ' columns="' . esc_attr( $list_columns ) . '"';
		if ( 'list' === get_post_meta( $map_id, '_draad_map_default_view', true ) ) {
			$output .= ' open';
		}
		$output .= '>';

		// One card template per source: a post_query marker exposes different
		// properties than a GeoJSON feature, so a single shared template leaves
		// every card of the other type blank.
		foreach ( $list_sources as $source_id => $ds ) {
			$card_type = $ds['type'] ?? '';

			if ( 'post_query' === $card_type ) {
				$list_action_text = $action_label !== ''
					? $action_label
					: __( 'Read more', 'draad-maps' );

				$card_tpl  = '<a data-href="properties.url">';
				$card_tpl .= '<img data-src="properties.image" alt="" />';
				$card_tpl .= '<span class="eyebrow" data-field="properties.eyebrow"></span>';
				$card_tpl .= '<h3 data-field="properties.title"></h3>';
				if ( ! $list_hide_address ) {
					$card_tpl .= '<span class="address" data-field="properties.address"></span>';
				}
				$card_tpl .= '<p data-field="properties.description"></p>';
				$card_tpl .= '<span class="chips" data-chips="properties.chips"></span>';
				$card_tpl .= '<span class="action">' . esc_html( $list_action_text ) . '</span>';
				$card_tpl .= '</a>';
			} else {
				// Feature sources mirror their own configurable infowindow.
				$ds['_map_action_label'] = $action_label;
				$ds['_map_id']           = $map_id;
				$card_tpl                = draad_maps_build_feature_list_template( $ds, (bool) $list_hide_address );
			}

			/**
			 * The `<dm-list>` card markup for one data source. Values are bound
			 * client-side, so a custom card uses `data-field="properties.<key>"`,
			 * `data-src`, `data-chips` and `data-href` — for post_query sources the
			 * available keys are whatever `draad_maps_marker_properties` produced,
			 * for feature sources they are the raw feature property names. Return ''
			 * to render no template for this source (the component falls back to its
			 * built-in card). Echoed raw — escape it yourself.
			 *
			 * Runs once per listed source, so `$context['source_id']` says which one.
			 *
			 * @param string     $card_tpl Default card markup.
			 * @param array      $context  card_type (post_query|geojson_url|wfs), source_id,
			 *                             map_id, datasource (the source the card was built
			 *                             from), datasources, columns, hide_address,
			 *                             action_label, source_ids.
			 */
			$card_tpl = (string) apply_filters( 'draad_maps_list_card_template', $card_tpl, [
				'card_type'    => $card_type,
				'source_id'    => $source_id,
				'map_id'       => $map_id,
				'datasource'   => $ds,
				'datasources'  => $datasources,
				'columns'      => $list_columns,
				'hide_address' => (bool) $list_hide_address,
				'action_label' => $action_label !== '' ? $action_label : __( 'Read more', 'draad-maps' ),
				'source_ids'   => $list_source_ids,
			] );

			if ( '' === $card_tpl ) {
				continue;
			}

			$output .= '<template for="' . esc_attr( $source_id ) . '">';
			// Hide the action button on cards whose link has no href (i.e.,
			// posts with no website and no post content). The bundle strips
			// the href attribute when properties.url is empty. The external-link
			// icon itself is handled by the component (only added for cross-origin
			// links), so no icon-hiding rule is needed here.
			$output .= '<style>a:not([href]) .action{display:none}</style>';
			$output .= $card_tpl;
			$output .= '</template>';
		}

		$output .= '</dm-list>';
	}

	foreach ( $datasources as $ds ) {
		$ds['_map_action_label'] = $action_label;
		$ds['_map_id']           = $map_id;
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
