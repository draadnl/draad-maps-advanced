<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Marker pin colours bundled under assets/markers/ (marker-{color}.png, plus
 * -hover- and -active- variants). Green is the Den Haag default.
 *
 * @return array<string, string> colour slug => human-readable label
 */
function draad_maps_marker_colors(): array {
	return [
		'green'  => __( 'Green', 'draad-maps' ),
		'blue'   => __( 'Blue', 'draad-maps' ),
		'red'    => __( 'Red', 'draad-maps' ),
		'orange' => __( 'Orange', 'draad-maps' ),
		'pink'   => __( 'Pink', 'draad-maps' ),
		'purple' => __( 'Purple', 'draad-maps' ),
		'yellow' => __( 'Yellow', 'draad-maps' ),
		'grey'   => __( 'Grey', 'draad-maps' ),
	];
}

/**
 * Build icon / icon-hover / icon-active attributes pointing at the bundled
 * Den Haag marker PNGs, so dm-marker, dm-geojson and dm-wfs render the themed
 * pins instead of the components' grey SVG fallback. Defaults to green.
 */
function draad_maps_marker_icon_attrs( string $color = '' ): string {
	$color = sanitize_key( $color );
	if ( ! array_key_exists( $color, draad_maps_marker_colors() ) ) {
		$color = 'green';
	}

	$base = DRAAD_MAPS_URL . 'assets/markers/';

	return ' icon="' . esc_url( $base . 'marker-' . $color . '.png' ) . '"'
		. ' icon-hover="' . esc_url( $base . 'marker-hover-' . $color . '.png' ) . '"'
		. ' icon-active="' . esc_url( $base . 'marker-active-' . $color . '.png' ) . '"';
}

function draad_maps_get_post_field( WP_Post $post, string $field ): string {
	switch ( $field ) {
		case 'post_title':
			return $post->post_title;
		case 'post_excerpt':
			return $post->post_excerpt;
		case 'post_content':
			return wp_strip_all_tags( $post->post_content );
		default:
			// Taxonomy field: "taxonomy:category" → first term name.
			if ( str_starts_with( $field, 'taxonomy:' ) ) {
				$taxonomy = substr( $field, 9 );
				$terms    = wp_get_post_terms( $post->ID, $taxonomy, [ 'fields' => 'names' ] );
				return ( ! is_wp_error( $terms ) && ! empty( $terms ) ) ? $terms[0] : '';
			}
			return (string) get_post_meta( $post->ID, $field, true );
	}
}

function draad_maps_render_property_mapping_attrs( array $property_mapping ): string {
	$visible = array_filter( $property_mapping, fn( $m ) => ! empty( $m['visible'] ) );

	if ( empty( $visible ) ) {
		return '';
	}

	// Deduplicate by key, keeping first occurrence.
	$seen   = [];
	$unique = [];
	foreach ( $visible as $m ) {
		if ( ! isset( $seen[ $m['key'] ] ) ) {
			$seen[ $m['key'] ] = true;
			$unique[]          = $m;
		}
	}

	$keys   = array_map( fn( $m ) => $m['key'], $unique );
	$labels = array_map( fn( $m ) => $m['label'] ?? $m['key'], $unique );

	return ' infowindow-properties="' . esc_attr( implode( ',', $keys ) ) . '"'
		 . ' infowindow-labels="' . esc_attr( implode( ',', $labels ) ) . '"';
}

function draad_maps_proxy_url( string $url ): string {
	return admin_url( 'admin-ajax.php' ) . '?' . http_build_query( [
		'action' => 'draad_maps_proxy',
		'url'    => $url,
	] );
}

function draad_maps_render_datasource( string $type, array $config ): string {
	switch ( $type ) {
		case 'post_query':
			return draad_maps_render_post_query( $config );
		case 'geojson_url':
			return draad_maps_render_geojson( $config );
		case 'wfs':
			return draad_maps_render_wfs( $config );
		case 'wms':
			return draad_maps_render_wms( $config );
		default:
			return '';
	}
}

