<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
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
	$label             = $config['label'] ?? __( 'Locaties', 'draad-maps' );
	$filter_properties = $config['filter_properties'] ?? '';
	$filter_labels     = $config['filter_labels'] ?? '';

	if ( ! $post_type || ! $location_field ) {
		return '';
	}

	$has_infowindow = ( $title_field || $description_field || $image_field || $eyebrow_field || $address_field );

	$posts = get_posts( [
		'post_type'      => sanitize_text_field( $post_type ),
		'posts_per_page' => -1,
		'post_status'    => 'publish',
		'meta_key'       => sanitize_text_field( $location_field ),
		'meta_compare'   => 'EXISTS',
	] );

	if ( empty( $posts ) ) {
		return '';
	}

	$layer_name         = sanitize_title( $label );
	$filter_props_array = $filter_properties ? array_map( 'trim', explode( ',', $filter_properties ) ) : [];

	// Include taxonomy as a filter property when set.
	$all_filter_properties = $filter_properties;
	$all_filter_labels     = $filter_labels;
	if ( $terms_taxonomy ) {
		$tax_obj   = get_taxonomy( $terms_taxonomy );
		$tax_label = $tax_obj ? $tax_obj->label : $terms_taxonomy;

		$all_filter_properties = $all_filter_properties
			? $all_filter_properties . ',' . $terms_taxonomy
			: $terms_taxonomy;
		$all_filter_labels = $all_filter_labels
			? $all_filter_labels . ',' . $tax_label
			: $tax_label;
	}

	$output = '<dm-layer id="' . esc_attr( $layer_name ) . '" name="' . esc_attr( $layer_name ) . '" label="' . esc_attr( $label ) . '"';
	if ( $all_filter_properties ) {
		$output .= ' filter-properties="' . esc_attr( $all_filter_properties ) . '"';
	}
	if ( $all_filter_labels ) {
		$output .= ' filter-labels="' . esc_attr( $all_filter_labels ) . '"';
	}
	$output     .= '>';
	$infowindows = '';

	foreach ( $posts as $post ) {
		$coords = get_post_meta( $post->ID, $location_field, true );

		if ( empty( $coords ) ) {
			continue;
		}

		if ( is_array( $coords ) ) {
			if ( empty( $coords['lat'] ) || empty( $coords['lng'] ) ) {
				continue;
			}
			$center = $coords['lat'] . ',' . $coords['lng'];
		} else {
			$center = $coords;
		}

		$marker_id = 'dm-marker-' . $post->ID;
		$permalink = ! empty( $post->post_content ) ? get_permalink( $post->ID ) : '';

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
		$action_text = $website_url
			? __( 'Naar de website', 'draad-maps' )
			: __( 'Lees meer', 'draad-maps' );

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
				$props[ $terms_taxonomy ] = implode( ', ', $term_names );
			}
		}
		foreach ( $filter_props_array as $prop_key ) {
			$prop_key = trim( $prop_key );
			// Check if this property is a taxonomy.
			if ( taxonomy_exists( $prop_key ) ) {
				$tax_terms = wp_get_post_terms( $post->ID, $prop_key, [ 'fields' => 'names' ] );
				$props[ $prop_key ] = ( ! is_wp_error( $tax_terms ) && ! empty( $tax_terms ) )
					? implode( ', ', $tax_terms )
					: '';
			} else {
				$props[ $prop_key ] = (string) get_post_meta( $post->ID, $prop_key, true );
			}
		}
		$props_attr = ! empty( $props ) ? ' properties="' . esc_attr( wp_json_encode( $props ) ) . '"' : '';

		if ( $has_infowindow ) {
			$output .= '<dm-marker id="' . esc_attr( $marker_id ) . '" center="' . esc_attr( $center ) . '" label="' . esc_attr( $post->post_title ) . '"' . $props_attr . '></dm-marker>';

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
			$infowindows .= $infowindow;
		} else {
			$url_attr = $permalink ? ' data-url="' . esc_url( $permalink ) . '"' : '';
			$output  .= '<dm-marker center="' . esc_attr( $center ) . '" label="' . esc_attr( $post->post_title ) . '"' . $url_attr . $props_attr . '></dm-marker>';
		}
	}

	$output .= '</dm-layer>';
	$output .= $infowindows;

	return $output;
}

function draad_maps_render_geojson( array $config ): string {
	$url   = $config['url'] ?? '';
	$label = $config['label'] ?? '';

	if ( ! $url ) {
		return '';
	}

	$id        = sanitize_title( $label ) ?: 'geojson';
	$proxy_url = draad_maps_proxy_url( $url );
	$attrs     = ' id="' . esc_attr( $id ) . '" src="' . esc_url( $proxy_url ) . '"';
	if ( $label ) {
		$attrs .= ' label="' . esc_attr( $label ) . '"';
	}
	$property_mapping = $config['property_mapping'] ?? [];
	$attrs           .= draad_maps_render_property_mapping_attrs( $property_mapping );

	$out = '<dm-geojson' . $attrs . '></dm-geojson>';

	// Emit a wildcard infowindow so feature clicks display the mapped properties.
	$has_visible = ! empty( array_filter( $property_mapping, fn( $m ) => ! empty( $m['visible'] ) ) );
	if ( $has_visible ) {
		$out .= '<dm-infowindow for="' . esc_attr( $id ) . '" feature-id="*"></dm-infowindow>';
	}

	return $out;
}

function draad_maps_render_wfs( array $config ): string {
	$url      = $config['url'] ?? '';
	$typename = $config['typename'] ?? '';
	$label    = $config['label'] ?? '';

	if ( ! $url ) {
		return '';
	}

	$id        = sanitize_title( $label ) ?: 'wfs';
	$proxy_url = draad_maps_proxy_url( $url );
	$attrs     = ' id="' . esc_attr( $id ) . '" src="' . esc_url( $proxy_url ) . '"';
	if ( $typename ) {
		$attrs .= ' name="' . esc_attr( $typename ) . '"';
	}
	if ( $label ) {
		$attrs .= ' label="' . esc_attr( $label ) . '"';
	}
	$property_mapping = $config['property_mapping'] ?? [];
	$attrs           .= draad_maps_render_property_mapping_attrs( $property_mapping );

	$out = '<dm-wfs' . $attrs . '></dm-wfs>';

	// Emit a wildcard infowindow so feature clicks display the mapped properties.
	$has_visible = ! empty( array_filter( $property_mapping, fn( $m ) => ! empty( $m['visible'] ) ) );
	if ( $has_visible ) {
		$out .= '<dm-infowindow for="' . esc_attr( $id ) . '" feature-id="*"></dm-infowindow>';
	}

	return $out;
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
