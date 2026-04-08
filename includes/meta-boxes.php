<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'add_meta_boxes', 'draad_maps_add_meta_boxes' );
add_action( 'save_post_map', 'draad_maps_save_meta', 10, 2 );

function draad_maps_add_meta_boxes() {
	add_meta_box(
		'draad_map_settings',
		__( 'Map Settings', 'draad-maps' ),
		'draad_maps_render_settings_box',
		'map',
		'normal',
		'high'
	);

	add_meta_box(
		'draad_map_datasource',
		__( 'Datasources', 'draad-maps' ),
		'draad_maps_render_datasource_box',
		'map',
		'normal',
		'default'
	);
}

function draad_maps_render_settings_box( $post ) {
	wp_nonce_field( 'draad_maps_save_meta', 'draad_maps_nonce' );

	$center              = get_post_meta( $post->ID, '_draad_map_center', true ) ?: '52.0705,4.3007';
	$zoom                = get_post_meta( $post->ID, '_draad_map_zoom', true );
	$zoom                = $zoom !== '' ? (int) $zoom : 12;
	$search_enabled      = get_post_meta( $post->ID, '_draad_map_search_enabled', true );
	$search_placeholder  = get_post_meta( $post->ID, '_draad_map_search_placeholder', true );
	$search_label        = get_post_meta( $post->ID, '_draad_map_search_label', true );
	$filter_enabled      = get_post_meta( $post->ID, '_draad_map_filter_enabled', true );
	$filter_variant      = get_post_meta( $post->ID, '_draad_map_filter_variant', true ) ?: 'dropdown';
	$list_enabled        = get_post_meta( $post->ID, '_draad_map_list_enabled', true );
	$list_label          = get_post_meta( $post->ID, '_draad_map_list_label', true );
	$list_columns        = get_post_meta( $post->ID, '_draad_map_list_columns', true );
	$list_columns        = $list_columns !== '' ? (int) $list_columns : 2;
	?>
	<table class="form-table">
		<tr>
			<th><label for="draad_map_center"><?php esc_html_e( 'Center (lat,lng)', 'draad-maps' ); ?></label></th>
			<td>
				<input
					type="text"
					id="draad_map_center"
					name="draad_map_center"
					value="<?php echo esc_attr( $center ); ?>"
					placeholder="52.0705,4.3007"
					class="regular-text"
				/>
				<p class="description"><?php esc_html_e( 'Latitude and longitude separated by a comma.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><label for="draad_map_zoom"><?php esc_html_e( 'Zoom', 'draad-maps' ); ?></label></th>
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
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Search', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_search_enabled"
						value="1"
						<?php checked( $search_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Enable search', 'draad-maps' ); ?>
				</label>
				<br /><br />
				<label for="draad_map_search_placeholder"><?php esc_html_e( 'Placeholder', 'draad-maps' ); ?></label><br />
				<input
					type="text"
					id="draad_map_search_placeholder"
					name="draad_map_search_placeholder"
					value="<?php echo esc_attr( $search_placeholder ); ?>"
					class="regular-text"
				/>
				<br /><br />
				<label for="draad_map_search_label"><?php esc_html_e( 'Label', 'draad-maps' ); ?></label><br />
				<input
					type="text"
					id="draad_map_search_label"
					name="draad_map_search_label"
					value="<?php echo esc_attr( $search_label ); ?>"
					class="regular-text"
				/>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Filter', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_filter_enabled"
						value="1"
						<?php checked( $filter_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Enable filter', 'draad-maps' ); ?>
				</label>
				<br /><br />
				<label for="draad_map_filter_variant"><?php esc_html_e( 'Variant', 'draad-maps' ); ?></label><br />
				<select id="draad_map_filter_variant" name="draad_map_filter_variant">
					<option value="dialog" <?php selected( $filter_variant, 'dialog' ); ?>><?php esc_html_e( 'Dialog', 'draad-maps' ); ?></option>
					<option value="dropdown" <?php selected( $filter_variant, 'dropdown' ); ?>><?php esc_html_e( 'Dropdown', 'draad-maps' ); ?></option>
					<option value="sidebar" <?php selected( $filter_variant, 'sidebar' ); ?>><?php esc_html_e( 'Sidebar', 'draad-maps' ); ?></option>
				</select>
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
				<br /><br />
				<label for="draad_map_list_label"><?php esc_html_e( 'Button label', 'draad-maps' ); ?></label><br />
				<input
					type="text"
					id="draad_map_list_label"
					name="draad_map_list_label"
					value="<?php echo esc_attr( $list_label ); ?>"
					class="regular-text"
					placeholder="<?php esc_attr_e( 'Lijst', 'draad-maps' ); ?>"
				/>
				<br /><br />
				<label for="draad_map_list_columns"><?php esc_html_e( 'Columns', 'draad-maps' ); ?></label><br />
				<select id="draad_map_list_columns" name="draad_map_list_columns">
					<option value="1" <?php selected( $list_columns, 1 ); ?>>1</option>
					<option value="2" <?php selected( $list_columns, 2 ); ?>>2</option>
					<option value="3" <?php selected( $list_columns, 3 ); ?>>3</option>
					<option value="4" <?php selected( $list_columns, 4 ); ?>>4</option>
				</select>
			</td>
		</tr>
	</table>
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
	<div id="draad-datasources-repeater">
		<?php foreach ( $datasources as $index => $ds ) : ?>
			<?php draad_maps_render_datasource_card( $index, $ds, $public_post_types ); ?>
		<?php endforeach; ?>
	</div>

	<p>
		<button type="button" id="draad-add-datasource" class="button">
			<?php esc_html_e( '+ Add Datasource', 'draad-maps' ); ?>
		</button>
	</p>

	<textarea
		id="draad-map-datasources-json"
		name="draad_map_datasources"
		style="display:none"
	><?php echo esc_textarea( wp_json_encode( $datasources ) ); ?></textarea>

	<?php draad_maps_render_datasource_template( $public_post_types ); ?>
	<?php
}

function draad_maps_render_datasource_card( int $index, array $ds, array $public_post_types ) {
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

	// Pre-populate meta keys if post_type is set.
	$meta_keys = [];
	if ( $ds_post_type && $type === 'post_query' ) {
		$meta_keys = draad_maps_get_meta_keys_for_post_type( $ds_post_type );
	}
	?>
	<div class="draad-datasource-item" style="border:1px solid #ddd;padding:12px;margin-bottom:12px;background:#fff;">
		<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
			<strong><?php echo esc_html( sprintf( __( 'Datasource %d', 'draad-maps' ), $index + 1 ) ); ?></strong>
			<button type="button" class="button draad-remove-datasource"><?php esc_html_e( 'Remove', 'draad-maps' ); ?></button>
		</div>

		<table class="form-table" style="margin:0">
			<tr>
				<th style="width:200px"><label><?php esc_html_e( 'Label', 'draad-maps' ); ?></label></th>
				<td>
					<input type="text" class="draad-ds-label regular-text" value="<?php echo esc_attr( $label ); ?>" placeholder="<?php esc_attr_e( 'Layer label', 'draad-maps' ); ?>" />
				</td>
			</tr>
			<tr>
				<th><label><?php esc_html_e( 'Type', 'draad-maps' ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query" <?php selected( $type, 'post_query' ); ?>><?php esc_html_e( 'Post Query', 'draad-maps' ); ?></option>
						<option value="geojson_url" <?php selected( $type, 'geojson_url' ); ?>><?php esc_html_e( 'GeoJSON URL', 'draad-maps' ); ?></option>
						<option value="wfs" <?php selected( $type, 'wfs' ); ?>><?php esc_html_e( 'WFS', 'draad-maps' ); ?></option>
						<option value="wms" <?php selected( $type, 'wms' ); ?>><?php esc_html_e( 'WMS', 'draad-maps' ); ?></option>
					</select>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query" <?php echo $type !== 'post_query' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'Post Type', 'draad-maps' ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php esc_html_e( '— Select —', 'draad-maps' ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
								<option value="<?php echo esc_attr( $pt->name ); ?>" <?php selected( $ds_post_type, $pt->name ); ?>>
									<?php echo esc_html( $pt->label ); ?>
								</option>
							<?php endforeach; ?>
						</select>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Location Field', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-location-field', $location_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Meta key with coordinates as "lat,lng".', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Infowindow: Title', 'draad-maps' ); ?></label></th>
					<td><?php draad_maps_render_meta_key_select( 'draad-ds-title-field', $title_field, $meta_keys ); ?></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Infowindow: Description', 'draad-maps' ); ?></label></th>
					<td><?php draad_maps_render_meta_key_select( 'draad-ds-description-field', $desc_field, $meta_keys ); ?></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Infowindow: Image', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-image-field', $image_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Attachment ID or image URL.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Infowindow: Eyebrow', 'draad-maps' ); ?></label></th>
					<td><?php draad_maps_render_meta_key_select( 'draad-ds-eyebrow-field', $eyebrow_field, $meta_keys ); ?></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Infowindow: Address', 'draad-maps' ); ?></label></th>
					<td><?php draad_maps_render_meta_key_select( 'draad-ds-address-field', $address_field, $meta_keys ); ?></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Card: Website URL', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-website-field', $website_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Meta key with an external URL. Falls back to post permalink.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Card: Terms Taxonomy', 'draad-maps' ); ?></label></th>
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
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filter Properties', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="<?php echo esc_attr( $filter_properties ); ?>" placeholder="meta_key1,meta_key2" />
						<p class="description"><?php esc_html_e( 'Comma-separated meta keys to use as filter properties.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filter Labels', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="<?php echo esc_attr( $filter_labels ); ?>" placeholder="Label 1,Label 2" />
						<p class="description"><?php esc_html_e( 'Comma-separated display labels for the filter properties.', 'draad-maps' ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" <?php echo $type !== 'geojson_url' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'GeoJSON URL', 'draad-maps' ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" /></td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" <?php echo $type !== 'wfs' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WFS URL', 'draad-maps' ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" /></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'TypeName', 'draad-maps' ); ?></label></th>
					<td><input type="text" class="draad-ds-typename regular-text" value="<?php echo esc_attr( $typename ); ?>" placeholder="namespace:typename" /></td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" <?php echo $type !== 'wms' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WMS URL', 'draad-maps' ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" /></td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Layers', 'draad-maps' ); ?></label></th>
					<td><input type="text" class="draad-ds-layers regular-text" value="<?php echo esc_attr( $layers ); ?>" placeholder="layer1,layer2" /></td>
				</tr>
			</table>
		</div>
	</div>
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

function draad_maps_render_datasource_template( array $public_post_types ) {
	?>
	<script type="text/template" id="draad-datasource-template">
	<div class="draad-datasource-item" style="border:1px solid #ddd;padding:12px;margin-bottom:12px;background:#fff;">
		<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
			<strong><?php echo esc_js( __( 'Datasource {{NUMBER}}', 'draad-maps' ) ); ?></strong>
			<button type="button" class="button draad-remove-datasource"><?php echo esc_js( __( 'Remove', 'draad-maps' ) ); ?></button>
		</div>

		<table class="form-table" style="margin:0">
			<tr>
				<th style="width:200px"><label><?php echo esc_js( __( 'Label', 'draad-maps' ) ); ?></label></th>
				<td><input type="text" class="draad-ds-label regular-text" value="" placeholder="<?php echo esc_js( __( 'Layer label', 'draad-maps' ) ); ?>" /></td>
			</tr>
			<tr>
				<th><label><?php echo esc_js( __( 'Type', 'draad-maps' ) ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query"><?php echo esc_js( __( 'Post Query', 'draad-maps' ) ); ?></option>
						<option value="geojson_url"><?php echo esc_js( __( 'GeoJSON URL', 'draad-maps' ) ); ?></option>
						<option value="wfs"><?php echo esc_js( __( 'WFS', 'draad-maps' ) ); ?></option>
						<option value="wms"><?php echo esc_js( __( 'WMS', 'draad-maps' ) ); ?></option>
					</select>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'Post Type', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php echo esc_js( __( '— Select —', 'draad-maps' ) ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
							<option value="<?php echo esc_attr( $pt->name ); ?>"><?php echo esc_html( $pt->label ); ?></option>
							<?php endforeach; ?>
						</select>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Location Field', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-location-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Meta key with coordinates as "lat,lng".', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Infowindow: Title', 'draad-maps' ) ); ?></label></th>
					<td><select class="draad-ds-title-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Infowindow: Description', 'draad-maps' ) ); ?></label></th>
					<td><select class="draad-ds-description-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Infowindow: Image', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-image-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Attachment ID or image URL.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Infowindow: Eyebrow', 'draad-maps' ) ); ?></label></th>
					<td><select class="draad-ds-eyebrow-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Infowindow: Address', 'draad-maps' ) ); ?></label></th>
					<td><select class="draad-ds-address-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Card: Website URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-website-field"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Meta key with an external URL. Falls back to post permalink.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Card: Terms Taxonomy', 'draad-maps' ) ); ?></label></th>
					<td><select class="draad-ds-terms-taxonomy"><option value=""><?php echo esc_js( __( '— None —', 'draad-maps' ) ); ?></option></select></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filter Properties', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="" placeholder="meta_key1,meta_key2" />
						<p class="description"><?php echo esc_js( __( 'Comma-separated meta keys to use as filter properties.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filter Labels', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="" placeholder="Label 1,Label 2" />
						<p class="description"><?php echo esc_js( __( 'Comma-separated display labels for the filter properties.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'GeoJSON URL', 'draad-maps' ) ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="" /></td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WFS URL', 'draad-maps' ) ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="" /></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'TypeName', 'draad-maps' ) ); ?></label></th>
					<td><input type="text" class="draad-ds-typename regular-text" value="" placeholder="namespace:typename" /></td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WMS URL', 'draad-maps' ) ); ?></label></th>
					<td><input type="url" class="draad-ds-url large-text" value="" /></td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Layers', 'draad-maps' ) ); ?></label></th>
					<td><input type="text" class="draad-ds-layers regular-text" value="" placeholder="layer1,layer2" /></td>
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

	if ( isset( $_POST['draad_map_zoom'] ) ) {
		update_post_meta( $post_id, '_draad_map_zoom', absint( $_POST['draad_map_zoom'] ) );
	}

	update_post_meta( $post_id, '_draad_map_search_enabled', isset( $_POST['draad_map_search_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_search_placeholder', sanitize_text_field( wp_unslash( $_POST['draad_map_search_placeholder'] ?? '' ) ) );
	update_post_meta( $post_id, '_draad_map_search_label', sanitize_text_field( wp_unslash( $_POST['draad_map_search_label'] ?? '' ) ) );
	update_post_meta( $post_id, '_draad_map_filter_enabled', isset( $_POST['draad_map_filter_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_list_enabled', isset( $_POST['draad_map_list_enabled'] ) ? '1' : '' );
	update_post_meta( $post_id, '_draad_map_list_label', sanitize_text_field( wp_unslash( $_POST['draad_map_list_label'] ?? '' ) ) );
	update_post_meta( $post_id, '_draad_map_list_columns', absint( $_POST['draad_map_list_columns'] ?? 2 ) );

	if ( isset( $_POST['draad_map_filter_variant'] ) ) {
		$allowed_variants = [ 'dialog', 'dropdown', 'sidebar' ];
		$variant          = sanitize_text_field( wp_unslash( $_POST['draad_map_filter_variant'] ) );
		update_post_meta( $post_id, '_draad_map_filter_variant', in_array( $variant, $allowed_variants, true ) ? $variant : 'dropdown' );
	}

	if ( isset( $_POST['draad_map_datasources'] ) ) {
		$json = wp_unslash( $_POST['draad_map_datasources'] );
		update_post_meta( $post_id, '_draad_map_datasources', draad_maps_sanitize_datasources( $json ) );
	}
}