function draad_maps_render_post_query( array $config ): string {
	$post_type         = $config['post_type'] ?? '';
	$location_field    = $config['location_field'] ?? '';
	$title_field       = $config['title_field'] ?? '';
	$description_field = $config['description_field'] ?? '';
	$image_field       = $config['image_field'] ?? '';
	$eyebrow_field     = $config['eyebrow_field'] ?? '';
	$address_field     = $config['address_field'] ?? '';
	$website_field     = $config['website_field'] ?? '';
	$terms_taxonomy    = $config['terms_taxonomy'] ?? '';
	$label             = $config['label'] ?? __( 'Locations', 'draad-maps' );
	$filter_properties = $config['filter_properties'] ?? '';
	$filter_labels     = $config['filter_labels'] ?? '';
	$filter_types      = $config['filter_types'] ?? '';
	$filter_bool_labels = $config['filter_bool_labels'] ?? '';
	$map_action_label  = $config['_map_action_label'] ?? '';
	$marker_icon_attrs = draad_maps_marker_icon_attrs( $config['marker_color'] ?? '' );

	if ( ! $post_type || ! $location_field ) {
		return '';
	}

	$has_infowindow = ( $title_field || $description_field || $image_field || $eyebrow_field || $address_field );

	$posts = get_posts( [
		'post_type'      => sanitize_text_field( $post_type ),
		'posts_per_page' => -1,
		'post_status'    => 'publish',
		'meta_query'     => [
			[
				'key'     => sanitize_text_field( $location_field ),
				'value'   => '',
				'compare' => '!=',
			],
		],
	] );

	if ( empty( $posts ) ) {
		return '';
	}

	$layer_name         = sanitize_title( $label );
	$filter_props_array = $filter_properties ? array_map( 'trim', explode( ',', $filter_properties ) ) : [];
	$filter_labels_arr  = $filter_labels ? array_map( 'trim', explode( ',', $filter_labels ) ) : [];
	$filter_types_arr   = $filter_types ? array_map( 'trim', explode( ',', $filter_types ) ) : [];
	$filter_bool_arr    = $filter_bool_labels ? array_map( 'trim', explode( ',', $filter_bool_labels ) ) : [];

	// Filter properties + labels merged with the taxonomy entry (if any).
	// Built as ordered pairs so we can drop entries that end up with no
	// values across the layer's posts — the bundle gets stuck on
	// "Loading data..." for filter sections whose declared property has
	// zero values, so we only emit properties that actually have data.
	$declared_props = [];
	$declared_types = [];
	$declared_bools = [];
	foreach ( $filter_props_array as $i => $prop_key ) {
		$prop_key = trim( $prop_key );
		if ( $prop_key === '' ) {
			continue;
		}
		$declared_props[ $prop_key ] = $filter_labels_arr[ $i ] ?? $prop_key;
		$declared_types[ $prop_key ] = ( $filter_types_arr[ $i ] ?? '' ) ?: 'auto';
		$declared_bools[ $prop_key ] = $filter_bool_arr[ $i ] ?? '';
	}
	if ( $terms_taxonomy ) {
		$tax_obj   = get_taxonomy( $terms_taxonomy );
		$tax_label = $tax_obj ? $tax_obj->label : $terms_taxonomy;

		$declared_props[ $terms_taxonomy ] = $tax_label;
		$declared_types[ $terms_taxonomy ] = 'auto';
		$declared_bools[ $terms_taxonomy ] = '';
	}

	$active_filter_props = [];
	$markers_html        = '';
	$infowindows         = '';

	foreach ( $posts as $post ) {
		$coords = get_post_meta( $post->ID, $location_field, true );

		if ( empty( $coords ) ) {
			continue;
		}

		if ( is_array( $coords ) ) {
			// Pronamic Leaflet Map: top-level lat/lng is the map *center*
			// (set even when no marker is placed). The actual location lives
			// in the "markers" sub-array — treat an empty markers array as
			// "no location".
			if ( isset( $coords['markers'] ) && is_array( $coords['markers'] ) ) {
				if ( empty( $coords['markers'] ) ) {
					continue;
				}
				$marker = reset( $coords['markers'] );
				if ( ! is_array( $marker ) || empty( $marker['lat'] ) || empty( $marker['lng'] ) ) {
					continue;
				}
				$center = $marker['lat'] . ',' . $marker['lng'];
			} else {
				// Plain array (e.g., ACF Google Map): lat/lng at top level.
				if ( empty( $coords['lat'] ) || empty( $coords['lng'] ) ) {
					continue;
				}
				$center = $coords['lat'] . ',' . $coords['lng'];
			}
		} else {
			$center = $coords;
		}

		$marker_id = 'dm-marker-' . $post->ID;
		$permalink = (string) get_permalink( $post->ID );

		// Resolve image URL.
		$img_url = '';
		if ( $image_field ) {
			$image_val = 'featured_image' === $image_field
				? get_post_thumbnail_id( $post->ID )
				: get_post_meta( $post->ID, $image_field, true );
			if ( $image_val ) {
				$img_url = is_numeric( $image_val )
					? (string) wp_get_attachment_image_url( (int) $image_val, 'medium' )
					: (string) $image_val;
			}
		}

		// Resolve card field values.
		$title_val   = $title_field ? draad_maps_get_post_field( $post, $title_field ) : '';
		$desc_val    = $description_field ? draad_maps_get_post_field( $post, $description_field ) : '';
		$eyebrow_val = $eyebrow_field ? draad_maps_get_post_field( $post, $eyebrow_field ) : '';
		$address_val = $address_field ? draad_maps_get_post_field( $post, $address_field ) : '';

		// Resolve action URL: prefer website field, fall back to permalink.
		$website_url = $website_field ? draad_maps_get_post_field( $post, $website_field ) : '';
		$action_url  = $website_url ?: $permalink;
		$action_text = $map_action_label !== ''
			? $map_action_label
			: __( 'Read more', 'draad-maps' );

		// Resolve taxonomy terms for chips.
		$term_names = [];
		if ( $terms_taxonomy ) {
			$terms = wp_get_post_terms( $post->ID, $terms_taxonomy, [ 'fields' => 'names' ] );
			if ( ! is_wp_error( $terms ) ) {
				$term_names = $terms;
			}
		}

		// Build properties (used by list view via dm-layer.data).
		$props = [];
		if ( $title_val ) {
			$props['title'] = $title_val;
		}
		if ( $desc_val ) {
			$props['description'] = $desc_val;
		}
		if ( $img_url ) {
			$props['image'] = $img_url;
		}
		if ( $eyebrow_val ) {
			$props['eyebrow'] = $eyebrow_val;
		}
		if ( $address_val ) {
			$props['address'] = $address_val;
		}
		if ( $action_url ) {
			$props['url'] = $action_url;
		}
		if ( ! empty( $term_names ) ) {
			$props['chips'] = implode( ', ', $term_names );
			if ( $terms_taxonomy ) {
				$props[ $terms_taxonomy ]            = implode( ', ', $term_names );
				$active_filter_props[ $terms_taxonomy ] = true;
			}
		}
		foreach ( $filter_props_array as $prop_key ) {
			$prop_key = trim( $prop_key );
			if ( $prop_key === '' ) {
				continue;
			}
			// Check if this property is a taxonomy.
			if ( taxonomy_exists( $prop_key ) ) {
				$tax_terms = wp_get_post_terms( $post->ID, $prop_key, [ 'fields' => 'names' ] );
				if ( ! is_wp_error( $tax_terms ) && ! empty( $tax_terms ) ) {
					$props[ $prop_key ]              = implode( ', ', $tax_terms );
					$active_filter_props[ $prop_key ] = true;
				}
			} else {
				$value = (string) get_post_meta( $post->ID, $prop_key, true );
				if ( $value !== '' ) {
					$props[ $prop_key ]              = $value;
					$active_filter_props[ $prop_key ] = true;
				}
			}
		}
		/**
		 * Marker properties, as exposed to the list view and card templates via
		 * `dm-marker[properties]`. Add keys here to bind them in a custom card
		 * template with `data-field="properties.<key>"`.
		 *
		 * @param array   $props  Property key => value.
		 * @param WP_Post $post   The post the marker was built from.
		 * @param array   $config Datasource config (plus `_map_id`, `_map_action_label`).
		 */
		$props = (array) apply_filters( 'draad_maps_marker_properties', $props, $post, $config );

		$props_attr = ! empty( $props ) ? ' properties="' . esc_attr( wp_json_encode( $props ) ) . '"' : '';

		// Everything resolved for this post, handed to the infowindow filter so a
		// custom card can be built without re-querying meta/terms.
		$context = [
			'post'         => $post,
			'post_id'      => $post->ID,
			'map_id'       => (int) ( $config['_map_id'] ?? 0 ),
			'config'       => $config,
			'source_type'  => 'post_query',
			'marker_id'    => $marker_id,
			'center'       => $center,
			'permalink'    => $permalink,
			'image_url'    => $img_url,
			'title'        => $title_val,
			'description'  => $desc_val,
			'eyebrow'      => $eyebrow_val,
			'address'      => $address_val,
			'terms'        => $term_names,
			'taxonomy'     => $terms_taxonomy,
			'action_url'   => $action_url,
			'action_label' => $action_text,
			'properties'   => $props,
		];

		if ( $has_infowindow ) {
			$markers_html .= '<dm-marker id="' . esc_attr( $marker_id ) . '" center="' . esc_attr( $center ) . '" label="' . esc_attr( $post->post_title ) . '"' . $marker_icon_attrs . $props_attr . '></dm-marker>';

			$infowindow = '<dm-infowindow for="' . esc_attr( $marker_id ) . '">';

			if ( $img_url ) {
				$infowindow .= '<img slot="media" src="' . esc_url( $img_url ) . '" alt="" />';
			}

			if ( $eyebrow_val ) {
				$infowindow .= '<span class="label">' . esc_html( $eyebrow_val ) . '</span>';
			}

			if ( $title_val ) {
				$infowindow .= '<h3>' . esc_html( $title_val ) . '</h3>';
			}

			if ( $address_val ) {
				$infowindow .= '<address>' . esc_html( $address_val ) . '</address>';
			}

			if ( $desc_val ) {
				$infowindow .= '<p>' . esc_html( $desc_val ) . '</p>';
			}

			if ( ! empty( $term_names ) ) {
				$infowindow .= '<div class="chips">';
				foreach ( $term_names as $term_name ) {
					$infowindow .= '<span>' . esc_html( $term_name ) . '</span>';
				}
				$infowindow .= '</div>';
			}

			if ( $action_url ) {
				$infowindow .= '<a class="action" href="' . esc_url( $action_url ) . '">' . esc_html( $action_text ) . '</a>';
			}

			$infowindow .= '</dm-infowindow>';
		} else {
			$url_attr      = $permalink ? ' data-url="' . esc_url( $permalink ) . '"' : '';
			$markers_html .= '<dm-marker id="' . esc_attr( $marker_id ) . '" center="' . esc_attr( $center ) . '" label="' . esc_attr( $post->post_title ) . '"' . $marker_icon_attrs . $url_attr . $props_attr . '></dm-marker>';
			$infowindow    = '';
		}

		/**
		 * The complete `<dm-infowindow>` markup for one post marker. Return your
		 * own element (bind it with `for="{$context['marker_id']}"`) to replace the
		 * card, '' to drop it, or the default to leave it alone. Output is echoed
		 * raw — escape it yourself.
		 *
		 * @param string $infowindow Default markup ('' when no popup slot is configured).
		 * @param array  $context    Everything resolved for this post: post, map_id,
		 *                           config, marker_id, center, permalink, image_url,
		 *                           title, description, eyebrow, address, terms,
		 *                           taxonomy, action_url, action_label, properties.
		 */
		$infowindows .= (string) apply_filters( 'draad_maps_post_infowindow_html', $infowindow, $context );
	}

	// Keep only declared filter properties that produced at least one value.
	$emit_props  = [];
	$emit_labels = [];
	$emit_types  = [];
	$emit_bools  = [];
	foreach ( $declared_props as $prop_key => $prop_label ) {
		if ( isset( $active_filter_props[ $prop_key ] ) ) {
			$emit_props[]  = $prop_key;
			$emit_labels[] = $prop_label;
			$emit_types[]  = $declared_types[ $prop_key ] ?? 'auto';
			$emit_bools[]  = $declared_bools[ $prop_key ] ?? '';
		}
	}

	$output = '<dm-layer id="' . esc_attr( $layer_name ) . '" name="' . esc_attr( $layer_name ) . '" label="' . esc_attr( $label ) . '"';
	if ( ! empty( $emit_props ) ) {
		$output .= ' filter-properties="' . esc_attr( implode( ',', $emit_props ) ) . '"';
		$output .= ' filter-labels="' . esc_attr( implode( ',', $emit_labels ) ) . '"';
		// ponytail: only emit when something is actually overridden — an all-auto
		// attribute is noise the component would parse for nothing.
		if ( array_filter( $emit_types, static fn( $t ) => 'auto' !== $t ) ) {
			$output .= ' filter-types="' . esc_attr( implode( ',', $emit_types ) ) . '"';
		}
		if ( array_filter( $emit_bools ) ) {
			$output .= ' filter-bool-labels="' . esc_attr( implode( ',', $emit_bools ) ) . '"';
		}
	}
	$output .= '>';
	$output .= $markers_html;
	$output .= '</dm-layer>';
	$output .= $infowindows;

	return $output;
}

