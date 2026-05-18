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
				'name'               => __( 'Kaarten', 'draad-maps' ),
				'singular_name'      => __( 'Kaart', 'draad-maps' ),
				'add_new'            => __( 'Nieuwe kaart toevoegen', 'draad-maps' ),
				'add_new_item'       => __( 'Nieuwe kaart toevoegen', 'draad-maps' ),
				'edit_item'          => __( 'Kaart bewerken', 'draad-maps' ),
				'new_item'           => __( 'Nieuwe kaart', 'draad-maps' ),
				'view_item'          => __( 'Kaart bekijken', 'draad-maps' ),
				'search_items'       => __( 'Kaarten zoeken', 'draad-maps' ),
				'not_found'          => __( 'Geen kaarten gevonden', 'draad-maps' ),
				'not_found_in_trash' => __( 'Geen kaarten gevonden in de prullenbak', 'draad-maps' ),
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
