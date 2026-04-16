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

	$admin_css_path = DRAAD_MAPS_DIR . 'assets/css/admin.css';
	wp_enqueue_style(
		'draad-maps-admin',
		DRAAD_MAPS_URL . 'assets/css/admin.css',
		[],
		file_exists( $admin_css_path ) ? filemtime( $admin_css_path ) : DRAAD_MAPS_VERSION
	);

	$admin_js_path = DRAAD_MAPS_DIR . 'assets/js/admin.js';
	wp_enqueue_script(
		'draad-maps-admin',
		DRAAD_MAPS_URL . 'assets/js/admin.js',
		[],
		file_exists( $admin_js_path ) ? filemtime( $admin_js_path ) : DRAAD_MAPS_VERSION,
		true
	);

	wp_localize_script( 'draad-maps-admin', 'draadMapsAdmin', [
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'draad_maps_admin' ),
		'i18n'    => [
			'noneOption'         => __( '— Geen —', 'draad-maps' ),
			'loading'            => __( 'Laden…', 'draad-maps' ),
			'loadProperties'     => __( 'Beschikbare velden laden', 'draad-maps' ),
			'enterUrlFirst'      => __( 'Voer eerst een URL in.', 'draad-maps' ),
			'enterTypenameFirst' => __( 'Voer eerst een featuretypenaam in.', 'draad-maps' ),
			'fieldsLoaded'       => __( 'velden geladen.', 'draad-maps' ),
			'errorFetching'      => __( 'Velden konden niet worden geladen. Controleer de URL en probeer het opnieuw.', 'draad-maps' ),
			'networkError'       => __( 'De dienst is niet bereikbaar: ', 'draad-maps' ),
			'removeDatasource'   => __( 'Deze databron verwijderen', 'draad-maps' ),
			'datasourcePrefix'   => __( 'Databron ', 'draad-maps' ),
			'searchPlaceholder'  => __( 'Zoek een adres of plaats…', 'draad-maps' ),
			'searchNoResults'    => __( 'Geen resultaten gevonden.', 'draad-maps' ),
			'searchError'        => __( 'Locatieservice niet bereikbaar.', 'draad-maps' ),
			'searchClear'        => __( 'Locatie wissen', 'draad-maps' ),
			'coordinatesLabel'   => __( 'Coördinaten: ', 'draad-maps' ),
		],
	] );
}

function draad_maps_enqueue_frontend_assets() {
	static $enqueued = false;

	if ( $enqueued ) {
		return;
	}

	$enqueued = true;

	$iife_path = DRAAD_MAPS_DIR . 'node_modules/draad-maps/dist/draad-maps.iife.js';
	$iife_url  = DRAAD_MAPS_URL . 'node_modules/draad-maps/dist/draad-maps.iife.js';
	$iife_ver  = file_exists( $iife_path ) ? filemtime( $iife_path ) : DRAAD_MAPS_VERSION;

	wp_enqueue_script(
		'draad-maps',
		$iife_url,
		[],
		$iife_ver,
		true
	);

	$markers_url = DRAAD_MAPS_URL . 'node_modules/draad-maps/dist/';

	wp_add_inline_script(
		'draad-maps',
		'window.__DRAAD_MAPS_BASE__ = ' . wp_json_encode( $markers_url ) . ';',
		'before'
	);

	$theme_path = DRAAD_MAPS_DIR . 'assets/css/denhaag-theme.css';
	$theme_url  = DRAAD_MAPS_URL . 'assets/css/denhaag-theme.css';
	$theme_ver  = file_exists( $theme_path ) ? filemtime( $theme_path ) : DRAAD_MAPS_VERSION;

	wp_enqueue_style(
		'draad-maps-denhaag-theme',
		$theme_url,
		[],
		$theme_ver
	);
}

function draad_maps_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( DRAAD_MAPS_DIR . 'build/blocks/draad-map' );
}