function draad_maps_render_geojson( array $config ): string {
	return draad_maps_render_feature_source( 'dm-geojson', $config, '', 'geojson' );
}

function draad_maps_render_wfs( array $config ): string {
	$extra = '';
	if ( ! empty( $config['typename'] ) ) {
		$extra = ' name="' . esc_attr( $config['typename'] ) . '"';
	}

	return draad_maps_render_feature_source( 'dm-wfs', $config, $extra, 'wfs' );
}

/**
 * Render a feature-based data source (<dm-geojson> / <dm-wfs>) together with
 * its filter attributes and a configurable wildcard infowindow.
 *
 * @param string $tag         Custom element tag.
 * @param array  $config      Datasource config.
 * @param string $extra_attrs Tag-specific attributes (e.g. WFS name).
 * @param string $fallback_id ID used when the label is empty.
 */
function draad_maps_render_feature_source( string $tag, array $config, string $extra_attrs = '', string $fallback_id = 'geojson' ): string {
	$url   = $config['url'] ?? '';
	$label = $config['label'] ?? '';

	if ( ! $url ) {
		return '';
	}

	$id        = sanitize_title( $label ) ?: $fallback_id;
	$proxy_url = draad_maps_proxy_url( $url );
	$attrs     = ' id="' . esc_attr( $id ) . '" src="' . esc_url( $proxy_url ) . '"' . $extra_attrs;
	if ( $label ) {
		$attrs .= ' label="' . esc_attr( $label ) . '"';
	}

	// Den Haag marker pins for point features (ignored for line/polygon geometry).
	$attrs .= draad_maps_marker_icon_attrs( $config['marker_color'] ?? '' );

	// Filtering: which feature properties visitors can filter on, with the
	// per-field display name and type configured alongside them.
	$filter_fields = draad_maps_normalize_keys( $config['filter_fields'] ?? [] );
	if ( ! empty( $filter_fields ) ) {
		$stored_labels = is_array( $config['filter_labels'] ?? null ) ? array_values( $config['filter_labels'] ) : [];
		$stored_types  = is_array( $config['filter_types'] ?? null ) ? array_values( $config['filter_types'] ) : [];
		$stored_bools  = is_array( $config['filter_bool_labels'] ?? null ) ? array_values( $config['filter_bool_labels'] ) : [];

		$filter_labels = [];
		$filter_types  = [];
		$filter_bools  = [];
		foreach ( $filter_fields as $i => $field ) {
			$filter_labels[] = ( $stored_labels[ $i ] ?? '' ) ?: draad_maps_humanize_key( $field );
			$filter_types[]  = ( $stored_types[ $i ] ?? '' ) ?: 'auto';
			$filter_bools[]  = $stored_bools[ $i ] ?? '';
		}

		$attrs .= ' filter-properties="' . esc_attr( implode( ',', $filter_fields ) ) . '"';
		$attrs .= ' filter-labels="' . esc_attr( implode( ',', $filter_labels ) ) . '"';
		// ponytail: only emit when something is actually overridden — same rule as
		// the post_query layer.
		if ( array_filter( $filter_types, static fn( $t ) => 'auto' !== $t ) ) {
			$attrs .= ' filter-types="' . esc_attr( implode( ',', $filter_types ) ) . '"';
		}
		if ( array_filter( $filter_bools ) ) {
			$attrs .= ' filter-bool-labels="' . esc_attr( implode( ',', $filter_bools ) ) . '"';
		}
	}

	// Infowindow: rich popup mapped from feature properties.
	$infowindow = draad_maps_build_feature_infowindow( $id, $config, $tag, $url );

	// Backward compatibility: maps configured before the popup builder still
	// carry a property_mapping. Fall back to the auto data-table for those.
	if ( '' === $infowindow ) {
		$property_mapping = $config['property_mapping'] ?? [];
		$attrs           .= draad_maps_render_property_mapping_attrs( $property_mapping );
		$has_visible      = ! empty( array_filter( $property_mapping, fn( $m ) => ! empty( $m['visible'] ) ) );
		if ( $has_visible ) {
			$infowindow = '<dm-infowindow for="' . esc_attr( $id ) . '" feature-id="*"></dm-infowindow>';
		}
	}

	return '<' . $tag . $attrs . '></' . $tag . '>' . $infowindow;
}

