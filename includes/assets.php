<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'admin_enqueue_scripts', 'draad_maps_enqueue_admin_assets' );
add_action( 'init', 'draad_maps_register_block' );

function draad_maps_enqueue_admin_assets( string $hook ) {
	if ( ! in_array( $hook, [ 'post.php', 'post-new.php' ], true ) ) {
		return;
	}

	$screen = get_current_screen();
	if ( ! $screen || $screen->post_type !== 'map' ) {
		return;
	}

	wp_enqueue_style(
		'draad-maps-admin',
		DRAAD_MAPS_URL . 'assets/css/admin.css',
		[],
		DRAAD_MAPS_VERSION
	);

	wp_enqueue_script(
		'draad-maps-admin',
		DRAAD_MAPS_URL . 'assets/js/admin.js',
		[],
		DRAAD_MAPS_VERSION,
		true
	);

	wp_localize_script( 'draad-maps-admin', 'draadMapsAdmin', [
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'draad_maps_admin' ),
		'i18n'    => [
			'noneOption'         => __( '— None —', 'draad-maps' ),
			'loading'            => __( 'Loading…', 'draad-maps' ),
			'loadProperties'     => __( 'Load available fields', 'draad-maps' ),
			'enterUrlFirst'      => __( 'Please enter a URL first.', 'draad-maps' ),
			'enterTypenameFirst' => __( 'Please enter a feature type name first.', 'draad-maps' ),
			'fieldsLoaded'       => __( 'fields loaded.', 'draad-maps' ),
			'errorFetching'      => __( 'Could not load fields. Check the URL and try again.', 'draad-maps' ),
			'networkError'       => __( 'Service is unreachable: ', 'draad-maps' ),
			'removeDatasource'   => __( 'Remove this data source', 'draad-maps' ),
			'datasourcePrefix'   => __( 'Data source ', 'draad-maps' ),
			'searchPlaceholder'  => __( 'Search an address or place…', 'draad-maps' ),
			'searchNoResults'    => __( 'No results found.', 'draad-maps' ),
			'searchError'        => __( 'Location service unreachable.', 'draad-maps' ),
			'searchClear'        => __( 'Clear location', 'draad-maps' ),
			'coordinatesLabel'   => __( 'Coordinates: ', 'draad-maps' ),
		],
	] );
}

function draad_maps_enqueue_frontend_assets() {
	static $enqueued = false;

	if ( $enqueued ) {
		return;
	}

	$enqueued = true;

	// Icon sprite must be defined before the IIFE instantiates components.
	$sprite_url  = DRAAD_MAPS_URL . 'assets/js/denhaag-sprite.js';
	$sprite_ver  = DRAAD_MAPS_VERSION;

	wp_enqueue_script(
		'draad-maps-denhaag-sprite',
		$sprite_url,
		[],
		$sprite_ver,
		false
	);

	$iife_url  = DRAAD_MAPS_URL . 'assets/vendor/draad-maps.iife.js';
	$iife_ver  = DRAAD_MAPS_COMPONENTS_VERSION;

	wp_enqueue_script(
		'draad-maps',
		$iife_url,
		[ 'draad-maps-denhaag-sprite' ],
		$iife_ver,
		true
	);

	$base_url    = DRAAD_MAPS_URL . 'assets/vendor/';
	$markers_base = DRAAD_MAPS_URL . 'assets/markers/';

	// Both globals must be set before the IIFE runs so components read them on first init.
	// Marker icon attrs are also set here — same timing as the demo's inline module.
	wp_add_inline_script(
		'draad-maps',
		'window.__DRAAD_MAPS_BASE__ = ' . wp_json_encode( $base_url ) . ';' .
		'(function(){' .
			'var b=' . wp_json_encode( $markers_base ) . ';' .
			'document.querySelectorAll("dm-marker").forEach(function(m){' .
				'if(!m.getAttribute("icon"))m.setAttribute("icon",b+"marker-green.png");' .
				'if(!m.getAttribute("icon-hover"))m.setAttribute("icon-hover",b+"marker-hover-green.png");' .
				'if(!m.getAttribute("icon-active"))m.setAttribute("icon-active",b+"marker-active-green.png");' .
			'});' .
		'})();',
		'before'
	);

	$tokens_url  = DRAAD_MAPS_URL . 'assets/css/denhaag-tokens.css';
	$tokens_ver  = DRAAD_MAPS_VERSION;

	wp_enqueue_style(
		'draad-maps-denhaag-tokens',
		$tokens_url,
		[],
		$tokens_ver
	);

	$theme_url  = DRAAD_MAPS_URL . 'assets/css/denhaag-theme.css';
	$theme_ver  = DRAAD_MAPS_VERSION;

	wp_enqueue_style(
		'draad-maps-denhaag-theme',
		$theme_url,
		[ 'draad-maps-denhaag-tokens' ],
		$theme_ver
	);
}

function draad_maps_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( DRAAD_MAPS_DIR . 'build/blocks/draad-map' );
}
