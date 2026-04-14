document.addEventListener( 'DOMContentLoaded', () => {
	const repeater  = document.getElementById( 'draad-datasources-repeater' );
	const addBtn    = document.getElementById( 'draad-add-datasource' );
	const jsonField = document.getElementById( 'draad-map-datasources-json' );
	const template  = document.getElementById( 'draad-datasource-template' );

	if ( ! repeater || ! addBtn || ! jsonField || ! template ) {
		return;
	}

	// -------------------------------------------------------------------------
	// Type toggle
	// -------------------------------------------------------------------------

	function toggleTypeFields( card ) {
		const typeSelect = card.querySelector( '.draad-ds-type' );
		if ( ! typeSelect ) return;
		const type = typeSelect.value;
		card.querySelectorAll( '.draad-ds-fields' ).forEach( ( el ) => {
			el.style.display = 'none';
		} );
		const slug   = type.replace( /_/g, '-' );
		const active = card.querySelector( '.draad-ds-fields--' + slug );
		if ( active ) {
			active.style.display = '';
		}
	}

	// -------------------------------------------------------------------------
	// Meta key AJAX
	// -------------------------------------------------------------------------

	function loadMetaKeys( card, postType, preserveValues ) {
		const selects = [
			card.querySelector( '.draad-ds-location-field' ),
			card.querySelector( '.draad-ds-title-field' ),
			card.querySelector( '.draad-ds-description-field' ),
			card.querySelector( '.draad-ds-image-field' ),
			card.querySelector( '.draad-ds-eyebrow-field' ),
			card.querySelector( '.draad-ds-address-field' ),
			card.querySelector( '.draad-ds-website-field' ),
		];

		if ( ! postType ) {
			selects.forEach( ( sel ) => {
				if ( sel ) sel.innerHTML = '<option value="">— None —</option>';
			} );
			return;
		}

		const params = new URLSearchParams( {
			action:    'draad_maps_get_meta_keys',
			nonce:     draadMapsAdmin.nonce,
			post_type: postType,
		} );

		fetch( draadMapsAdmin.ajaxUrl + '?' + params.toString() )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				if ( ! data.success ) return;
				const keys = data.data;

				selects.forEach( ( sel ) => {
					if ( ! sel ) return;
					const prev = preserveValues ? sel.value : '';
					sel.innerHTML = '<option value="">— None —</option>';
					keys.forEach( ( key ) => {
						const opt       = document.createElement( 'option' );
						opt.value       = key;
						opt.textContent = key;
						if ( key === prev ) opt.selected = true;
						sel.appendChild( opt );
					} );
					if ( prev && sel.value !== prev ) {
						const opt       = document.createElement( 'option' );
						opt.value       = prev;
						opt.textContent = prev;
						opt.selected    = true;
						sel.appendChild( opt );
					}
				} );
			} );
	}

	// -------------------------------------------------------------------------
	// Taxonomy AJAX
	// -------------------------------------------------------------------------

	function loadTaxonomies( card, postType, preserveValue ) {
		const sel = card.querySelector( '.draad-ds-terms-taxonomy' );
		if ( ! sel ) return;

		if ( ! postType ) {
			sel.innerHTML = '<option value="">— None —</option>';
			return;
		}

		const params = new URLSearchParams( {
			action:    'draad_maps_get_taxonomies',
			nonce:     draadMapsAdmin.nonce,
			post_type: postType,
		} );

		fetch( draadMapsAdmin.ajaxUrl + '?' + params.toString() )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				if ( ! data.success ) return;
				const prev = preserveValue ? sel.value : '';
				sel.innerHTML = '<option value="">— None —</option>';
				data.data.forEach( ( tax ) => {
					const opt       = document.createElement( 'option' );
					opt.value       = tax.name;
					opt.textContent = tax.label;
					if ( tax.name === prev ) opt.selected = true;
					sel.appendChild( opt );
				} );
				if ( prev && sel.value !== prev ) {
					const opt       = document.createElement( 'option' );
					opt.value       = prev;
					opt.textContent = prev;
					opt.selected    = true;
					sel.appendChild( opt );
				}
			} );
	}

	// -------------------------------------------------------------------------
	// Property mapping helpers
	// -------------------------------------------------------------------------

	function humanizeKey( key ) {
		return key.replace( /[_-]/g, ' ' ).replace( /\b\w/g, ( c ) => c.toUpperCase() );
	}

	function getExistingMapping( card ) {
		const map = new Map();
		card.querySelectorAll( '.draad-ds-pm-row' ).forEach( ( row ) => {
			const key     = row.querySelector( '.draad-ds-pm-key' ).textContent;
			const label   = row.querySelector( '.draad-ds-pm-label' ).value;
			const visible = row.querySelector( '.draad-ds-pm-visible' ).checked;
			map.set( key, { label, visible } );
		} );
		return map;
	}

	function populatePropertyMapping( card, keys ) {
		const container = card.querySelector( '.draad-ds-property-mapping' );
		if ( ! container ) return;

		const tbody   = container.querySelector( 'tbody' );
		const existing = getExistingMapping( card );

		tbody.innerHTML = '';

		keys.forEach( ( key ) => {
			const prev    = existing.get( key );
			const label   = prev ? prev.label : humanizeKey( key );
			const visible = prev ? prev.visible : true;

			const tr = document.createElement( 'tr' );
			tr.className = 'draad-ds-pm-row';
			tr.innerHTML =
				'<td style="padding:4px 8px"><input type="checkbox" class="draad-ds-pm-visible"' + ( visible ? ' checked' : '' ) + ' /></td>' +
				'<td style="padding:4px 8px"><code class="draad-ds-pm-key">' + key.replace( /</g, '&lt;' ) + '</code></td>' +
				'<td style="padding:4px 8px"><input type="text" class="draad-ds-pm-label" value="' + label.replace( /"/g, '&quot;' ) + '" style="width:100%" /></td>';
			tbody.appendChild( tr );
		} );

		container.style.display = keys.length ? '' : 'none';
	}

	function fetchAndPopulateProperties( card ) {
		const type     = card.querySelector( '.draad-ds-type' ).value;
		const slug     = type.replace( /_/g, '-' );
		const section  = card.querySelector( '.draad-ds-fields--' + slug );
		if ( ! section ) return;

		const url      = section.querySelector( '.draad-ds-url' )?.value || '';
		const typename = section.querySelector( '.draad-ds-typename' )?.value || '';
		const btn      = section.querySelector( '.draad-ds-fetch-properties' );
		const status   = section.querySelector( '.draad-ds-fetch-status' );

		if ( ! url ) {
			if ( status ) status.textContent = 'Please enter a URL first.';
			return;
		}

		if ( type === 'wfs' && ! typename ) {
			if ( status ) status.textContent = 'Please enter a TypeName first.';
			return;
		}

		if ( btn ) {
			btn.disabled    = true;
			btn.textContent = 'Fetching…';
		}
		if ( status ) status.textContent = '';

		const body = new URLSearchParams( {
			action:   'draad_maps_fetch_geojson_properties',
			nonce:    draadMapsAdmin.nonce,
			url:      url,
			type:     type,
			typename: typename,
		} );

		fetch( draadMapsAdmin.ajaxUrl, {
			method: 'POST',
			body:   body,
		} )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				if ( data.success ) {
					populatePropertyMapping( card, data.data );
					if ( status ) status.textContent = data.data.length + ' properties found.';
				} else {
					if ( status ) status.textContent = data.data || 'Error fetching properties.';
				}
			} )
			.catch( ( err ) => {
				if ( status ) status.textContent = 'Network error: ' + err.message;
			} )
			.finally( () => {
				if ( btn ) {
					btn.disabled    = false;
					btn.textContent = 'Fetch Properties';
				}
			} );
	}

	// -------------------------------------------------------------------------
	// Event delegation — type toggle + post type change + remove + fetch
	// -------------------------------------------------------------------------

	repeater.addEventListener( 'change', ( e ) => {
		const card = e.target.closest( '.draad-datasource-item' );
		if ( ! card ) return;

		if ( e.target.classList.contains( 'draad-ds-type' ) ) {
			toggleTypeFields( card );
		}

		if ( e.target.classList.contains( 'draad-ds-post-type' ) ) {
			loadMetaKeys( card, e.target.value, false );
			loadTaxonomies( card, e.target.value, false );
		}
	} );

	repeater.addEventListener( 'click', ( e ) => {
		if ( e.target.classList.contains( 'draad-remove-datasource' ) ) {
			e.target.closest( '.draad-datasource-item' ).remove();
			updateCardNumbers();
		}

		if ( e.target.classList.contains( 'draad-ds-fetch-properties' ) ) {
			const card = e.target.closest( '.draad-datasource-item' );
			if ( card ) fetchAndPopulateProperties( card );
		}
	} );

	// -------------------------------------------------------------------------
	// Add datasource
	// -------------------------------------------------------------------------

	function getNextNumber() {
		return repeater.querySelectorAll( '.draad-datasource-item' ).length + 1;
	}

	function updateCardNumbers() {
		repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card, i ) => {
			const strong = card.querySelector( 'strong' );
			if ( strong ) strong.textContent = 'Datasource ' + ( i + 1 );
		} );
	}

	addBtn.addEventListener( 'click', () => {
		const html = template.innerHTML.replace( /\{\{NUMBER\}\}/g, String( getNextNumber() ) );
		const div  = document.createElement( 'div' );
		div.innerHTML = html.trim();
		const card = div.firstElementChild;
		if ( ! card ) return;
		repeater.appendChild( card );
		toggleTypeFields( card );
	} );

	// Initialize type visibility for existing cards
	repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
		toggleTypeFields( card );
	} );

	// -------------------------------------------------------------------------
	// Serialize to JSON on submit
	// -------------------------------------------------------------------------

	function serializePropertyMapping( card ) {
		const mapping = [];
		card.querySelectorAll( '.draad-ds-pm-row' ).forEach( ( row ) => {
			mapping.push( {
				key:     row.querySelector( '.draad-ds-pm-key' ).textContent,
				label:   row.querySelector( '.draad-ds-pm-label' ).value,
				visible: row.querySelector( '.draad-ds-pm-visible' ).checked,
			} );
		} );
		return mapping;
	}

	function serializeDatasources() {
		const datasources = [];

		repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
			const type  = card.querySelector( '.draad-ds-type' ).value;
			const label = card.querySelector( '.draad-ds-label' ).value;
			const ds    = { type, label };
			ds.display_only = card.querySelector( '.draad-ds-display-only' )?.checked || false;

			switch ( type ) {
				case 'post_query':
					ds.post_type         = card.querySelector( '.draad-ds-post-type' ).value;
					ds.location_field    = card.querySelector( '.draad-ds-location-field' ).value;
					ds.title_field       = card.querySelector( '.draad-ds-title-field' ).value;
					ds.description_field = card.querySelector( '.draad-ds-description-field' ).value;
					ds.image_field       = card.querySelector( '.draad-ds-image-field' ).value;
					ds.eyebrow_field     = card.querySelector( '.draad-ds-eyebrow-field' ).value;
					ds.address_field     = card.querySelector( '.draad-ds-address-field' ).value;
					ds.website_field     = card.querySelector( '.draad-ds-website-field' ).value;
					ds.terms_taxonomy    = card.querySelector( '.draad-ds-terms-taxonomy' ).value;
					ds.filter_properties = card.querySelector( '.draad-ds-filter-properties' ).value;
					ds.filter_labels     = card.querySelector( '.draad-ds-filter-labels' ).value;
					break;
				case 'geojson_url':
					ds.url              = card.querySelector( '.draad-ds-fields--geojson-url .draad-ds-url' ).value;
					ds.property_mapping = serializePropertyMapping( card );
					break;
				case 'wfs':
					ds.url              = card.querySelector( '.draad-ds-fields--wfs .draad-ds-url' ).value;
					ds.typename         = card.querySelector( '.draad-ds-typename' ).value;
					ds.property_mapping = serializePropertyMapping( card );
					break;
				case 'wms':
					ds.url    = card.querySelector( '.draad-ds-url' ).value;
					ds.layers = card.querySelector( '.draad-ds-layers' ).value;
					break;
			}

			datasources.push( ds );
		} );

		jsonField.value = JSON.stringify( datasources );
	}

	const postForm = document.getElementById( 'post' ) || document.querySelector( 'form[name="post"]' );
	if ( postForm ) {
		postForm.addEventListener( 'submit', serializeDatasources );
	}
} );