/**
 * Build a configurable wildcard infowindow for a feature source. Mirrors the
 * WordPress-content popup slots (image, eyebrow, title, address, text, chips,
 * action), but binds to feature properties via a <template>. Returns an empty
 * string when no popup slot is configured.
 */
function draad_maps_build_feature_infowindow( string $id, array $config, string $tag = '', string $url = '' ): string {
	$image  = $config['popup_image'] ?? '';
	$action = $config['popup_action_field'] ?? '';
	$body   = draad_maps_feature_popup_body( $config );

	// The image uses the dedicated media slot (top strip), like WP content.
	$media = $image
		? '<img slot="media" data-src="' . esc_attr( 'properties.' . $image ) . '" alt="" />'
		: '';

	$tpl = $body;
	if ( $action ) {
		$tpl .= '<a class="action" data-href="' . esc_attr( 'properties.' . $action ) . '">'
			. esc_html( draad_maps_feature_action_label( $config ) ) . '</a>';
	}

	$infowindow = ( '' === $image && '' === $body && '' === $action )
		? ''
		: '<dm-infowindow for="' . esc_attr( $id ) . '" feature-id="*">'
			. $media
			. '<template>' . $tpl . '</template>'
			. '</dm-infowindow>';

	/**
	 * The complete `<dm-infowindow>` markup for a GeoJSON/WFS source. Feature
	 * values are not known server-side, so a custom card binds them inside the
	 * `<template>` with `data-field="properties.<key>"` / `data-src` / `data-href`.
	 * Output is echoed raw — escape it yourself.
	 *
	 * @param string $infowindow Default markup ('' when no popup slot is configured).
	 * @param array  $context    source_id, source_type (geojson|wfs), tag, url, map_id,
	 *                           config, and the resolved parts: media, body, image_field,
	 *                           action_field, action_label, popup fields (eyebrow, title,
	 *                           address, text, chips).
	 */
	return (string) apply_filters( 'draad_maps_feature_infowindow_html', $infowindow, [
		'source_id'    => $id,
		'source_type'  => 'dm-wfs' === $tag ? 'wfs' : 'geojson',
		'tag'          => $tag,
		'url'          => $url,
		'map_id'       => (int) ( $config['_map_id'] ?? 0 ),
		'config'       => $config,
		'media'        => $media,
		'body'         => $body,
		'image_field'  => $image,
		'action_field' => $action,
		'action_label' => draad_maps_feature_action_label( $config ),
		'eyebrow'      => $config['popup_eyebrow'] ?? '',
		'title'        => $config['popup_title'] ?? '',
		'address'      => $config['popup_address'] ?? '',
		'text'         => draad_maps_normalize_keys( $config['popup_text'] ?? [] ),
		'chips'        => draad_maps_normalize_keys( $config['popup_chips'] ?? [] ),
	] );
}

