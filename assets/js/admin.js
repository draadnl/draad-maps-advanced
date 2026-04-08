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
	// Event delegation — type toggle + post type change + remove
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

	function serializeDatasources() {
		const datasources = [];

		repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
			const type  = card.querySelector( '.draad-ds-type' ).value;
			const label = card.querySelector( '.draad-ds-label' ).value;
			const ds    = { type, label };

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
					ds.url = card.querySelector( '.draad-ds-url' ).value;
					break;
				case 'wfs':
					ds.url      = card.querySelector( '.draad-ds-url' ).value;
					ds.typename = card.querySelector( '.draad-ds-typename' ).value;
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
