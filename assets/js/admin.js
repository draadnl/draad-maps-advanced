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

	// Built-in post fields the AJAX list prepends — usable as popup slots, but not
	// as filter properties (render_post_query resolves those as meta/taxonomy).
	const POST_FIELDS = [ 'post_title', 'post_excerpt', 'post_content', 'featured_image' ];

	// Whatever dm-filter's `filter-types` accepts.
	const FILTER_TYPES = [ 'auto', 'bool', 'checkbox', 'range', 'dropdown' ];

	// Filterable keys: drop the built-in post fields and unwrap "taxonomy:foo" —
	// render_post_query matches bare taxonomy names via taxonomy_exists().
	function filterKeys( keys ) {
		const out = [];
		keys.forEach( ( key ) => {
			if ( POST_FIELDS.includes( key ) ) return;
			const bare = key.startsWith( 'taxonomy:' ) ? key.slice( 9 ) : key;
			if ( bare && ! out.includes( bare ) ) out.push( bare );
		} );
		return out;
	}

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
		const filterSel = card.querySelector( '.draad-ds-filter-properties' );
		// Query-filter sources keep the "taxonomy:" prefix — they become a
		// tax_query, unlike the frontend filter properties.
		const querySources = ( keys ) => keys.filter( ( k ) => ! POST_FIELDS.includes( k ) );
		const qfSelects    = () => card.querySelectorAll( '.draad-qf-source' );

		if ( ! preserveValues ) {
			selects.forEach( ( sel ) => {
				if ( sel ) sel.value = '';
			} );
			if ( filterSel ) {
				Array.from( filterSel.options ).forEach( ( o ) => { o.selected = false; } );
			}
			qfSelects().forEach( ( sel ) => { sel.value = ''; } );
		}

		if ( ! postType ) {
			selects.forEach( ( sel ) => repopulateFieldSelect( sel, [] ) );
			repopulateFieldSelect( filterSel, [] );
			qfSelects().forEach( ( sel ) => repopulateFieldSelect( sel, [] ) );
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
				selects.forEach( ( sel ) => repopulateFieldSelect( sel, data.data ) );
				repopulateFieldSelect( filterSel, filterKeys( data.data ) );
				qfSelects().forEach( ( sel ) => repopulateFieldSelect( sel, querySources( data.data ) ) );
			} );
	}

	// -------------------------------------------------------------------------
	// Token field — <select multiple> enhanced into a select2-style picker
	// -------------------------------------------------------------------------
	// ponytail: progressive enhancement, no dependency. The <select> stays the
	// source of truth (options = vocabulary, selected options = tokens), so the
	// serializers keep reading selectedOptions. Per-token filter label/type ride
	// along on the option's dataset.

	// Mirror of draad_maps_humanize_key() in PHP.
	function humanize( key ) {
		return key
			.replace( /[_-]+/g, ' ' )
			.replace( /\b\w/g, ( c ) => c.toUpperCase() );
	}

	function tokenWrap( select ) {
		const next = select.nextElementSibling;
		return next && next.classList.contains( 'draad-tokens' ) ? next : null;
	}

	function tokenSelect( el ) {
		const wrap = el.closest( '.draad-tokens' );
		return wrap ? wrap.previousElementSibling : null;
	}

	function tokenOption( select, value ) {
		return Array.from( select.options ).find( ( o ) => o.value === value ) || null;
	}

	function initTokenField( select ) {
		if ( ! select || select.dataset.tokenReady ) return;
		select.dataset.tokenReady = '1';
		select.hidden             = true;
		select.tabIndex           = -1;

		const wrap = document.createElement( 'div' );
		wrap.className = 'draad-tokens';
		wrap.innerHTML =
			'<div class="draad-tokens__box">' +
				'<ul class="draad-tokens__list"></ul>' +
				'<input type="text" class="draad-tokens__input" role="combobox" ' +
					'aria-expanded="false" aria-autocomplete="list" autocomplete="off" ' +
					'placeholder="' + draadMapsAdmin.i18n.addField + '" />' +
				'<ul class="draad-tokens__menu" role="listbox" hidden></ul>' +
			'</div>' +
			( '1' === select.dataset.filterMeta ? '<table class="draad-tokens__meta"></table>' : '' );

		select.insertAdjacentElement( 'afterend', wrap );
		renderTokens( select );
	}

	function initTokenFields( root ) {
		root.querySelectorAll( 'select[data-tokens]' ).forEach( initTokenField );
	}

	function renderTokens( select ) {
		const wrap = select && tokenWrap( select );
		if ( ! wrap ) return;

		const list = wrap.querySelector( '.draad-tokens__list' );
		const opts = Array.from( select.selectedOptions );

		list.innerHTML = '';
		opts.forEach( ( opt ) => {
			const li = document.createElement( 'li' );
			li.className     = 'draad-tokens__token';
			li.dataset.value = opt.value;
			li.innerHTML     = '<code></code><button type="button" class="draad-tokens__remove" tabindex="-1"></button>';
			li.querySelector( 'code' ).textContent = opt.value;
			li.querySelector( 'button' ).setAttribute( 'aria-label', draadMapsAdmin.i18n.removeField + ' ' + opt.value );
			list.appendChild( li );
		} );

		renderTokenMeta( select, opts );
	}

	// Per-token label + filter type. Rebuilt only when the token set changes, so
	// typing in a label input never loses focus.
	function renderTokenMeta( select, opts ) {
		const table = tokenWrap( select ).querySelector( '.draad-tokens__meta' );
		if ( ! table ) return;

		table.classList.toggle( 'is-empty', 0 === opts.length );
		table.innerHTML = '';
		if ( ! opts.length ) return;

		const head = document.createElement( 'thead' );
		head.innerHTML =
			'<tr><th>' + draadMapsAdmin.i18n.filterOrder +
			'</th><th></th><th>' + draadMapsAdmin.i18n.filterLabel +
			'</th><th>' + draadMapsAdmin.i18n.filterType +
			'</th><th>' + draadMapsAdmin.i18n.filterBoolLabel + '</th></tr>';
		table.appendChild( head );

		const body = document.createElement( 'tbody' );
		opts.forEach( ( opt, i ) => {
			const type = opt.dataset.type || 'auto';
			const tr   = document.createElement( 'tr' );
			tr.dataset.value = opt.value;
			// The bool cell is rendered for every row and hidden unless the type
			// is bool — cheaper than rebuilding the row when the type changes,
			// which would blur whatever the editor was typing in.
			tr.className     = 'bool' === type ? 'is-bool' : '';
			tr.innerHTML =
				'<td class="draad-tokens__meta-order">' +
					'<button type="button" class="draad-tokens__move" data-dir="-1" title="' +
						draadMapsAdmin.i18n.moveFieldUp + '" aria-label="' + draadMapsAdmin.i18n.moveFieldUp + '"' +
						( 0 === i ? ' disabled' : '' ) + '>&#9650;</button>' +
					'<button type="button" class="draad-tokens__move" data-dir="1" title="' +
						draadMapsAdmin.i18n.moveFieldDown + '" aria-label="' + draadMapsAdmin.i18n.moveFieldDown + '"' +
						( i === opts.length - 1 ? ' disabled' : '' ) + '>&#9660;</button>' +
				'</td>' +
				'<td class="draad-tokens__meta-key"><code></code></td>' +
				'<td><input type="text" class="draad-tokens__label" /></td>' +
				'<td><select class="draad-tokens__type">' +
					FILTER_TYPES.map( ( t ) =>
						'<option value="' + t + '"' + ( t === type ? ' selected' : '' ) + '>' + t + '</option>'
					).join( '' ) +
				'</select></td>' +
				'<td class="draad-tokens__meta-bool">' +
					'<input type="text" class="draad-tokens__bool-label" />' +
				'</td>';
			tr.querySelector( 'code' ).textContent = opt.value;

			const input       = tr.querySelector( '.draad-tokens__label' );
			input.value       = opt.dataset.label || '';
			input.placeholder = humanize( opt.value );

			const boolInput       = tr.querySelector( '.draad-tokens__bool-label' );
			boolInput.value       = opt.dataset.boolLabel || '';
			boolInput.placeholder = draadMapsAdmin.i18n.filterBoolDefault;

			body.appendChild( tr );
		} );
		table.appendChild( body );
	}

	function renderTokenMenu( select, query ) {
		const wrap  = tokenWrap( select );
		const menu  = wrap.querySelector( '.draad-tokens__menu' );
		const input = wrap.querySelector( '.draad-tokens__input' );
		const q     = query.trim();
		const lower = q.toLowerCase();
		const taken = Array.from( select.selectedOptions ).map( ( o ) => o.value );

		menu.innerHTML = '';

		Array.from( select.options )
			.map( ( o ) => o.value )
			.filter( ( v ) => v && ! taken.includes( v ) && ( ! lower || v.toLowerCase().includes( lower ) ) )
			.forEach( ( v ) => {
				const li = document.createElement( 'li' );
				li.className     = 'draad-tokens__option';
				li.dataset.value = v;
				li.setAttribute( 'role', 'option' );
				li.textContent   = v;
				menu.appendChild( li );
			} );

		// Free entry: a key that isn't in the loaded list is still addable — the
		// source may not have been fetched yet.
		const known = Array.from( select.options ).some( ( o ) => o.value.toLowerCase() === lower );
		if ( q && ! known ) {
			const li = document.createElement( 'li' );
			li.className     = 'draad-tokens__option draad-tokens__option--new';
			li.dataset.value = q;
			li.setAttribute( 'role', 'option' );
			li.innerHTML     = '<em></em>';
			li.firstChild.textContent = draadMapsAdmin.i18n.addFieldNamed + ' ';
			li.append( q );
			menu.appendChild( li );
		}

		if ( ! menu.children.length ) {
			menu.innerHTML = '<li class="draad-tokens__empty">' + draadMapsAdmin.i18n.noFieldsAvailable + '</li>';
		}

		menu.hidden = false;
		input.setAttribute( 'aria-expanded', 'true' );
		setActiveOption( menu, 0 );
	}

	function closeTokenMenu( select ) {
		const wrap = select && tokenWrap( select );
		if ( ! wrap ) return;
		wrap.querySelector( '.draad-tokens__menu' ).hidden = true;
		wrap.querySelector( '.draad-tokens__input' ).setAttribute( 'aria-expanded', 'false' );
	}

	function setActiveOption( menu, index ) {
		const options = Array.from( menu.querySelectorAll( '.draad-tokens__option' ) );
		if ( ! options.length ) return;
		const next = ( index + options.length ) % options.length;
		options.forEach( ( o, i ) => o.classList.toggle( 'is-active', i === next ) );
		options[ next ].scrollIntoView( { block: 'nearest' } );
	}

	function moveActiveOption( select, delta ) {
		const menu    = tokenWrap( select ).querySelector( '.draad-tokens__menu' );
		const options = Array.from( menu.querySelectorAll( '.draad-tokens__option' ) );
		const current = options.findIndex( ( o ) => o.classList.contains( 'is-active' ) );
		setActiveOption( menu, current + delta );
	}

	function addToken( select, value ) {
		const key = value.trim();
		if ( ! key ) return;

		let opt = tokenOption( select, key );
		if ( ! opt ) {
			opt             = document.createElement( 'option' );
			opt.value       = key;
			opt.textContent = key;
			select.appendChild( opt );
		}
		opt.selected = true;
		// Keep the invariant: selected options sit at the front of the select, in
		// display order, so a new token lands last instead of wherever the
		// vocabulary happened to list it.
		const chosen = Array.from( select.selectedOptions ).filter( ( o ) => o !== opt );
		const after  = chosen.length ? chosen[ chosen.length - 1 ].nextSibling : select.firstChild;
		select.insertBefore( opt, after );
		renderTokens( select );
	}

	// Swap a token with its neighbour. Moves the <option> itself, so selectedOptions
	// — which everything else reads — comes out in the new order.
	function moveToken( select, value, delta ) {
		const opts = Array.from( select.selectedOptions );
		const i    = opts.findIndex( ( o ) => o.value === value );
		const j    = i + delta;
		if ( i < 0 || j < 0 || j >= opts.length ) return;

		if ( delta < 0 ) {
			select.insertBefore( opts[ i ], opts[ j ] );
		} else {
			select.insertBefore( opts[ j ], opts[ i ] );
		}
		renderTokens( select );
	}

	function removeToken( select, value ) {
		const opt = tokenOption( select, value );
		if ( opt ) opt.selected = false;
		renderTokens( select );
	}

	function tokenValues( select ) {
		return select ? Array.from( select.selectedOptions ).map( ( o ) => o.value ) : [];
	}

	// Selected values plus their per-token label/type/bool label, aligned by index.
	function tokenMeta( select ) {
		const fields     = [];
		const labels     = [];
		const types      = [];
		const boolLabels = [];
		Array.from( select ? select.selectedOptions : [] ).forEach( ( o ) => {
			fields.push( o.value );
			labels.push( o.dataset.label || humanize( o.value ) );
			types.push( o.dataset.type || 'auto' );
			// Empty means "use the component default" — kept, not squeezed out.
			boolLabels.push( 'bool' === o.dataset.type ? ( o.dataset.boolLabel || '' ) : '' );
		} );
		return { fields, labels, types, boolLabels };
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
	// selection and any per-token filter label/type (works for both single and
	// multiple selects).
	function repopulateFieldSelect( sel, keys ) {
		if ( ! sel ) return;
		const isMulti  = sel.multiple;
		const chosen   = isMulti ? Array.from( sel.selectedOptions ) : [];
		const selected = isMulti ? chosen.map( ( o ) => o.value ) : [ sel.value ];

		const meta = {};
		chosen.forEach( ( o ) => {
			meta[ o.value ] = {
				label:     o.dataset.label || '',
				type:      o.dataset.type || '',
				boolLabel: o.dataset.boolLabel || '',
			};
		} );

		// Selected first, in their current order — refreshing the vocabulary must
		// never reshuffle the filters the editor arranged.
		const all = selected.filter( Boolean ).concat( keys.filter( ( k ) => ! selected.includes( k ) ) );

		sel.innerHTML = isMulti ? '' : '<option value="">' + draadMapsAdmin.i18n.noneOption + '</option>';
		all.forEach( ( key ) => {
			const opt       = document.createElement( 'option' );
			opt.value       = key;
			opt.textContent = key;
			if ( selected.includes( key ) ) opt.selected = true;
			if ( meta[ key ] && meta[ key ].label ) opt.dataset.label = meta[ key ].label;
			if ( meta[ key ] && meta[ key ].type ) opt.dataset.type = meta[ key ].type;
			if ( meta[ key ] && meta[ key ].boolLabel ) opt.dataset.boolLabel = meta[ key ].boolLabel;
			sel.appendChild( opt );
		} );

		renderTokens( sel );
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

		if ( e.target.classList.contains( 'draad-tokens__type' ) ) {
			const select = tokenSelect( e.target );
			const value  = e.target.closest( 'tr' ).dataset.value;
			const opt    = select && tokenOption( select, value );
			if ( opt ) opt.dataset.type = e.target.value;
			e.target.closest( 'tr' ).classList.toggle( 'is-bool', 'bool' === e.target.value );
		}
	} );

	// Value autocomplete: existing term slugs / meta values as <datalist>
	// suggestions. The input stays free text — custom values are allowed.
	let qfListId = 0;
	const qfValues = new Map();

	function loadQueryFilterValues( input ) {
		const row      = input.closest( '.draad-qf-row' );
		const card     = input.closest( '.draad-datasource-item' );
		const source   = row.querySelector( '.draad-qf-source' ).value;
		const postType = card.querySelector( '.draad-ds-post-type' ).value;
		if ( ! source || ! postType ) return;

		let list = row.querySelector( 'datalist' );
		if ( ! list ) {
			list    = document.createElement( 'datalist' );
			list.id = 'draad-qf-values-' + ( ++qfListId );
			row.appendChild( list );
			input.setAttribute( 'list', list.id );
		}
		if ( list.dataset.source === source ) return;
		list.dataset.source = source;

		const fill = ( values ) => {
			list.innerHTML = '';
			values.forEach( ( v ) => {
				const opt = document.createElement( 'option' );
				opt.value = v;
				list.appendChild( opt );
			} );
		};

		const key = postType + '|' + source;
		if ( qfValues.has( key ) ) {
			fill( qfValues.get( key ) );
			return;
		}

		const params = new URLSearchParams( {
			action:    'draad_maps_get_source_values',
			nonce:     draadMapsAdmin.nonce,
			post_type: postType,
			source:    source,
		} );

		fetch( draadMapsAdmin.ajaxUrl + '?' + params.toString() )
			.then( ( r ) => r.json() )
			.then( ( data ) => {
				if ( ! data.success ) return;
				qfValues.set( key, data.data );
				fill( data.data );
			} );
	}

	repeater.addEventListener( 'focusin', ( e ) => {
		if ( e.target.classList.contains( 'draad-qf-value' ) ) loadQueryFilterValues( e.target );
	} );

	repeater.addEventListener( 'click', ( e ) => {
		if ( e.target.classList.contains( 'draad-qf-add' ) ) {
			const rows = e.target.previousElementSibling;
			const tpl  = rows.querySelector( '.draad-qf-row--template' );
			const row  = tpl.cloneNode( true );
			row.classList.remove( 'draad-qf-row--template' );
			row.style.display = '';
			// Drop the cloned datalist — ids must stay unique.
			const stale = row.querySelector( 'datalist' );
			if ( stale ) stale.remove();
			row.querySelector( '.draad-qf-value' ).removeAttribute( 'list' );
			rows.insertBefore( row, tpl );
			return;
		}

		if ( e.target.classList.contains( 'draad-qf-remove' ) ) {
			e.target.closest( '.draad-qf-row' ).remove();
		}
	} );

	repeater.addEventListener( 'click', ( e ) => {
		if ( e.target.classList.contains( 'draad-ds-fetch-properties' ) ) {
			const card = e.target.closest( '.draad-datasource-item' );
			if ( card ) fetchAndPopulateProperties( card );
		}
	} );

	// -------------------------------------------------------------------------
	// Token field interactions
	// -------------------------------------------------------------------------

	repeater.addEventListener( 'click', ( e ) => {
		const moveBtn = e.target.closest( '.draad-tokens__move' );
		if ( moveBtn ) {
			const select = tokenSelect( moveBtn );
			if ( select ) moveToken( select, moveBtn.closest( 'tr' ).dataset.value, Number( moveBtn.dataset.dir ) );
			return;
		}

		const removeBtn = e.target.closest( '.draad-tokens__remove' );
		if ( removeBtn ) {
			const select = tokenSelect( removeBtn );
			if ( select ) removeToken( select, removeBtn.closest( '.draad-tokens__token' ).dataset.value );
			return;
		}

		// Clicking anywhere in the box focuses the input, like a real text field.
		const box = e.target.closest( '.draad-tokens__box' );
		if ( box ) box.querySelector( '.draad-tokens__input' ).focus();
	} );

	// mousedown, not click — the input's blur would close the menu first.
	repeater.addEventListener( 'mousedown', ( e ) => {
		const option = e.target.closest( '.draad-tokens__option' );
		if ( ! option ) return;
		e.preventDefault();

		const select = tokenSelect( option );
		if ( ! select ) return;
		const input = tokenWrap( select ).querySelector( '.draad-tokens__input' );
		addToken( select, option.dataset.value );
		input.value = '';
		renderTokenMenu( select, '' );
	} );

	repeater.addEventListener( 'input', ( e ) => {
		if ( e.target.classList.contains( 'draad-tokens__input' ) ) {
			const select = tokenSelect( e.target );
			if ( select ) renderTokenMenu( select, e.target.value );
			return;
		}

		if ( e.target.classList.contains( 'draad-tokens__label' ) ) {
			const select = tokenSelect( e.target );
			const opt    = select && tokenOption( select, e.target.closest( 'tr' ).dataset.value );
			if ( opt ) opt.dataset.label = e.target.value;
		}

		if ( e.target.classList.contains( 'draad-tokens__bool-label' ) ) {
			const select = tokenSelect( e.target );
			const opt    = select && tokenOption( select, e.target.closest( 'tr' ).dataset.value );
			if ( opt ) opt.dataset.boolLabel = e.target.value;
		}
	} );

	repeater.addEventListener( 'keydown', ( e ) => {
		if ( ! e.target.classList.contains( 'draad-tokens__input' ) ) return;

		const select = tokenSelect( e.target );
		if ( ! select ) return;
		const menu = tokenWrap( select ).querySelector( '.draad-tokens__menu' );

		switch ( e.key ) {
			case 'ArrowDown':
			case 'ArrowUp':
				e.preventDefault();
				if ( menu.hidden ) {
					renderTokenMenu( select, e.target.value );
				} else {
					moveActiveOption( select, 'ArrowDown' === e.key ? 1 : -1 );
				}
				break;
			case 'Enter': {
				// Never let the picker submit the post.
				e.preventDefault();
				const active = menu.hidden ? null : menu.querySelector( '.draad-tokens__option.is-active' );
				const value  = active ? active.dataset.value : e.target.value;
				if ( value.trim() ) {
					addToken( select, value );
					e.target.value = '';
					renderTokenMenu( select, '' );
				}
				break;
			}
			case 'Escape':
				closeTokenMenu( select );
				break;
			case 'Backspace': {
				if ( e.target.value ) break;
				const current = tokenValues( select );
				if ( current.length ) removeToken( select, current[ current.length - 1 ] );
				break;
			}
		}
	} );

	repeater.addEventListener( 'focusin', ( e ) => {
		if ( ! e.target.classList.contains( 'draad-tokens__input' ) ) return;
		const select = tokenSelect( e.target );
		if ( select ) renderTokenMenu( select, e.target.value );
	} );

	repeater.addEventListener( 'focusout', ( e ) => {
		if ( ! e.target.classList.contains( 'draad-tokens__input' ) ) return;
		const wrap = e.target.closest( '.draad-tokens' );
		if ( wrap && wrap.contains( e.relatedTarget ) ) return;
		closeTokenMenu( tokenSelect( e.target ) );
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
		initTokenFields( card );

		if ( tabList ) {
			const tabItem = createTabItem( draadMapsAdmin.i18n.datasourcePrefix + number );
			tabList.appendChild( tabItem );
			activateTab( getCards().length - 1 );
		}
	} );

	// Initialize type visibility and activate first tab for existing cards
	repeater.querySelectorAll( '.draad-datasource-item' ).forEach( ( card ) => {
		toggleTypeFields( card );
		initTokenFields( card );
	} );

	if ( getTabItems().length > 0 ) {
		activateTab( 0 );
	}

	// -------------------------------------------------------------------------
	// Serialize to JSON on submit
	// -------------------------------------------------------------------------

	function serializeFeaturePopup( section ) {
		const single = ( cls ) => section.querySelector( cls )?.value || '';
		const multi  = ( cls ) => tokenValues( section.querySelector( cls ) );

		let available = [];
		try {
			available = JSON.parse( section.querySelector( '.draad-ds-available-fields' )?.value || '[]' );
		} catch ( e ) {
			available = [];
		}

		const filters = tokenMeta( section.querySelector( '.draad-ds-filter-fields' ) );

		return {
			popup_image:        single( '.draad-ds-popup-image' ),
			popup_eyebrow:      single( '.draad-ds-popup-eyebrow' ),
			popup_title:        single( '.draad-ds-popup-title' ),
			popup_address:      single( '.draad-ds-popup-address' ),
			popup_text:         multi( '.draad-ds-popup-text' ),
			popup_chips:        multi( '.draad-ds-popup-chips' ),
			popup_action_field: single( '.draad-ds-popup-action-field' ),
			popup_action_label: single( '.draad-ds-popup-action-label' ),
			filter_fields:      filters.fields,
			filter_labels:      filters.labels,
			filter_types:       filters.types,
			filter_bool_labels: filters.boolLabels,
			available_fields:   available,
		};
	}

	// Repeater rows, minus the hidden template row and any row without a source.
	function serializeQueryFilters( card ) {
		const rows = card.querySelectorAll( '.draad-ds-fields--post-query .draad-qf-row:not(.draad-qf-row--template)' );

		return Array.from( rows )
			.map( ( row ) => ( {
				source:   row.querySelector( '.draad-qf-source' ).value,
				operator: row.querySelector( '.draad-qf-operator' ).value,
				value:    row.querySelector( '.draad-qf-value' ).value,
			} ) )
			.filter( ( f ) => f.source );
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
				case 'post_query': {
					// Storage stays three comma strings; the token field builds them,
					// so nothing has to stay index-aligned by hand any more.
					const filters = tokenMeta( card.querySelector( '.draad-ds-filter-properties' ) );

					ds.post_type         = card.querySelector( '.draad-ds-post-type' ).value;
					ds.location_field    = card.querySelector( '.draad-ds-location-field' ).value;
					ds.title_field       = card.querySelector( '.draad-ds-title-field' ).value;
					ds.description_field = card.querySelector( '.draad-ds-description-field' ).value;
					ds.image_field       = card.querySelector( '.draad-ds-image-field' ).value;
					ds.eyebrow_field     = card.querySelector( '.draad-ds-eyebrow-field' ).value;
					ds.address_field     = card.querySelector( '.draad-ds-address-field' ).value;
					ds.website_field     = card.querySelector( '.draad-ds-website-field' ).value;
					ds.terms_taxonomy    = card.querySelector( '.draad-ds-terms-taxonomy' ).value;
					ds.filter_properties = filters.fields.join( ',' );
					ds.filter_labels     = filters.labels.join( ',' );
					ds.filter_types      = filters.types.join( ',' );
					ds.filter_bool_labels = filters.boolLabels.join( ',' );
					ds.query_filters  = serializeQueryFilters( card );
					ds.query_relation = card.querySelector( '.draad-ds-query-relation' )?.value || 'AND';
					break;
				}
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

// Default view button group.
document.addEventListener( 'DOMContentLoaded', () => {
	const group  = document.querySelector( '.draad-default-view__buttons' );
	const hidden = document.getElementById( 'draad_map_default_view' );

	if ( ! group || ! hidden ) {
		return;
	}

	group.addEventListener( 'click', ( e ) => {
		const btn = e.target.closest( 'button[data-value]' );
		if ( ! btn ) {
			return;
		}
		hidden.value = btn.dataset.value;
		group.querySelectorAll( 'button' ).forEach( ( b ) => {
			b.classList.toggle( 'button-primary', b === btn );
		} );
	} );
} );
