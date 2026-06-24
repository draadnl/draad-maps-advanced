<?php
/**
 * Plugin Name: Draad Maps Advanced
 * Plugin URI:  https://draad.nl
 * Description: Create and embed interactive maps using the draad-maps web component library.
 * Version:     1.4.1
 * Author:      Draad
 * License:     GPL-2.0-or-later
 * Text Domain: draad-maps
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DRAAD_MAPS_VERSION', '1.4.1' );
define( 'DRAAD_MAPS_COMPONENTS_VERSION', '0.5.6' ); // map-components package version (bump on re-vendor)

// Static PDOK Locatieserver filter applied to all address searches. Use a gemeentecode
// (e.g. '0518' = Den Haag); name won't work — Den Haag is stored as "'s-Gravenhage".
// Empty string = no restriction (all of the Netherlands).
if ( ! defined( 'DRAAD_MAPS_ADDRESS_FILTER' ) ) {
	define( 'DRAAD_MAPS_ADDRESS_FILTER', 'gemeentecode:0518' );
}
define( 'DRAAD_MAPS_DIR', plugin_dir_path( __FILE__ ) );
define( 'DRAAD_MAPS_URL', plugin_dir_url( __FILE__ ) );

add_action( 'init', 'draad_maps_load_textdomain' );

function draad_maps_load_textdomain() {
	load_plugin_textdomain( 'draad-maps', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}

require_once DRAAD_MAPS_DIR . 'includes/ajax.php';
require_once DRAAD_MAPS_DIR . 'includes/proxy.php';
require_once DRAAD_MAPS_DIR . 'includes/post-type.php';
require_once DRAAD_MAPS_DIR . 'includes/meta-fields.php';
require_once DRAAD_MAPS_DIR . 'includes/meta-boxes.php';
require_once DRAAD_MAPS_DIR . 'includes/assets.php';
require_once DRAAD_MAPS_DIR . 'includes/datasource.php';
require_once DRAAD_MAPS_DIR . 'includes/renderer.php';