/**
 * Shared popup/card body for feature sources: eyebrow, title, address, text
 * (paragraph for one field, key/value table for several) and chips. Bindings
 * use feature-property paths. Returns '' when none of these slots is set.
 * Used by both the infowindow and the list-card template so they render the
 * same content.
 */
function draad_maps_feature_popup_body( array $config ): string {
	$eyebrow = $config['popup_eyebrow'] ?? '';
	$title   = $config['popup_title'] ?? '';
	$address = $config['popup_address'] ?? '';
	$text    = draad_maps_normalize_keys( $config['popup_text'] ?? [] );
	$chips   = draad_maps_normalize_keys( $config['popup_chips'] ?? [] );

	$bind = fn( string $key ) => esc_attr( 'properties.' . $key );
	$out  = '';

	if ( $eyebrow ) {
		$out .= '<span class="label" data-field="' . $bind( $eyebrow ) . '"></span>';
	}
	if ( $title ) {
		$out .= '<h3 data-field="' . $bind( $title ) . '"></h3>';
	}
	if ( $address ) {
		$out .= '<address data-field="' . $bind( $address ) . '"></address>';
	}

	// One text property → paragraph; several → a key/value table.
	if ( 1 === count( $text ) ) {
		$out .= '<p data-field="' . $bind( $text[0] ) . '"></p>';
	} elseif ( count( $text ) > 1 ) {
		$out .= '<dl class="dm-infowindow-data" part="data-table">';
		foreach ( $text as $key ) {
			$out .= '<dt part="data-key">' . esc_html( draad_maps_humanize_key( $key ) ) . '</dt>';
			$out .= '<dd part="data-value" data-field="' . $bind( $key ) . '"></dd>';
		}
		$out .= '</dl>';
	}

	if ( ! empty( $chips ) ) {
		$out .= '<div class="chips">';
		foreach ( $chips as $key ) {
			$out .= '<span data-field="' . $bind( $key ) . '"></span>';
		}
		$out .= '</div>';
	}

	return $out;
}

