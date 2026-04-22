<?php
/**
 * Plugin Name: Draad Maps Advanced
 * Plugin URI:  https://draad.nl
 * Description: Create and embed interactive maps using the draad-maps web component library.
 * Version:     1.2.2
 * Author:      Draad
 * License:     GPL-2.0-or-later
 * Text Domain: draad-maps
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DRAAD_MAPS_VERSION', '1.2.2' );
define( 'DRAAD_MAPS_DIR', plugin_dir_path( __FILE__ ) );
define( 'DRAAD_MAPS_URL', plugin_dir_url( __FILE__ ) );

require_once DRAAD_MAPS_DIR . 'includes/ajax.php';
require_once DRAAD_MAPS_DIR . 'includes/proxy.php';
require_once DRAAD_MAPS_DIR . 'includes/post-type.php';
require_once DRAAD_MAPS_DIR . 'includes/meta-fields.php';
require_once DRAAD_MAPS_DIR . 'includes/meta-boxes.php';
require_once DRAAD_MAPS_DIR . 'includes/assets.php';
require_once DRAAD_MAPS_DIR . 'includes/datasource.php';
require_once DRAAD_MAPS_DIR . 'includes/renderer.php';
