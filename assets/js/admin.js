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

		// Marker colour applies to every marker source, not to WMS raster layers.
		const markerRow = card.querySelector( '.draad-ds-marker-color-row' );
		if ( markerRow ) markerRow.style.display = type === 'wms' ? 'none' : '';
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
				if ( sel ) sel.innerHTML = '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
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
					sel.innerHTML = '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
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
			sel.innerHTML = '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
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
				sel.innerHTML = '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
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
	// Feature popup field helpers (geojson / wfs)
	// -------------------------------------------------------------------------

	const FEATURE_FIELD_SELECTORS = [
		'.draad-ds-popup-image',
		'.draad-ds-popup-eyebrow',
		'.draad-ds-popup-title',
		'.draad-ds-popup-address',
		'.draad-ds-popup-action-field',
		'.draad-ds-popup-text',
		'.draad-ds-popup-chips',
		'.draad-ds-filter-fields',
	];

	// Rebuild a select's options from the loaded keys, preserving the current
	// selection (works for both single and multiple selects).
	function repopulateFieldSelect( sel, keys ) {
		if ( ! sel ) return;
		const isMulti  = sel.multiple;
		const selected = isMulti
			? Array.from( sel.selectedOptions ).map( ( o ) => o.value )
			: [ sel.value ];

		const all = keys.slice();
		selected.forEach( ( v ) => {
			if ( v && ! all.includes( v ) ) all.push( v );
		} );

		sel.innerHTML = isMulti ? '' : '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
		all.forEach( ( key ) => {
			const opt       = document.createElement( 'option' );
			opt.value       = key;
			opt.textContent = key;
			if ( selected.includes( key ) ) opt.selected = true;
			sel.appendChild( opt );
		} );
	}

	function populateFeatureFields( section, keys ) {
		FEATURE_FIELD_SELECTORS.forEach( ( cls ) => {
			repopulateFieldSelect( section.querySelector( cls ), keys );
		} );
		const hidden = section.querySelector( '.draad-ds-available-fields' );
		if ( hidden ) hidden.value = JSON.stringify( keys );
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
			if ( status ) status.textContent = draadMapsAdmin.i18n.enterUrlFirst;
			return;
		}

		if ( type === 'wfs' && ! typename ) {
			if ( status ) status.textContent = draadMapsAdmin.i18n.enterTypenameFirst;
			return;
		}

		if ( btn ) {
			btn.disabled    = true;
			btn.textContent = draadMapsAdmin.i18n.loading;
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
					populateFeatureFields( section, data.data );
					if ( status ) status.textContent = data.data.length + ' ' + draadMapsAdmin.i18n.fieldsLoaded;
				} else {
					if ( status ) status.textContent = data.data || draadMapsAdmin.i18n.errorFetching;
				}
			} )
			.catch( ( err ) => {
				if ( status ) status.textContent = draadMapsAdmin.i18n.networkError + err.message;
			} )
			.finally( () => {
				if ( btn ) {
					btn.disabled    = false;
					btn.textContent = draadMapsAdmin.i18n.loadProperties;
				}
			} );
	}

	// -------------------------------------------------------------------------
	// Tab helpers
	// -------------------------------------------------------------------------

	const tabList = document.getElementById( 'draad-datasources-tabs' );

	function getCards() {
		return Array.from( repeater.querySelectorAll( '.draad-datasource-item' ) );
	}

	function getTabItems() {
		return tabList ? Array.from( tabList.querySelectorAll( '.draad-ds-tab-item' ) ) : [];
	}

	function activateTab( index ) {
		getTabItems().forEach( ( tab, i ) => tab.classList.toggle( 'is-active', i === index ) );
		getCards().forEach( ( card, i ) => {
			card.classList.toggle( 'is-active', i === index );
			card.style.display = i === index ? '' : 'none';
		} );
	}

	function createTabItem( label ) {
		const li = document.createElement( 'li' );
		li.className = 'draad-ds-tab-item';
		li.setAttribute( 'role', 'presentation' );
		li.innerHTML =
			'<button type="button" class="draad-ds-tab" role="tab">' +
				'<span class="draad-ds-tab-label">' + ( label || '' ) + '</span>' +
			'</button>' +
			'<button type="button" class="draad-ds-tab-remove" aria-label="' + draadMapsAdmin.i18n.removeDatasource + '">\u00d7</button>';
		return li;
	}

	// -------------------------------------------------------------------------
	// Event delegation — type toggle + post type change + fetch
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
		if ( e.target.classList.contains( 'draad-ds-fetch-properties' ) ) {
			const card = e.target.closest( '.draad-datasource-item' );
			if ( card ) fetchAndPopulateProperties( card );
		}
	} );

	// -------------------------------------------------------------------------
	// Tab interactions — activate + remove
	// -------------------------------------------------------------------------

	if ( tabList ) {
		tabList.addEventListener( 'click', ( e ) => {
			const removeBtn = e.target.closest( '.draad-ds-tab-remove' );
			if ( removeBtn ) {
				const li    = removeBtn.closest( '.draad-ds-tab-item' );
				const tabs  = getTabItems();
				const index = tabs.indexOf( li );
				if ( index < 0 ) return;

				const activeIndex = tabs.findIndex( ( t ) => t.classList.contains( 'is-active' ) );
				const cards       = getCards();

				li.remove();
				if ( cards[ index ] ) cards[ index ].remove();

				updateCardNumbers();

				const remaining = getTabItems();
				if ( remaining.length > 0 ) {
					activateTab( Math.min( activeIndex, remaining.length - 1 ) );
				}
				return;
			}

			const tabBtn = e.target.closest( '.draad-ds-tab' );
			if ( tabBtn ) {
				const li    = tabBtn.closest( '.draad-ds-tab-item' );
				const index = getTabItems().indexOf( li );
				if ( index >= 0 ) activateTab( index );
			}
		} );
	}

	// -------------------------------------------------------------------------
	// Live label → tab title sync
	// -------------------------------------------------------------------------

	repeater.addEventListener( 'input', ( e ) => {
		if ( ! e.target.classList.contains( 'draad-ds-label' ) ) return;
		const card = e.target.closest( '.draad-datasource-item' );
		if ( ! card ) return;
		const index   = getCards().indexOf( card );
		const tabItem = getTabItems()[ index ];
		if ( ! tabItem ) return;
		const labelEl = tabItem.querySelector( '.draad-ds-tab-label' );
		if ( labelEl ) labelEl.textContent = e.target.value.trim() || ( draadMapsAdmin.i18n.datasourcePrefix + ( index + 1 ) );
	} );

	// -------------------------------------------------------------------------
	// Add datasource
	// -------------------------------------------------------------------------

	function getNextNumber() {
		return repeater.querySelectorAll( '.draad-datasource-item' ).length + 1;
	}

	function updateCardNumbers() {
		getTabItems().forEach( ( tab, i ) => {
			const card    = getCards()[ i ];
			const input   = card ? card.querySelector( '.draad-ds-label' ) : null;
			const labelEl = tab.querySelector( '.draad-ds-tab-label' );
			if ( labelEl && input && ! input.value.trim() ) {
				labelEl.textContent = draadMapsAdmin.i18n.datasourcePrefix + ( i + 1 );
			}
		} );
	}

	addBtn.addEventListener( 'click', () => {
		const number = getNextNumber();
		const html   = template.innerHTML.replace( /\{\{NUMBER\}\}/g, String( number ) );
		const div    = document.createElement( 'div' );
		div.innerHTML = html.trim();
		const card = div.firstElementChild;
		if ( ! card ) return;
		repeater.appendChild( card );
		toggleTypeFields( card );

		if ( tabList ) {
			const tabItem = createTabItem( draadMapsAdmin.i18n.datasourcePrefix + number );
			tabList.appendChild( tabItem );
			activateTab( getCards().length - 1 );
		}
	} );

	// Initialize type visibility and activate first tab for existing cards
	repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
		toggleTypeFields( card );
	} );

	if ( getTabItems().length > 0 ) {
		activateTab( 0 );
	}

	// -------------------------------------------------------------------------
	// Serialize to JSON on submit
	// -------------------------------------------------------------------------

	function serializeFeaturePopup( section ) {
		const single = ( cls ) => section.querySelector( cls )?.value || '';
		const multi  = ( cls ) =>
			Array.from( section.querySelector( cls )?.selectedOptions || [] ).map( ( o ) => o.value );

		let available = [];
		try {
			available = JSON.parse( section.querySelector( '.draad-ds-available-fields' )?.value || '[]' );
		} catch ( e ) {
			available = [];
		}

		return {
			popup_image:        single( '.draad-ds-popup-image' ),
			popup_eyebrow:      single( '.draad-ds-popup-eyebrow' ),
			popup_title:        single( '.draad-ds-popup-title' ),
			popup_address:      single( '.draad-ds-popup-address' ),
			popup_text:         multi( '.draad-ds-popup-text' ),
			popup_chips:        multi( '.draad-ds-popup-chips' ),
			popup_action_field: single( '.draad-ds-popup-action-field' ),
			popup_action_label: single( '.draad-ds-popup-action-label' ),
			filter_fields:      multi( '.draad-ds-filter-fields' ),
			available_fields:   available,
		};
	}

	function serializeDatasources() {
		const datasources = [];

		repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
			const type  = card.querySelector( '.draad-ds-type' ).value;
			const label = card.querySelector( '.draad-ds-label' ).value;
			const ds    = { type, label };
			ds.display_only = card.querySelector( '.draad-ds-display-only' )?.checked || false;
			ds.marker_color = card.querySelector( '.draad-ds-marker-color' )?.value || '';

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
				case 'geojson_url': {
					const sec = card.querySelector( '.draad-ds-fields--geojson-url' );
					ds.url    = sec.querySelector( '.draad-ds-url' ).value;
					Object.assign( ds, serializeFeaturePopup( sec ) );
					break;
				}
				case 'wfs': {
					const sec   = card.querySelector( '.draad-ds-fields--wfs' );
					ds.url      = sec.querySelector( '.draad-ds-url' ).value;
					ds.typename = sec.querySelector( '.draad-ds-typename' ).value;
					Object.assign( ds, serializeFeaturePopup( sec ) );
					break;
				}
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

// -------------------------------------------------------------------------
// PDOK location autocomplete for Startlocatie
// -------------------------------------------------------------------------

document.addEventListener( 'DOMContentLoaded', () => {
	const wrapper = document.querySelector( '.draad-location-search' );
	if ( ! wrapper ) return;

	const searchInput  = wrapper.querySelector( '.draad-location-search__input' );
	const clearBtn     = wrapper.querySelector( '.draad-location-search__clear' );
	const listbox      = wrapper.querySelector( '.draad-location-search__listbox' );
	const coordsEl     = wrapper.querySelector( '.draad-location-search__coords' );
	const hiddenCoords = document.getElementById( 'draad_map_center' );
	const hiddenLabel  = document.getElementById( 'draad_map_center_label' );

	const suggestUrl = wrapper.dataset.pdokSuggestUrl;
	const lookupUrl  = wrapper.dataset.pdokLookupUrl;
	const i18n       = ( window.draadMapsAdmin || {} ).i18n || {};

	searchInput.placeholder = i18n.searchPlaceholder || 'Search an address or place…';

	let debounceTimer  = null;
	let abortCtrl      = null;
	let activeIndex    = -1;

	// -- Helpers --

	function openListbox() {
		listbox.removeAttribute( 'hidden' );
		searchInput.setAttribute( 'aria-expanded', 'true' );
	}

	function closeListbox() {
		listbox.setAttribute( 'hidden', '' );
		listbox.innerHTML = '';
		searchInput.setAttribute( 'aria-expanded', 'false' );
		searchInput.removeAttribute( 'aria-activedescendant' );
		activeIndex = -1;
	}

	function setActive( index ) {
		const items = listbox.querySelectorAll( '.draad-location-search__option' );
		items.forEach( ( el, i ) => el.classList.toggle( 'is-active', i === index ) );
		activeIndex = index;
		if ( items[ index ] ) {
			searchInput.setAttribute( 'aria-activedescendant', items[ index ].id );
			items[ index ].scrollIntoView( { block: 'nearest' } );
		} else {
			searchInput.removeAttribute( 'aria-activedescendant' );
		}
	}

	function updateCoords( coords ) {
		hiddenCoords.value = coords;
		coordsEl.textContent = coords ? ( i18n.coordinatesLabel || 'Coordinates: ' ) + coords : '';
	}

	// -- Suggest --

	function suggest( query ) {
		if ( abortCtrl ) abortCtrl.abort();
		abortCtrl = new AbortController();

		const params = new URLSearchParams( {
			q:    query,
			fq:   'type:(adres OR weg OR woonplaats OR gemeente OR postcode OR wijk OR buurt)',
			rows: 8,
		} );

		fetch( suggestUrl + '?' + params.toString(), { signal: abortCtrl.signal } )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				const docs = data?.response?.docs || [];
				renderOptions( docs );
			} )
			.catch( ( err ) => {
				if ( err.name === 'AbortError' ) return;
				listbox.innerHTML = '<li class="draad-location-search__no-results">' + ( i18n.searchError || 'Location service unreachable.' ) + '</li>';
				openListbox();
			} );
	}

	function renderOptions( docs ) {
		listbox.innerHTML = '';
		if ( ! docs.length ) {
			listbox.innerHTML = '<li class="draad-location-search__no-results">' + ( i18n.searchNoResults || 'No results found.' ) + '</li>';
			openListbox();
			return;
		}

		docs.forEach( ( doc, i ) => {
			const li       = document.createElement( 'li' );
			li.id          = 'draad-location-option-' + i;
			li.className   = 'draad-location-search__option';
			li.setAttribute( 'role', 'option' );
			li.setAttribute( 'data-id', doc.id );
			li.setAttribute( 'data-label', doc.weergavenaam );
			li.textContent = doc.weergavenaam;
			listbox.appendChild( li );
		} );

		openListbox();
		activeIndex = -1;
	}

	// -- Lookup --

	function lookup( id, label ) {
		const params = new URLSearchParams( { id, fl: 'id,weergavenaam,centroide_ll' } );

		fetch( lookupUrl + '?' + params.toString() )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				const doc       = data?.response?.docs?.[ 0 ];
				const centroide = doc?.centroide_ll; // "POINT(lon lat)"
				if ( ! centroide ) return;

				const match = centroide.match( /POINT\(\s*([\d.]+)\s+([\d.]+)\s*\)/ );
				if ( ! match ) return;

				const lon    = parseFloat( match[ 1 ] );
				const lat    = parseFloat( match[ 2 ] );
				const coords = lat.toFixed( 5 ) + ',' + lon.toFixed( 5 );

				searchInput.value  = label;
				hiddenLabel.value  = label;
				updateCoords( coords );
				closeListbox();
			} )
			.catch( () => {} );
	}

	// -- Events --

	searchInput.addEventListener( 'input', () => {
		const q = searchInput.value.trim();
		clearTimeout( debounceTimer );

		if ( q.length < 2 ) {
			closeListbox();
			return;
		}

		debounceTimer = setTimeout( () => suggest( q ), 250 );
	} );

	searchInput.addEventListener( 'keydown', ( e ) => {
		const items = listbox.querySelectorAll( '.draad-location-search__option' );
		if ( e.key === 'ArrowDown' ) {
			e.preventDefault();
			setActive( Math.min( activeIndex + 1, items.length - 1 ) );
		} else if ( e.key === 'ArrowUp' ) {
			e.preventDefault();
			setActive( Math.max( activeIndex - 1, 0 ) );
		} else if ( e.key === 'Enter' ) {
			e.preventDefault();
			if ( activeIndex >= 0 && items[ activeIndex ] ) {
				selectOption( items[ activeIndex ] );
			}
		} else if ( e.key === 'Escape' ) {
			closeListbox();
		}
	} );

	listbox.addEventListener( 'mousedown', ( e ) => {
		const option = e.target.closest( '.draad-location-search__option' );
		if ( option ) {
			e.preventDefault();
			selectOption( option );
		}
	} );

	searchInput.addEventListener( 'blur', () => {
		setTimeout( closeListbox, 150 );
	} );

	clearBtn.addEventListener( 'click', () => {
		searchInput.value = '';
		hiddenLabel.value = '';
		updateCoords( '' );
		closeListbox();
		searchInput.focus();
	} );

	function selectOption( el ) {
		const id    = el.dataset.id;
		const label = el.dataset.label;
		lookup( id, label );
	}
} );