/**
 * Resolve the action-button label for a feature source: explicit popup label,
 * then the map-level button label, then the default.
 */
function draad_maps_feature_action_label( array $config ): string {
	$label = $config['popup_action_label'] ?? '';
	if ( '' === $label ) {
		$label = $config['_map_action_label'] ?? '';
	}
	if ( '' === $label ) {
		$label = __( 'Read more', 'draad-maps' );
	}
	return $label;
}

/**
 * Build a <dm-list> card template for a feature source, mirroring the infowindow
 * content so the list view shows the same fields. The whole card is wrapped in an
 * <a> (carrying the action link when configured) so the list card layout — which
 * styles `.list__card a > *` — applies. Returns '' when no popup slot is set.
 */
function draad_maps_build_feature_list_template( array $config, bool $hide_address = false ): string {
	$image  = $config['popup_image'] ?? '';
	$action = $config['popup_action_field'] ?? '';

	if ( $hide_address ) {
		$config['popup_address'] = '';
	}
	$body = draad_maps_feature_popup_body( $config );

	if ( '' === $image && '' === $body && '' === $action ) {
		return '';
	}

	$img = $image
		? '<img data-src="' . esc_attr( 'properties.' . $image ) . '" alt="" />'
		: '';
	$action_html = $action
		? '<span class="action">' . esc_html( draad_maps_feature_action_label( $config ) ) . '</span>'
		: '';
	$href_attr = $action ? ' data-href="' . esc_attr( 'properties.' . $action ) . '"' : '';

	return '<a' . $href_attr . '>' . $img . $body . $action_html . '</a>';
}

