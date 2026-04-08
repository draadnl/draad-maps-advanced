<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'draad_maps_register_post_type' );
add_filter( 'use_block_editor_for_post_type', 'draad_maps_disable_block_editor', 10, 2 );

function draad_maps_disable_block_editor( $use, $post_type ) {
	if ( 'map' === $post_type ) {
		return false;
	}
	return $use;
}

function draad_maps_register_post_type() {
	register_post_type( 'map', [
		'labels' => [
			'name'               => __( 'Maps', 'draad-maps' ),
			'singular_name'      => __( 'Map', 'draad-maps' ),
			'add_new'            => __( 'Add New Map', 'draad-maps' ),
			'add_new_item'       => __( 'Add New Map', 'draad-maps' ),
			'edit_item'          => __( 'Edit Map', 'draad-maps' ),
			'new_item'           => __( 'New Map', 'draad-maps' ),
			'view_item'          => __( 'View Map', 'draad-maps' ),
			'search_items'       => __( 'Search Maps', 'draad-maps' ),
			'not_found'          => __( 'No maps found', 'draad-maps' ),
			'not_found_in_trash' => __( 'No maps found in Trash', 'draad-maps' ),
		],
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => [ 'title' ],
		'menu_icon'    => 'dashicons-location-alt',
		'has_archive'  => false,
		'rewrite'      => [ 'slug' => 'map' ],
	] );
}
