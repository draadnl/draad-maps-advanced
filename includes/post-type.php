<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'draad_maps_register_map_post_type' );
add_filter( 'use_block_editor_for_post_type', 'draad_maps_disable_block_editor', 10, 2 );

function draad_maps_disable_block_editor( $use, $post_type ) {
	if ( 'map' === $post_type ) {
		return false;
	}
	return $use;
}

if ( ! function_exists( 'draad_maps_register_map_post_type' ) ) {
	function draad_maps_register_map_post_type() {
		register_post_type( 'map', [
			'labels' => [
				'name'               => __( 'Maps', 'draad-maps' ),
				'singular_name'      => __( 'Map', 'draad-maps' ),
				'menu_name'          => __( 'Maps (v2)', 'draad-maps' ),
				'add_new'            => __( 'Add new map', 'draad-maps' ),
				'add_new_item'       => __( 'Add new map', 'draad-maps' ),
				'edit_item'          => __( 'Edit map', 'draad-maps' ),
				'new_item'           => __( 'New map', 'draad-maps' ),
				'view_item'          => __( 'View map', 'draad-maps' ),
				'search_items'       => __( 'Search maps', 'draad-maps' ),
				'not_found'          => __( 'No maps found', 'draad-maps' ),
				'not_found_in_trash' => __( 'No maps found in trash', 'draad-maps' ),
			],
			'public'       => true,
			'show_in_rest' => true,
			'supports'     => [ 'title' ],
			'menu_icon'    => 'dashicons-location-alt',
			'has_archive'  => false,
			'rewrite'      => [ 'slug' => 'map' ],
		] );
	}
}