/**
 * Normalize a list of property keys (array or comma string) → clean array.
 *
 * @return string[]
 */
function draad_maps_normalize_keys( $value ): array {
	if ( is_string( $value ) ) {
		$value = '' === $value ? [] : explode( ',', $value );
	}
	if ( ! is_array( $value ) ) {
		return [];
	}

	$out = [];
	foreach ( $value as $key ) {
		$key = trim( (string) $key );
		if ( '' !== $key ) {
			$out[] = $key;
		}
	}

	return array_values( array_unique( $out ) );
}

/**
 * Turn a property key into a human-readable label ("aantal_leden" → "Aantal Leden").
 */
function draad_maps_humanize_key( string $key ): string {
	return ucwords( str_replace( [ '_', '-' ], ' ', $key ) );
}

function draad_maps_render_wms( array $config ): string {
	$url    = $config['url'] ?? '';
	$layers = $config['layers'] ?? '';
	$label  = $config['label'] ?? '';

	if ( ! $url ) {
		return '';
	}

	$proxy_url = draad_maps_proxy_url( $url );
	$attrs     = ' src="' . esc_url( $proxy_url ) . '"';
	if ( $layers ) {
		$attrs .= ' layers="' . esc_attr( $layers ) . '"';
	}
	if ( $label ) {
		$attrs .= ' label="' . esc_attr( $label ) . '"';
	}

	return '<dm-wms' . $attrs . '></dm-wms>';
}
