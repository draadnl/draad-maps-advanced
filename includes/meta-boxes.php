<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'add_meta_boxes', 'draad_maps_add_meta_boxes' );
add_action( 'save_post_map', 'draad_maps_save_meta', 10, 2 );

function draad_maps_add_meta_boxes() {
	add_meta_box(
		'draad_map_settings',
		__( 'Map settings', 'draad-maps' ),
		'draad_maps_render_settings_box',
		'map',
		'normal',
		'high'
	);

	add_meta_box(
		'draad_map_datasource',
		__( 'Map data sources', 'draad-maps' ),
		'draad_maps_render_datasource_box',
		'map',
		'normal',
		'default'
	);
}

function draad_maps_render_settings_box( $post ) {
	wp_nonce_field( 'draad_maps_save_meta', 'draad_maps_nonce' );

	$center              = get_post_meta( $post->ID, '_draad_map_center', true ) ?: '52.0705,4.3007';
	$center_label        = get_post_meta( $post->ID, '_draad_map_center_label', true );
	$zoom                = get_post_meta( $post->ID, '_draad_map_zoom', true );
	$zoom                = $zoom !== '' ? (int) $zoom : 12;
	$search_enabled      = get_post_meta( $post->ID, '_draad_map_search_enabled', true );
	$search_label        = get_post_meta( $post->ID, '_draad_map_search_label', true );
	$filter_enabled      = get_post_meta( $post->ID, '_draad_map_filter_enabled', true );
	$list_enabled        = get_post_meta( $post->ID, '_draad_map_list_enabled', true );
	$list_columns        = get_post_meta( $post->ID, '_draad_map_list_columns', true );
	$list_columns        = $list_columns !== '' ? (int) $list_columns : 2;
	$list_hide_address   = get_post_meta( $post->ID, '_draad_map_list_hide_address', true );
	$default_view        = get_post_meta( $post->ID, '_draad_map_default_view', true ) ?: 'map';
	$action_label        = get_post_meta( $post->ID, '_draad_map_action_label', true );
	?>
	<table class="form-table">
		<tr>
			<th><label for="draad_map_center_search"><?php esc_html_e( 'Start location', 'draad-maps' ); ?></label></th>
			<td>
				<div
					class="draad-location-search"
					data-pdok-suggest-url="https://api.pdok.nl/bzk/locatieserver/search/v3_1/suggest"
					data-pdok-lookup-url="https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup"
				>
					<div class="draad-location-search__input-wrap">
						<input
							type="text"
							id="draad_map_center_search"
							class="regular-text draad-location-search__input"
							value="<?php echo esc_attr( $center_label ?: $center ); ?>"
							autocomplete="off"
							role="combobox"
							aria-expanded="false"
							aria-controls="draad_map_center_results"
							aria-autocomplete="list"
						/>
						<button
							type="button"
							class="button draad-location-search__clear"
							aria-label="<?php esc_attr_e( 'Clear location', 'draad-maps' ); ?>"
						>&times;</button>
						<ul
							id="draad_map_center_results"
							class="draad-location-search__listbox"
							role="listbox"
							hidden
						></ul>
					</div>
					<p class="description draad-location-search__coords">
						<?php
						if ( $center ) {
							echo esc_html( __( 'Coordinates: ', 'draad-maps' ) . $center );
						}
						?>
					</p>
					<input
						type="hidden"
						id="draad_map_center"
						name="draad_map_center"
						value="<?php echo esc_attr( $center ); ?>"
					/>
					<input
						type="hidden"
						id="draad_map_center_label"
						name="draad_map_center_label"
						value="<?php echo esc_attr( $center_label ); ?>"
					/>
				</div>
			</td>
		</tr>
		<tr>
			<th><label for="draad_map_zoom"><?php esc_html_e( 'Start zoom level', 'draad-maps' ); ?></label></th>
			<td>
				<input
					type="number"
					id="draad_map_zoom"
					name="draad_map_zoom"
					value="<?php echo esc_attr( $zoom ); ?>"
					min="1"
					max="18"
					class="small-text"
				/>
				<p class="description"><?php esc_html_e( 'Higher numbers zoom in closer. 1 shows the whole world, 18 shows street detail. 12–14 works well for a city overview.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Search box', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_search_enabled"
						value="1"
						<?php checked( $search_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Show a search box on the map', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Let visitors search for a location by name.', 'draad-maps' ); ?></p>
				<br />
				<label for="draad_map_search_label"><?php esc_html_e( 'Search box label', 'draad-maps' ); ?></label><br />
				<input
					type="text"
					id="draad_map_search_label"
					name="draad_map_search_label"
					value="<?php echo esc_attr( $search_label ); ?>"
					class="regular-text"
				/>
				<p class="description"><?php esc_html_e( 'Shown above or inside the search box (e.g. "Search a location").', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Filters', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_filter_enabled"
						value="1"
						<?php checked( $filter_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Show filters above the map', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Let visitors filter results by category. Configure per data source which properties can be filtered.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'List view', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_list_enabled"
						value="1"
						<?php checked( $list_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Enable list view', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Adds a toggle that lets visitors switch between the map and a card overview of all locations.', 'draad-maps' ); ?></p>
				<br />
				<label for="draad_map_list_columns"><?php esc_html_e( 'Number of columns', 'draad-maps' ); ?></label><br />
				<select id="draad_map_list_columns" name="draad_map_list_columns">
					<option value="1" <?php selected( $list_columns, 1 ); ?>>1</option>
					<option value="2" <?php selected( $list_columns, 2 ); ?>>2</option>
					<option value="3" <?php selected( $list_columns, 3 ); ?>>3</option>
					<option value="4" <?php selected( $list_columns, 4 ); ?>>4</option>
				</select>
				<p class="description"><?php esc_html_e( 'How many cards are shown per row.', 'draad-maps' ); ?></p>
				<br />
				<label>
					<input
						type="checkbox"
						name="draad_map_list_hide_address"
						value="1"
						<?php checked( $list_hide_address, '1' ); ?>
					/>
					<?php esc_html_e( 'Hide address in list cards', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Hides the address field in the list view, even when filled in.', 'draad-maps' ); ?></p>
				<?php // ponytail: shown/hidden purely by CSS :has() on the checkbox above — no JS. ?>
				<div class="draad-default-view">
					<br />
					<span class="draad-default-view__label"><?php esc_html_e( 'Default view', 'draad-maps' ); ?></span>
					<input type="hidden" id="draad_map_default_view" name="draad_map_default_view" value="<?php echo esc_attr( $default_view ); ?>" />
					<span class="button-group draad-default-view__buttons">
						<button type="button" class="button<?php echo 'list' !== $default_view ? ' button-primary' : ''; ?>" data-value="map"><?php esc_html_e( 'Map', 'draad-maps' ); ?></button>
						<button type="button" class="button<?php echo 'list' === $default_view ? ' button-primary' : ''; ?>" data-value="list"><?php esc_html_e( 'List', 'draad-maps' ); ?></button>
					</span>
					<p class="description"><?php esc_html_e( 'Which view visitors see first.', 'draad-maps' ); ?></p>
				</div>
			</td>
		</tr>
		<tr>
			<th><label for="draad_map_action_label"><?php esc_html_e( 'Button label', 'draad-maps' ); ?></label></th>
			<td>
				<input
					type="text"
					id="draad_map_action_label"
					name="draad_map_action_label"
					value="<?php echo esc_attr( $action_label ); ?>"
					class="regular-text"
				/>
				<p class="description"><?php esc_html_e( 'Label for the action button on popups and list cards. Leave empty for the default ("Read more").', 'draad-maps' ); ?></p>
			</td>
		</tr>
	</table>
	<?php
}

function draad_maps_render_datasource_tab( int $index, array $ds = [], bool $active = false ) {
	$label = ! empty( $ds['label'] ) ? $ds['label'] : sprintf( __( 'Data source %d', 'draad-maps' ), $index + 1 );
	?>
	<li class="draad-ds-tab-item<?php echo $active ? ' is-active' : ''; ?>" role="presentation">
		<button type="button" class="draad-ds-tab" role="tab">
			<span class="draad-ds-tab-label"><?php echo esc_html( $label ); ?></span>
		</button>
		<button type="button" class="draad-ds-tab-remove" aria-label="<?php esc_attr_e( 'Remove this data source', 'draad-maps' ); ?>">&#215;</button>
	</li>
	<?php
}

function draad_maps_render_datasource_box( $post ) {
	$datasources = json_decode( get_post_meta( $post->ID, '_draad_map_datasources', true ) ?: '[]', true );
	if ( ! is_array( $datasources ) ) {
		$datasources = [];
	}

	$public_post_types = get_post_types( [ 'public' => true ], 'objects' );
	unset( $public_post_types['map'], $public_post_types['attachment'] );
	?>
	<div class="draad-ds-tabbar">
		<ul id="draad-datasources-tabs" class="draad-ds-tabs" role="tablist">
			<?php foreach ( $datasources as $index => $ds ) : ?>
				<?php draad_maps_render_datasource_tab( $index, $ds, $index === 0 ); ?>
			<?php endforeach; ?>
		</ul>
		<button type="button" id="draad-add-datasource" class="button draad-ds-add-btn">
			<?php esc_html_e( '+ Add data source', 'draad-maps' ); ?>
		</button>
	</div>

	<div id="draad-datasources-repeater">
		<?php foreach ( $datasources as $index => $ds ) : ?>
			<?php draad_maps_render_datasource_card( $index, $ds, $public_post_types, $index === 0 ); ?>
		<?php endforeach; ?>
	</div>

	<textarea
		id="draad-map-datasources-json"
		name="draad_map_datasources"
		style="display:none"
	><?php echo esc_textarea( wp_json_encode( $datasources ) ); ?></textarea>

	<?php draad_maps_render_datasource_template( $public_post_types ); ?>
	<?php
}

function draad_maps_render_datasource_card( int $index, array $ds, array $public_post_types, bool $active = false ) {
	$type              = $ds['type'] ?? 'post_query';
	$label             = $ds['label'] ?? '';
	$ds_post_type      = $ds['post_type'] ?? '';
	$location_field    = $ds['location_field'] ?? '';
	$title_field       = $ds['title_field'] ?? '';
	$desc_field        = $ds['description_field'] ?? '';
	$image_field       = $ds['image_field'] ?? '';
	$eyebrow_field     = $ds['eyebrow_field'] ?? '';
	$address_field     = $ds['address_field'] ?? '';
	$website_field     = $ds['website_field'] ?? '';
	$terms_taxonomy    = $ds['terms_taxonomy'] ?? '';
	$filter_properties = $ds['filter_properties'] ?? '';
	$filter_labels     = $ds['filter_labels'] ?? '';
	$url               = $ds['url'] ?? '';
	$typename          = $ds['typename'] ?? '';
	$layers            = $ds['layers'] ?? '';
	$property_mapping  = $ds['property_mapping'] ?? [];
	$display_only      = ! empty( $ds['display_only'] );

	// Pre-populate meta keys if post_type is set.
	$meta_keys = [];
	if ( $ds_post_type && $type === 'post_query' ) {
		$meta_keys = draad_maps_get_meta_keys_for_post_type( $ds_post_type );
	}
	?>
	<div class="draad-datasource-item draad-ds-panel<?php echo $active ? ' is-active' : ''; ?>" role="tabpanel"<?php echo ! $active ? ' style="display:none"' : ''; ?>>
		<table class="form-table" style="margin:0">
			<tr>
				<th style="width:200px"><label><?php esc_html_e( 'Name', 'draad-maps' ); ?></label></th>
				<td>
					<input type="text" class="draad-ds-label regular-text" value="<?php echo esc_attr( $label ); ?>" placeholder="<?php esc_attr_e( 'e.g. Schools, Parking spots', 'draad-maps' ); ?>" />
					<p class="description"><?php esc_html_e( 'Used as label in the map legend.', 'draad-maps' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php esc_html_e( 'Source type', 'draad-maps' ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query" <?php selected( $type, 'post_query' ); ?>><?php esc_html_e( 'WordPress content', 'draad-maps' ); ?></option>
						<option value="geojson_url" <?php selected( $type, 'geojson_url' ); ?>><?php esc_html_e( 'GeoJSON file (URL)', 'draad-maps' ); ?></option>
						<option value="wfs" <?php selected( $type, 'wfs' ); ?>><?php esc_html_e( 'WFS service', 'draad-maps' ); ?></option>
						<option value="wms" <?php selected( $type, 'wms' ); ?>><?php esc_html_e( 'WMS background layer', 'draad-maps' ); ?></option>
					</select>
					<p class="description"><?php esc_html_e( 'Where the locations come from.', 'draad-maps' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php esc_html_e( 'Background layer only', 'draad-maps' ); ?></label></th>
				<td>
					<label>
						<input type="checkbox" class="draad-ds-display-only" <?php checked( $display_only ); ?> />
						<?php esc_html_e( 'Show on the map, but hide in the list view and filters', 'draad-maps' ); ?>
					</label>
					<p class="description"><?php esc_html_e( 'Use this for reference layers such as district boundaries.', 'draad-maps' ); ?></p>
				</td>
			</tr>
			<tr class="draad-ds-marker-color-row"<?php echo 'wms' === $type ? ' style="display:none"' : ''; ?>>
				<th><label><?php esc_html_e( 'Marker color', 'draad-maps' ); ?></label></th>
				<td>
					<?php draad_maps_render_marker_color_select( $ds['marker_color'] ?? '' ); ?>
					<p class="description"><?php esc_html_e( 'Pin colour for this data source\'s markers.', 'draad-maps' ); ?></p>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query" <?php echo $type !== 'post_query' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'Content type', 'draad-maps' ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php esc_html_e( '— Select —', 'draad-maps' ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
								<option value="<?php echo esc_attr( $pt->name ); ?>" <?php selected( $ds_post_type, $pt->name ); ?>>
									<?php echo esc_html( $pt->label ); ?>
								</option>
							<?php endforeach; ?>
						</select>
						<p class="description"><?php esc_html_e( 'Which WordPress content type contains your locations.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Coordinates field', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-location-field', $location_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Custom field with each post\'s coordinates as latitude, longitude (e.g. 52.0705, 4.3007).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Popup — title', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-title-field', $title_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Shown as the heading in the map popup. Leave empty to use the post title.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Popup — description', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-description-field', $desc_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Shown as the body text in the map popup.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Popup — image', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-image-field', $image_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Custom field with an image (attachment ID or full image URL).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Popup — eyebrow', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-eyebrow-field', $eyebrow_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Small text above the title, like a category or badge.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Popup — address', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-address-field', $address_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Address line shown in the popup.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Card — website link', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-website-field', $website_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Custom field with an external URL. When empty, the card links to the post itself.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Card — category source', 'draad-maps' ); ?></label></th>
					<td>
						<?php
						$taxonomies = $ds_post_type ? get_object_taxonomies( $ds_post_type, 'objects' ) : [];
						?>
						<select class="draad-ds-terms-taxonomy">
							<option value=""><?php esc_html_e( '— None —', 'draad-maps' ); ?></option>
							<?php foreach ( $taxonomies as $tax ) : ?>
								<option value="<?php echo esc_attr( $tax->name ); ?>" <?php selected( $terms_taxonomy, $tax->name ); ?>>
									<?php echo esc_html( $tax->label ); ?>
								</option>
							<?php endforeach; ?>
							<?php if ( $terms_taxonomy && ! isset( $taxonomies[ $terms_taxonomy ] ) ) : ?>
								<option value="<?php echo esc_attr( $terms_taxonomy ); ?>" selected><?php echo esc_html( $terms_taxonomy ); ?></option>
							<?php endif; ?>
						</select>
						<p class="description"><?php esc_html_e( 'Terms from this taxonomy are shown as tags on the card.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filterable fields', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="<?php echo esc_attr( $filter_properties ); ?>" placeholder="field_key1,field_key2" />
						<p class="description"><?php esc_html_e( 'Custom field keys visitors can filter by. Separate multiple keys with commas.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filter display names', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="<?php echo esc_attr( $filter_labels ); ?>" placeholder="Label 1,Label 2" />
						<p class="description"><?php esc_html_e( 'Display names for the fields above, in the same order, separated by commas.', 'draad-maps' ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" <?php echo $type !== 'geojson_url' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'GeoJSON file URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'A direct link to a .geojson file. After saving or loading, choose which fields to show below.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_feature_popup_fields( $ds ); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" <?php echo $type !== 'wfs' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WFS service URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'Endpoint of a Web Feature Service (often ends in /wfs).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Feature type name', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-typename regular-text" value="<?php echo esc_attr( $typename ); ?>" placeholder="namespace:typename" />
						<p class="description"><?php esc_html_e( 'The layer to query, in namespace:typename format.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_feature_popup_fields( $ds ); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" <?php echo $type !== 'wms' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WMS service URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'Endpoint of a Web Map Service (often ends in /wms). Shown as a background layer — no clickable markers.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Layer names', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-layers regular-text" value="<?php echo esc_attr( $layers ); ?>" placeholder="layer1,layer2" />
						<p class="description"><?php esc_html_e( 'One or more WMS layer names, separated by commas.', 'draad-maps' ); ?></p>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<?php
}

function draad_maps_render_property_mapping_table( array $property_mapping ) {
	?>
	<tr>
		<th style="width:200px"><label><?php esc_html_e( 'Available fields', 'draad-maps' ); ?></label></th>
		<td>
			<button type="button" class="button draad-ds-fetch-properties"><?php esc_html_e( 'Load available fields', 'draad-maps' ); ?></button>
			<span class="draad-ds-fetch-status" style="margin-left:8px;color:#666"></span>
			<p class="description"><?php esc_html_e( 'Click "Load available fields" to see what is in the source. Check each field to show in the popup and give it a readable name.', 'draad-maps' ); ?></p>
			<div class="draad-ds-property-mapping" style="margin-top:8px;<?php echo empty( $property_mapping ) ? 'display:none' : ''; ?>">
				<table class="widefat fixed striped" style="max-width:600px">
					<thead>
						<tr>
							<th style="width:40px;padding:4px 8px"><?php esc_html_e( 'Show in popup', 'draad-maps' ); ?></th>
							<th style="padding:4px 8px"><?php esc_html_e( 'Field', 'draad-maps' ); ?></th>
							<th style="padding:4px 8px"><?php esc_html_e( 'Display label', 'draad-maps' ); ?></th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ( $property_mapping as $pm ) : ?>
							<tr class="draad-ds-pm-row">
								<td style="padding:4px 8px"><input type="checkbox" class="draad-ds-pm-visible" <?php checked( $pm['visible'] ?? true ); ?> /></td>
								<td style="padding:4px 8px"><code class="draad-ds-pm-key"><?php echo esc_html( $pm['key'] ); ?></code></td>
								<td style="padding:4px 8px"><input type="text" class="draad-ds-pm-label" value="<?php echo esc_attr( $pm['label'] ?? '' ); ?>" style="width:100%" /></td>
							</tr>
						<?php endforeach; ?>
					</tbody>
				</table>
			</div>
		</td>
	</tr>
	<?php
}

/**
 * Render the popup + filter configuration for a feature source (geojson/wfs).
 * Mirrors the WordPress-content popup slots, but the options are feature
 * property keys loaded from the source via "Load available fields".
 */
function draad_maps_render_feature_popup_fields( array $ds = [] ) {
	$available = [];
	if ( ! empty( $ds['available_fields'] ) && is_array( $ds['available_fields'] ) ) {
		$available = $ds['available_fields'];
	} elseif ( ! empty( $ds['property_mapping'] ) && is_array( $ds['property_mapping'] ) ) {
		// Legacy data: seed the dropdowns from the old property mapping.
		$available = array_values( array_filter( array_map(
			static fn( $m ) => $m['key'] ?? '',
			$ds['property_mapping']
		) ) );
	}
	?>
	<tr>
		<th style="width:200px"><label><?php esc_html_e( 'Available fields', 'draad-maps' ); ?></label></th>
		<td>
			<button type="button" class="button draad-ds-fetch-properties"><?php esc_html_e( 'Load available fields', 'draad-maps' ); ?></button>
			<span class="draad-ds-fetch-status" style="margin-left:8px;color:#666"></span>
			<input type="hidden" class="draad-ds-available-fields" value="<?php echo esc_attr( wp_json_encode( array_values( $available ) ) ); ?>" />
			<p class="description"><?php esc_html_e( 'Load the fields from the source, then choose which ones to show in the popup and which can be filtered.', 'draad-maps' ); ?></p>
		</td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — image', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-image', $ds['popup_image'] ?? '', $available ); ?>
			<p class="description"><?php esc_html_e( 'Field with an image URL, shown at the top of the popup.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — eyebrow', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-eyebrow', $ds['popup_eyebrow'] ?? '', $available ); ?>
			<p class="description"><?php esc_html_e( 'Small text above the title.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — title', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-title', $ds['popup_title'] ?? '', $available ); ?>
			<p class="description"><?php esc_html_e( 'Shown as the heading in the popup.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — address', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-address', $ds['popup_address'] ?? '', $available ); ?>
			<p class="description"><?php esc_html_e( 'Address line shown in the popup.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — text', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-text', $ds['popup_text'] ?? [], $available, true ); ?>
			<p class="description"><?php esc_html_e( 'Hold Ctrl/Cmd to select several. One field shows as a paragraph; multiple fields show as a table.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — chips', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-chips', $ds['popup_chips'] ?? [], $available, true ); ?>
			<p class="description"><?php esc_html_e( 'Each selected field is shown as a tag/chip.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — link field', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-popup-action-field', $ds['popup_action_field'] ?? '', $available ); ?>
			<p class="description"><?php esc_html_e( 'Field with a URL for the action button.', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Popup — link label', 'draad-maps' ); ?></label></th>
		<td><input type="text" class="draad-ds-popup-action-label regular-text" value="<?php echo esc_attr( $ds['popup_action_label'] ?? '' ); ?>" />
			<p class="description"><?php esc_html_e( 'Button text. Leave empty for the default ("Read more").', 'draad-maps' ); ?></p></td>
	</tr>
	<tr>
		<th><label><?php esc_html_e( 'Filterable fields', 'draad-maps' ); ?></label></th>
		<td><?php draad_maps_render_feature_field_select( 'draad-ds-filter-fields', $ds['filter_fields'] ?? [], $available, true ); ?>
			<p class="description"><?php esc_html_e( 'Fields visitors can filter on. Requires "Show filters above the map" in Map settings.', 'draad-maps' ); ?></p></td>
	</tr>
	<?php
}

/**
 * Render a <select> of feature property keys for one popup/filter slot.
 *
 * @param string          $class    CSS class identifying the slot.
 * @param string|string[] $selected Currently selected key(s).
 * @param string[]        $available Available property keys.
 * @param bool            $multiple Allow multiple selection.
 */
function draad_maps_render_feature_field_select( string $class, $selected, array $available, bool $multiple = false ) {
	$selected_arr = array_filter( array_map( 'strval', (array) $selected ), static fn( $v ) => '' !== $v );
	$available    = array_map( 'strval', $available );
	?>
	<select class="<?php echo esc_attr( $class ); ?>"<?php echo $multiple ? ' multiple size="4" style="min-width:240px"' : ''; ?>>
		<?php if ( ! $multiple ) : ?>
			<option value=""><?php esc_html_e( '— None —', 'draad-maps' ); ?></option>
		<?php endif; ?>
		<?php foreach ( $available as $key ) : ?>
			<option value="<?php echo esc_attr( $key ); ?>" <?php echo in_array( $key, $selected_arr, true ) ? 'selected' : ''; ?>><?php echo esc_html( $key ); ?></option>
		<?php endforeach; ?>
		<?php foreach ( $selected_arr as $sv ) : ?>
			<?php if ( ! in_array( $sv, $available, true ) ) : ?>
				<option value="<?php echo esc_attr( $sv ); ?>" selected><?php echo esc_html( $sv ); ?></option>
			<?php endif; ?>
		<?php endforeach; ?>
	</select>
	<?php
}

function draad_maps_render_meta_key_select( string $class, string $selected_value, array $meta_keys ) {
	?>
	<select class="<?php echo esc_attr( $class ); ?>">
		<option value=""><?php esc_html_e( '— None —', 'draad-maps' ); ?></option>
		<?php foreach ( $meta_keys as $key ) : ?>
			<option value="<?php echo esc_attr( $key ); ?>" <?php selected( $selected_value, $key ); ?>>
				<?php echo esc_html( $key ); ?>
			</option>
		<?php endforeach; ?>
		<?php if ( $selected_value && ! in_array( $selected_value, $meta_keys, true ) ) : ?>
			<option value="<?php echo esc_attr( $selected_value ); ?>" selected><?php echo esc_html( $selected_value ); ?></option>
		<?php endif; ?>
	</select>
	<?php
}

function draad_maps_render_marker_color_select( string $selected ) {
	$selected = '' !== $selected ? $selected : 'green';
	?>
	<select class="draad-ds-marker-color">
		<?php foreach ( draad_maps_marker_colors() as $value => $label ) : ?>
			<option value="<?php echo esc_attr( $value ); ?>" <?php selected( $selected, $value ); ?>><?php echo esc_html( $label ); ?></option>
		<?php endforeach; ?>
	</select>
	<?php
}

function draad_maps_render_datasource_template( array $public_post_types ) {
	?>
	<script type="text/template" id="draad-datasource-template">
	<div class="draad-datasource-item draad-ds-panel" role="tabpanel">
		<table class="form-table" style="margin:0">
			<tr>
				<th style="width:200px"><label><?php echo esc_js( __( 'Name', 'draad-maps' ) ); ?></label></th>
				<td>
					<input type="text" class="draad-ds-label regular-text" value="" placeholder="<?php echo esc_js( __( 'e.g. Schools, Parking spots', 'draad-maps' ) ); ?>" />
					<p class="description"><?php echo esc_js( __( 'Used as label in the map legend.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php echo esc_js( __( 'Source type', 'draad-maps' ) ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query"><?php echo esc_js( __( 'WordPress content', 'draad-maps' ) ); ?></option>
						<option value="geojson_url"><?php echo esc_js( __( 'GeoJSON file (URL)', 'draad-maps' ) ); ?></option>
						<option value="wfs"><?php echo esc_js( __( 'WFS service', 'draad-maps' ) ); ?></option>
						<option value="wms"><?php echo esc_js( __( 'WMS background layer', 'draad-maps' ) ); ?></option>
					</select>
					<p class="description"><?php echo esc_js( __( 'Where the locations come from.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php echo esc_js( __( 'Background layer only', 'draad-maps' ) ); ?></label></th>
				<td>
					<label>
						<input type="checkbox" class="draad-ds-display-only" />
						<?php echo esc_js( __( 'Show on the map, but hide in the list view and filters', 'draad-maps' ) ); ?>
					</label>
					<p class="description"><?php echo esc_js( __( 'Use this for reference layers such as district boundaries.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
			<tr class="draad-ds-marker-color-row">
				<th><label><?php echo esc_js( __( 'Marker color', 'draad-maps' ) ); ?></label></th>
				<td>
					<?php draad_maps_render_marker_color_select( '' ); ?>
					<p class="description"><?php echo esc_js( __( 'Pin colour for this data source\'s markers.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'Content type', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php echo esc_js( __( '— Select —', 'draad-maps' ) ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
							<option value="<?php echo esc_attr( $pt->name ); ?>"><?php echo esc_html( $pt->label ); ?></option>
							<?php endforeach; ?>
						</select>
						<p class="description"><?php echo esc_js( __( 'Which WordPress content type contains your locations.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Coordinates field', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-location-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Custom field with each post\'s coordinates as latitude, longitude (e.g. 52.0705, 4.3007).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Popup — title', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-title-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Shown as the heading in the map popup. Leave empty to use the post title.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Popup — description', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-description-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Shown as the body text in the map popup.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Popup — image', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-image-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Custom field with an image (attachment ID or full image URL).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Popup — eyebrow', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-eyebrow-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Small text above the title, like a category or badge.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Popup — address', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-address-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Address line shown in the popup.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Card — website link', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-website-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Custom field with an external URL. When empty, the card links to the post itself.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Card — category source', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-terms-taxonomy"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Terms from this taxonomy are shown as tags on the card.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filterable fields', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="" placeholder="field_key1,field_key2" />
						<p class="description"><?php echo esc_js( __( 'Custom field keys visitors can filter by. Separate multiple keys with commas.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filter display names', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="" placeholder="Label 1,Label 2" />
						<p class="description"><?php echo esc_js( __( 'Display names for the fields above, in the same order, separated by commas.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'GeoJSON file URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'A direct link to a .geojson file. After saving or loading, choose which fields to show below.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_feature_popup_fields(); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WFS service URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'Endpoint of a Web Feature Service (often ends in /wfs).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Feature type name', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-typename regular-text" value="" placeholder="namespace:typename" />
						<p class="description"><?php echo esc_js( __( 'The layer to query, in namespace:typename format.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_feature_popup_fields(); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WMS service URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'Endpoint of a Web Map Service (often ends in /wms). Shown as a background layer — no clickable markers.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Layer names', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-layers regular-text" value="" placeholder="layer1,layer2" />
						<p class="description"><?php echo esc_js( __( 'One or more WMS layer names, separated by commas.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
			</table>
		</div>
	</div>
	</script>
	<?php
}

function draad_maps_save_meta( $post_id, $post ) {
	if (
		! isset( $_POST['draad_maps_nonce'] ) ||
		! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['draad_maps_nonce'] ) ), 'draad_maps_save_meta' )
	) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	if ( isset( $_POST['draad_map_center'] ) ) {
		update_post_meta( $post_id, '_draad_map_center', sanitize_text_field( wp_unslash( $_POST['draad_map_center'] ) ) );
	}

	if ( isset( $_POST['draad_map_center_label'] ) ) {
		update_post_meta( $post_id, '_draad_map_center_label', sanitize_text_field( wp_unslash( $_POST['draad_map_center_label'] ) ) );
	}

	if ( isset( $_POST['draad_map_zoom'] ) ) {
		update_post_meta( $post_id, '_draad_map_zoom', absint( $_POST['draad_map_zoom'] ) );
	}

	update_post_meta( $post_id, '_draad_map_search_enabled', isset( $_POST['draad_map_search_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_search_label', sanitize_text_field( wp_unslash( $_POST['draad_map_search_label'] ?? '' ) ) );
	update_post_meta( $post_id, '_draad_map_filter_enabled', isset( $_POST['draad_map_filter_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_list_enabled', isset( $_POST['draad_map_list_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_list_columns', absint( $_POST['draad_map_list_columns'] ?? 2 ) );
	update_post_meta( $post_id, '_draad_map_list_hide_address', isset( $_POST['draad_map_list_hide_address'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_default_view', 'list' === ( $_POST['draad_map_default_view'] ?? '' ) ? 'list' : 'map' );
	update_post_meta( $post_id, '_draad_map_action_label', sanitize_text_field( wp_unslash( $_POST['draad_map_action_label'] ?? '' ) ) );

	if ( isset( $_POST['draad_map_datasources'] ) ) {
		$json = wp_unslash( $_POST['draad_map_datasources'] );
		update_post_meta( $post_id, '_draad_map_datasources', draad_maps_sanitize_datasources( $json ) );
	}
}
