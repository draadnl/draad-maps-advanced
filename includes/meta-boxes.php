<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'add_meta_boxes', 'draad_maps_add_meta_boxes' );
add_action( 'save_post_map', 'draad_maps_save_meta', 10, 2 );

function draad_maps_add_meta_boxes() {
	add_meta_box(
		'draad_map_settings',
		__( 'Kaartinstellingen', 'draad-maps' ),
		'draad_maps_render_settings_box',
		'map',
		'normal',
		'high'
	);

	add_meta_box(
		'draad_map_datasource',
		__( 'Kaartdatabronnen', 'draad-maps' ),
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
	$action_label        = get_post_meta( $post->ID, '_draad_map_action_label', true );
	?>
	<table class="form-table">
		<tr>
			<th><label for="draad_map_center_search"><?php esc_html_e( 'Startlocatie', 'draad-maps' ); ?></label></th>
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
							aria-label="<?php esc_attr_e( 'Locatie wissen', 'draad-maps' ); ?>"
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
							echo esc_html( __( 'Coördinaten: ', 'draad-maps' ) . $center );
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
			<th><label for="draad_map_zoom"><?php esc_html_e( 'Startzoomniveau', 'draad-maps' ); ?></label></th>
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
				<p class="description"><?php esc_html_e( 'Hogere nummers zoomen dichter in. 1 toont de hele wereld, 18 toont straatdetail. 12–14 werkt goed voor een stadsoverzicht.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Zoekvak', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_search_enabled"
						value="1"
						<?php checked( $search_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Toon een zoekvak op de kaart', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Laat bezoekers zoeken naar een locatie op naam.', 'draad-maps' ); ?></p>
				<br />
				<label for="draad_map_search_label"><?php esc_html_e( 'Label zoekvak', 'draad-maps' ); ?></label><br />
				<input
					type="text"
					id="draad_map_search_label"
					name="draad_map_search_label"
					value="<?php echo esc_attr( $search_label ); ?>"
					class="regular-text"
				/>
				<p class="description"><?php esc_html_e( 'Getoond boven of in het zoekvak (bijv. "Zoek een locatie").', 'draad-maps' ); ?></p>
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
					<?php esc_html_e( 'Toon filters boven de kaart', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Laat bezoekers resultaten filteren op categorie. Stel per databron in op welke eigenschappen gefilterd kan worden.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><?php esc_html_e( 'Lijstweergave', 'draad-maps' ); ?></th>
			<td>
				<label>
					<input
						type="checkbox"
						name="draad_map_list_enabled"
						value="1"
						<?php checked( $list_enabled, '1' ); ?>
					/>
					<?php esc_html_e( 'Lijstweergave inschakelen', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Voegt een schakelaar toe waarmee bezoekers kunnen wisselen tussen de kaart en een kaartenoverzicht van alle locaties.', 'draad-maps' ); ?></p>
				<br />
				<label for="draad_map_list_columns"><?php esc_html_e( 'Aantal kolommen', 'draad-maps' ); ?></label><br />
				<select id="draad_map_list_columns" name="draad_map_list_columns">
					<option value="1" <?php selected( $list_columns, 1 ); ?>>1</option>
					<option value="2" <?php selected( $list_columns, 2 ); ?>>2</option>
					<option value="3" <?php selected( $list_columns, 3 ); ?>>3</option>
					<option value="4" <?php selected( $list_columns, 4 ); ?>>4</option>
				</select>
				<p class="description"><?php esc_html_e( 'Hoeveel kaarten er per rij worden getoond.', 'draad-maps' ); ?></p>
				<br />
				<label>
					<input
						type="checkbox"
						name="draad_map_list_hide_address"
						value="1"
						<?php checked( $list_hide_address, '1' ); ?>
					/>
					<?php esc_html_e( 'Adres in lijstkaarten verbergen', 'draad-maps' ); ?>
				</label>
				<p class="description"><?php esc_html_e( 'Verbergt het adresveld in de lijstweergave, ook als het is ingevuld.', 'draad-maps' ); ?></p>
			</td>
		</tr>
		<tr>
			<th><label for="draad_map_action_label"><?php esc_html_e( 'Knoplabel', 'draad-maps' ); ?></label></th>
			<td>
				<input
					type="text"
					id="draad_map_action_label"
					name="draad_map_action_label"
					value="<?php echo esc_attr( $action_label ); ?>"
					class="regular-text"
				/>
				<p class="description"><?php esc_html_e( 'Label voor de actieknop in pop-ups en lijstkaarten. Laat leeg voor de standaardtekst ("Naar de website" / "Lees meer").', 'draad-maps' ); ?></p>
			</td>
		</tr>
	</table>
	<?php
}

function draad_maps_render_datasource_tab( int $index, array $ds = [], bool $active = false ) {
	$label = ! empty( $ds['label'] ) ? $ds['label'] : sprintf( __( 'Databron %d', 'draad-maps' ), $index + 1 );
	?>
	<li class="draad-ds-tab-item<?php echo $active ? ' is-active' : ''; ?>" role="presentation">
		<button type="button" class="draad-ds-tab" role="tab">
			<span class="draad-ds-tab-label"><?php echo esc_html( $label ); ?></span>
		</button>
		<button type="button" class="draad-ds-tab-remove" aria-label="<?php esc_attr_e( 'Deze databron verwijderen', 'draad-maps' ); ?>">&#215;</button>
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
			<?php esc_html_e( '+ Databron toevoegen', 'draad-maps' ); ?>
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
				<th style="width:200px"><label><?php esc_html_e( 'Naam', 'draad-maps' ); ?></label></th>
				<td>
					<input type="text" class="draad-ds-label regular-text" value="<?php echo esc_attr( $label ); ?>" placeholder="<?php esc_attr_e( 'bijv. Scholen, Parkeerplaatsen', 'draad-maps' ); ?>" />
					<p class="description"><?php esc_html_e( 'Wordt gebruikt als label in de kaartlegenda.', 'draad-maps' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php esc_html_e( 'Brontype', 'draad-maps' ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query" <?php selected( $type, 'post_query' ); ?>><?php esc_html_e( 'WordPress-inhoud', 'draad-maps' ); ?></option>
						<option value="geojson_url" <?php selected( $type, 'geojson_url' ); ?>><?php esc_html_e( 'GeoJSON-bestand (URL)', 'draad-maps' ); ?></option>
						<option value="wfs" <?php selected( $type, 'wfs' ); ?>><?php esc_html_e( 'WFS-dienst', 'draad-maps' ); ?></option>
						<option value="wms" <?php selected( $type, 'wms' ); ?>><?php esc_html_e( 'WMS-achtergrondlaag', 'draad-maps' ); ?></option>
					</select>
					<p class="description"><?php esc_html_e( 'Waar de locaties vandaan komen.', 'draad-maps' ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php esc_html_e( 'Alleen achtergrondlaag', 'draad-maps' ); ?></label></th>
				<td>
					<label>
						<input type="checkbox" class="draad-ds-display-only" <?php checked( $display_only ); ?> />
						<?php esc_html_e( 'Toon op de kaart, maar verberg in de lijstweergave en filters', 'draad-maps' ); ?>
					</label>
					<p class="description"><?php esc_html_e( 'Gebruik dit voor referentielagen zoals wijkgrenzen.', 'draad-maps' ); ?></p>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query" <?php echo $type !== 'post_query' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'Inhoudstype', 'draad-maps' ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php esc_html_e( '— Selecteer —', 'draad-maps' ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
								<option value="<?php echo esc_attr( $pt->name ); ?>" <?php selected( $ds_post_type, $pt->name ); ?>>
									<?php echo esc_html( $pt->label ); ?>
								</option>
							<?php endforeach; ?>
						</select>
						<p class="description"><?php esc_html_e( 'Welk WordPress-inhoudstype uw locaties bevat.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Coördinatenveld', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-location-field', $location_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Aangepast veld met de coördinaten van elk bericht als breedtegraad, lengtegraad (bijv. 52.0705, 4.3007).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Pop-up — titel', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-title-field', $title_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Getoond als koptekst in de kaartpop-up. Laat leeg om de berichttitel te gebruiken.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Pop-up — beschrijving', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-description-field', $desc_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Getoond als bodytekst in de kaartpop-up.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Pop-up — afbeelding', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-image-field', $image_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Aangepast veld met een afbeelding (bijlage-ID of volledige afbeeldings-URL).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Pop-up — kopregel', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-eyebrow-field', $eyebrow_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Kleine tekst boven de titel, zoals een categorie of badge.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Pop-up — adres', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-address-field', $address_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Adresregel getoond in de pop-up.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Kaart — websitelink', 'draad-maps' ); ?></label></th>
					<td>
						<?php draad_maps_render_meta_key_select( 'draad-ds-website-field', $website_field, $meta_keys ); ?>
						<p class="description"><?php esc_html_e( 'Aangepast veld met een externe URL. Als leeg, linkt de kaart naar het bericht zelf.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Kaart — categoriebron', 'draad-maps' ); ?></label></th>
					<td>
						<?php
						$taxonomies = $ds_post_type ? get_object_taxonomies( $ds_post_type, 'objects' ) : [];
						?>
						<select class="draad-ds-terms-taxonomy">
							<option value=""><?php esc_html_e( '— Geen —', 'draad-maps' ); ?></option>
							<?php foreach ( $taxonomies as $tax ) : ?>
								<option value="<?php echo esc_attr( $tax->name ); ?>" <?php selected( $terms_taxonomy, $tax->name ); ?>>
									<?php echo esc_html( $tax->label ); ?>
								</option>
							<?php endforeach; ?>
							<?php if ( $terms_taxonomy && ! isset( $taxonomies[ $terms_taxonomy ] ) ) : ?>
								<option value="<?php echo esc_attr( $terms_taxonomy ); ?>" selected><?php echo esc_html( $terms_taxonomy ); ?></option>
							<?php endif; ?>
						</select>
						<p class="description"><?php esc_html_e( 'Termen uit deze taxonomie worden als tags op de kaart getoond.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filterbare velden', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="<?php echo esc_attr( $filter_properties ); ?>" placeholder="field_key1,field_key2" />
						<p class="description"><?php esc_html_e( 'Aangepaste veldsleutels waarop bezoekers kunnen filteren. Scheid meerdere sleutels met komma\'s.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Filterweergavenamen', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="<?php echo esc_attr( $filter_labels ); ?>" placeholder="Label 1,Label 2" />
						<p class="description"><?php esc_html_e( 'Weergavenamen voor de bovenstaande velden, in dezelfde volgorde, gescheiden door komma\'s.', 'draad-maps' ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" <?php echo $type !== 'geojson_url' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'GeoJSON-bestand-URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'Een directe link naar een .geojson-bestand. Kies na het opslaan of laden welke velden u hieronder wilt tonen.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_property_mapping_table( $property_mapping ); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" <?php echo $type !== 'wfs' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WFS-dienst-URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'Eindpunt van een Web Feature Service (eindigt vaak op /wfs).', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Featuretypenaam', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-typename regular-text" value="<?php echo esc_attr( $typename ); ?>" placeholder="namespace:typename" />
						<p class="description"><?php esc_html_e( 'De laag om op te vragen, in namespace:typename-formaat.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<?php draad_maps_render_property_mapping_table( $property_mapping ); ?>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" <?php echo $type !== 'wms' ? 'style="display:none"' : ''; ?>>
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php esc_html_e( 'WMS-dienst-URL', 'draad-maps' ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="<?php echo esc_attr( $url ); ?>" />
						<p class="description"><?php esc_html_e( 'Eindpunt van een Web Map Service (eindigt vaak op /wms). Wordt getoond als achtergrondlaag — geen klikbare markeringen.', 'draad-maps' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php esc_html_e( 'Laagnamen', 'draad-maps' ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-layers regular-text" value="<?php echo esc_attr( $layers ); ?>" placeholder="layer1,layer2" />
						<p class="description"><?php esc_html_e( 'Een of meer WMS-laagnamen, gescheiden door komma\'s.', 'draad-maps' ); ?></p>
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
		<th style="width:200px"><label><?php esc_html_e( 'Beschikbare velden', 'draad-maps' ); ?></label></th>
		<td>
			<button type="button" class="button draad-ds-fetch-properties"><?php esc_html_e( 'Beschikbare velden laden', 'draad-maps' ); ?></button>
			<span class="draad-ds-fetch-status" style="margin-left:8px;color:#666"></span>
			<p class="description"><?php esc_html_e( 'Klik op "Beschikbare velden laden" om te zien wat er in de bron staat. Vink elk veld aan dat u in de pop-up wilt tonen en geef het een begrijpelijke naam.', 'draad-maps' ); ?></p>
			<div class="draad-ds-property-mapping" style="margin-top:8px;<?php echo empty( $property_mapping ) ? 'display:none' : ''; ?>">
				<table class="widefat fixed striped" style="max-width:600px">
					<thead>
						<tr>
							<th style="width:40px;padding:4px 8px"><?php esc_html_e( 'Tonen in pop-up', 'draad-maps' ); ?></th>
							<th style="padding:4px 8px"><?php esc_html_e( 'Veld', 'draad-maps' ); ?></th>
							<th style="padding:4px 8px"><?php esc_html_e( 'Weergavelabel', 'draad-maps' ); ?></th>
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

function draad_maps_render_meta_key_select( string $class, string $selected_value, array $meta_keys ) {
	?>
	<select class="<?php echo esc_attr( $class ); ?>">
		<option value=""><?php esc_html_e( '— Geen —', 'draad-maps' ); ?></option>
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
	<div class="draad-datasource-item draad-ds-panel" role="tabpanel">
		<table class="form-table" style="margin:0">
			<tr>
				<th style="width:200px"><label><?php echo esc_js( __( 'Naam', 'draad-maps' ) ); ?></label></th>
				<td>
					<input type="text" class="draad-ds-label regular-text" value="" placeholder="<?php echo esc_js( __( 'bijv. Scholen, Parkeerplaatsen', 'draad-maps' ) ); ?>" />
					<p class="description"><?php echo esc_js( __( 'Wordt gebruikt als label in de kaartlegenda.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php echo esc_js( __( 'Brontype', 'draad-maps' ) ); ?></label></th>
				<td>
					<select class="draad-ds-type">
						<option value="post_query"><?php echo esc_js( __( 'WordPress-inhoud', 'draad-maps' ) ); ?></option>
						<option value="geojson_url"><?php echo esc_js( __( 'GeoJSON-bestand (URL)', 'draad-maps' ) ); ?></option>
						<option value="wfs"><?php echo esc_js( __( 'WFS-dienst', 'draad-maps' ) ); ?></option>
						<option value="wms"><?php echo esc_js( __( 'WMS-achtergrondlaag', 'draad-maps' ) ); ?></option>
					</select>
					<p class="description"><?php echo esc_js( __( 'Waar de locaties vandaan komen.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><label><?php echo esc_js( __( 'Alleen achtergrondlaag', 'draad-maps' ) ); ?></label></th>
				<td>
					<label>
						<input type="checkbox" class="draad-ds-display-only" />
						<?php echo esc_js( __( 'Toon op de kaart, maar verberg in de lijstweergave en filters', 'draad-maps' ) ); ?>
					</label>
					<p class="description"><?php echo esc_js( __( 'Gebruik dit voor referentielagen zoals wijkgrenzen.', 'draad-maps' ) ); ?></p>
				</td>
			</tr>
		</table>

		<div class="draad-ds-fields draad-ds-fields--post-query">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'Inhoudstype', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-post-type">
							<option value=""><?php echo esc_js( __( '— Selecteer —', 'draad-maps' ) ); ?></option>
							<?php foreach ( $public_post_types as $pt ) : ?>
							<option value="<?php echo esc_attr( $pt->name ); ?>"><?php echo esc_html( $pt->label ); ?></option>
							<?php endforeach; ?>
						</select>
						<p class="description"><?php echo esc_js( __( 'Welk WordPress-inhoudstype uw locaties bevat.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Coördinatenveld', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-location-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Aangepast veld met de coördinaten van elk bericht als breedtegraad, lengtegraad (bijv. 52.0705, 4.3007).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Pop-up — titel', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-title-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Getoond als koptekst in de kaartpop-up. Laat leeg om de berichttitel te gebruiken.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Pop-up — beschrijving', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-description-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Getoond als bodytekst in de kaartpop-up.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Pop-up — afbeelding', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-image-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Aangepast veld met een afbeelding (bijlage-ID of volledige afbeeldings-URL).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Pop-up — kopregel', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-eyebrow-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Kleine tekst boven de titel, zoals een categorie of badge.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Pop-up — adres', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-address-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Adresregel getoond in de pop-up.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Kaart — websitelink', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-website-field"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Aangepast veld met een externe URL. Als leeg, linkt de kaart naar het bericht zelf.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Kaart — categoriebron', 'draad-maps' ) ); ?></label></th>
					<td>
						<select class="draad-ds-terms-taxonomy"><option value=""><?php echo esc_js( __( '— Geen —', 'draad-maps' ) ); ?></option></select>
						<p class="description"><?php echo esc_js( __( 'Termen uit deze taxonomie worden als tags op de kaart getoond.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filterbare velden', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-properties regular-text" value="" placeholder="field_key1,field_key2" />
						<p class="description"><?php echo esc_js( __( 'Aangepaste veldsleutels waarop bezoekers kunnen filteren. Scheid meerdere sleutels met komma\'s.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Filterweergavenamen', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-filter-labels regular-text" value="" placeholder="Label 1,Label 2" />
						<p class="description"><?php echo esc_js( __( 'Weergavenamen voor de bovenstaande velden, in dezelfde volgorde, gescheiden door komma\'s.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--geojson-url" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'GeoJSON-bestand-URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'Een directe link naar een .geojson-bestand. Kies na het opslaan of laden welke velden u hieronder wilt tonen.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'Beschikbare velden', 'draad-maps' ) ); ?></label></th>
					<td>
						<button type="button" class="button draad-ds-fetch-properties"><?php echo esc_js( __( 'Beschikbare velden laden', 'draad-maps' ) ); ?></button>
						<span class="draad-ds-fetch-status" style="margin-left:8px;color:#666"></span>
						<p class="description"><?php echo esc_js( __( 'Klik op "Beschikbare velden laden" om te zien wat er in de bron staat. Vink elk veld aan dat u in de pop-up wilt tonen en geef het een begrijpelijke naam.', 'draad-maps' ) ); ?></p>
						<div class="draad-ds-property-mapping" style="margin-top:8px;display:none">
							<table class="widefat fixed striped" style="max-width:600px">
								<thead>
									<tr>
										<th style="width:40px;padding:4px 8px"><?php echo esc_js( __( 'Tonen in pop-up', 'draad-maps' ) ); ?></th>
										<th style="padding:4px 8px"><?php echo esc_js( __( 'Veld', 'draad-maps' ) ); ?></th>
										<th style="padding:4px 8px"><?php echo esc_js( __( 'Weergavelabel', 'draad-maps' ) ); ?></th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wfs" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WFS-dienst-URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'Eindpunt van een Web Feature Service (eindigt vaak op /wfs).', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Featuretypenaam', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-typename regular-text" value="" placeholder="namespace:typename" />
						<p class="description"><?php echo esc_js( __( 'De laag om op te vragen, in namespace:typename-formaat.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'Beschikbare velden', 'draad-maps' ) ); ?></label></th>
					<td>
						<button type="button" class="button draad-ds-fetch-properties"><?php echo esc_js( __( 'Beschikbare velden laden', 'draad-maps' ) ); ?></button>
						<span class="draad-ds-fetch-status" style="margin-left:8px;color:#666"></span>
						<p class="description"><?php echo esc_js( __( 'Klik op "Beschikbare velden laden" om te zien wat er in de bron staat. Vink elk veld aan dat u in de pop-up wilt tonen en geef het een begrijpelijke naam.', 'draad-maps' ) ); ?></p>
						<div class="draad-ds-property-mapping" style="margin-top:8px;display:none">
							<table class="widefat fixed striped" style="max-width:600px">
								<thead>
									<tr>
										<th style="width:40px;padding:4px 8px"><?php echo esc_js( __( 'Tonen in pop-up', 'draad-maps' ) ); ?></th>
										<th style="padding:4px 8px"><?php echo esc_js( __( 'Veld', 'draad-maps' ) ); ?></th>
										<th style="padding:4px 8px"><?php echo esc_js( __( 'Weergavelabel', 'draad-maps' ) ); ?></th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<div class="draad-ds-fields draad-ds-fields--wms" style="display:none">
			<table class="form-table" style="margin:0">
				<tr>
					<th style="width:200px"><label><?php echo esc_js( __( 'WMS-dienst-URL', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="url" class="draad-ds-url large-text" value="" />
						<p class="description"><?php echo esc_js( __( 'Eindpunt van een Web Map Service (eindigt vaak op /wms). Wordt getoond als achtergrondlaag — geen klikbare markeringen.', 'draad-maps' ) ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php echo esc_js( __( 'Laagnamen', 'draad-maps' ) ); ?></label></th>
					<td>
						<input type="text" class="draad-ds-layers regular-text" value="" placeholder="layer1,layer2" />
						<p class="description"><?php echo esc_js( __( 'Een of meer WMS-laagnamen, gescheiden door komma\'s.', 'draad-maps' ) ); ?></p>
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
	update_post_meta( $post_id, '_draad_map_action_label', sanitize_text_field( wp_unslash( $_POST['draad_map_action_label'] ?? '' ) ) );

	if ( isset( $_POST['draad_map_datasources'] ) ) {
		$json = wp_unslash( $_POST['draad_map_datasources'] );
		update_post_meta( $post_id, '_draad_map_datasources', draad_maps_sanitize_datasources( $json ) );
	}
}
