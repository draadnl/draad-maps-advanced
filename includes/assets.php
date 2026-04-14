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
	] );
}

function draad_maps_enqueue_frontend_assets() {
	static $enqueued = false;

	if ( $enqueued ) {
		return;
	}

	$enqueued = true;

	$theme_js_path = DRAAD_MAPS_DIR . 'assets/js/denhaag-theme.js';
	$theme_js_url  = DRAAD_MAPS_URL . 'assets/js/denhaag-theme.js';
	$theme_js_ver  = file_exists( $theme_js_path ) ? filemtime( $theme_js_path ) : DRAAD_MAPS_VERSION;

	wp_enqueue_script(
		'draad-maps-denhaag-theme-js',
		$theme_js_url,
		[],
		$theme_js_ver,
		true
	);

	$iife_path = DRAAD_MAPS_DIR . 'node_modules/draad-maps/dist/draad-maps.iife.js';
	$iife_url  = DRAAD_MAPS_URL . 'node_modules/draad-maps/dist/draad-maps.iife.js';
	$iife_ver  = file_exists( $iife_path ) ? filemtime( $iife_path ) : DRAAD_MAPS_VERSION;

	wp_enqueue_script(
		'draad-maps',
		$iife_url,
		[ 'draad-maps-denhaag-theme-js' ],
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
