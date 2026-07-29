<?php
/**
 * Self-check for the filterable-field config round trip: token picker →
 * sanitizer → rendered component attributes. Run it directly:
 *
 *     php tests/filter-config-test.php
 *
 * ponytail: WP stubs instead of a test framework — this only needs the pure
 * config logic, not a booted WordPress.
 */

// ---- WordPress stubs -------------------------------------------------------

define( 'ABSPATH', __DIR__ );
define( 'DRAAD_MAPS_URL', 'https://example.test/plugin/' );

function esc_attr( $t ) { return htmlspecialchars( (string) $t, ENT_QUOTES ); }
function esc_html( $t ) { return htmlspecialchars( (string) $t, ENT_QUOTES ); }
function esc_url( $t ) { return (string) $t; }
function esc_url_raw( $t ) { return (string) $t; }
function esc_textarea( $t ) { return htmlspecialchars( (string) $t, ENT_QUOTES ); }
function esc_attr_e( $t ) { echo esc_attr( $t ); }
function esc_html_e( $t ) { echo esc_html( $t ); }
function esc_js( $t ) { return (string) $t; }
function __( $t, $d = '' ) { return $t; }
function sanitize_text_field( $t ) { return trim( strip_tags( (string) $t ) ); }
function sanitize_key( $t ) { return preg_replace( '/[^a-z0-9_\-]/', '', strtolower( (string) $t ) ); }
function sanitize_title( $t ) { return strtolower( preg_replace( '/[^a-zA-Z0-9]+/', '-', (string) $t ) ); }
function wp_json_encode( $d ) { return json_encode( $d ); }
function admin_url( $p ) { return 'https://example.test/wp-admin/' . $p; }
function apply_filters( $tag, $value ) { return $value; }
function add_action() {}
function selected() {}
function taxonomy_exists( $t ) { return in_array( $t, [ 'category', 'post_tag' ], true ); }
function checked() {}

require_once __DIR__ . '/../includes/datasource.php';
require_once __DIR__ . '/../includes/meta-fields.php';

// ---- Harness ---------------------------------------------------------------

$failures = 0;

function check( string $name, $actual, $expected ) {
	global $failures;
	if ( $actual === $expected ) {
		echo "  ok   $name\n";
		return;
	}
	$failures++;
	echo "  FAIL $name\n";
	echo "       expected: " . var_export( $expected, true ) . "\n";
	echo "       actual:   " . var_export( $actual, true ) . "\n";
}

function attr( string $html, string $name ): ?string {
	return preg_match( '/ ' . preg_quote( $name, '/' ) . '="([^"]*)"/', $html, $m ) ? $m[1] : null;
}

// ---- Sanitizer: labels and types survive, aligned with the fields -----------

echo "sanitize_datasources (feature source)\n";

$json = wp_json_encode( [ [
	'type'          => 'geojson_url',
	'label'         => 'Sport',
	'url'           => 'https://example.test/a.geojson',
	'filter_fields' => [ 'sport', 'jeugd', 'bouwjaar' ],
	'filter_labels' => [ 'Sporttak', '', 'Bouwjaar' ],
	'filter_types'  => [ 'dropdown', 'bool', 'nonsense' ],
	'filter_bool_labels' => [ '', 'Nu meedenken', '' ],
] ] );

$out = json_decode( draad_maps_sanitize_datasources( $json ), true )[0];

check( 'fields kept in order', $out['filter_fields'], [ 'sport', 'jeugd', 'bouwjaar' ] );
check( 'labels stay index-aligned (empty slot kept)', $out['filter_labels'], [ 'Sporttak', '', 'Bouwjaar' ] );
check( 'unknown filter type falls back to auto', $out['filter_types'], [ 'dropdown', 'bool', 'auto' ] );
check( 'bool labels stay index-aligned', $out['filter_bool_labels'], [ '', 'Nu meedenken', '' ] );

// ---- Renderer: configured labels/types reach the component ------------------

echo "\nrender_feature_source (attributes)\n";

$html = draad_maps_render_geojson( $out + [ 'url' => 'https://example.test/a.geojson' ] );

check( 'filter-properties emitted', attr( $html, 'filter-properties' ), 'sport,jeugd,bouwjaar' );
check( 'blank label falls back to humanized key', attr( $html, 'filter-labels' ), 'Sporttak,Jeugd,Bouwjaar' );
check( 'filter-types emitted when overridden', attr( $html, 'filter-types' ), 'dropdown,bool,auto' );
check( 'filter-bool-labels emitted, blanks kept aligned', attr( $html, 'filter-bool-labels' ), ',Nu meedenken,' );

// Legacy config: filter_fields only, no labels/types stored.
$legacy = [
	'type'          => 'geojson_url',
	'label'         => 'Wijken',
	'url'           => 'https://example.test/b.geojson',
	'filter_fields' => [ 'wijk_naam', 'stadsdeel' ],
];
$legacy_html = draad_maps_render_geojson( $legacy );

check( 'legacy: labels humanized', attr( $legacy_html, 'filter-labels' ), 'Wijk Naam,Stadsdeel' );
check( 'legacy: all-auto types omit the attribute', attr( $legacy_html, 'filter-types' ), null );
check( 'legacy: no bool labels means no attribute', attr( $legacy_html, 'filter-bool-labels' ), null );

// ---- post_query still speaks comma strings ---------------------------------

echo "\nsanitize_datasources (post_query)\n";

$pq = json_decode( draad_maps_sanitize_datasources( wp_json_encode( [ [
	'type'              => 'post_query',
	'label'             => 'Sport',
	'post_type'         => 'sportaccomodation',
	'location_field'    => 'locatie',
	'filter_properties' => 'fun_sport,sport',
	'filter_labels'     => 'Is dit een leuke sport?,Sporttak',
	'filter_types'      => 'bool,auto',
	'filter_bool_labels' => 'Nu meedenken,',
] ] ) ), true )[0];

check( 'comma storage untouched', $pq['filter_properties'], 'fun_sport,sport' );
check( 'labels with punctuation survive', $pq['filter_labels'], 'Is dit een leuke sport?,Sporttak' );
check( 'types survive', $pq['filter_types'], 'bool,auto' );
check( 'bool labels survive as a comma string', $pq['filter_bool_labels'], 'Nu meedenken,' );

// ---- Query filters: repeater rows → meta_query / tax_query clauses ----------

echo "\nquery filters\n";

$qf = json_decode( draad_maps_sanitize_datasources( wp_json_encode( [ [
	'type'           => 'post_query',
	'post_type'      => 'sportaccomodation',
	'location_field' => 'locatie',
	'query_relation' => 'or',
	'query_filters'  => [
		[ 'source' => 'bouwjaar', 'operator' => '>=', 'value' => '1990' ],
		[ 'source' => 'taxonomy:sporttak', 'operator' => '!=', 'value' => 'voetbal,hockey' ],
		[ 'source' => 'keurmerk', 'operator' => 'DROP TABLE', 'value' => 'x' ],
		[ 'source' => '', 'operator' => '=', 'value' => 'ignored' ],
	],
] ] ) ), true )[0];

check( 'empty source row dropped', count( $qf['query_filters'] ), 3 );
check( 'unknown operator falls back to =', $qf['query_filters'][2]['operator'], '=' );
check( 'relation normalized to upper case', $qf['query_relation'], 'OR' );

// Custom values must survive: sanitize_text_field's strip_tags ate "<50".
$custom = json_decode( draad_maps_sanitize_datasources( wp_json_encode( [ [
	'type'           => 'post_query',
	'post_type'      => 'sportaccomodation',
	'location_field' => 'locatie',
	'query_filters'  => [ [ 'source' => 'bouwjaar', 'operator' => '=', 'value' => ' <50 ' ] ],
] ] ) ), true )[0];

check( 'custom value with < survives', $custom['query_filters'][0]['value'], '<50' );

[ $meta_clauses, $tax_clauses ] = draad_maps_build_query_filters( $qf['query_filters'] );

check( 'meta clause count', count( $meta_clauses ), 2 );
check( 'numeric compare typed NUMERIC', $meta_clauses[0], [ 'key' => 'bouwjaar', 'compare' => '>=', 'value' => '1990', 'type' => 'NUMERIC' ] );
check( 'taxonomy source becomes a tax clause', $tax_clauses[0], [ 'taxonomy' => 'sporttak', 'operator' => 'NOT IN', 'field' => 'slug', 'terms' => [ 'voetbal', 'hockey' ] ] );

[ , $tax_ids ] = draad_maps_build_query_filters( [ [ 'source' => 'taxonomy:wijk', 'operator' => 'IN', 'value' => '12, 34' ] ] );
check( 'numeric terms query by term_id', $tax_ids[0]['terms'], [ 12, 34 ] );

[ $exists ] = draad_maps_build_query_filters( [ [ 'source' => 'keurmerk', 'operator' => 'NOT EXISTS', 'value' => 'x' ] ] );
check( 'EXISTS carries no value', $exists[0], [ 'key' => 'keurmerk', 'compare' => 'NOT EXISTS' ] );

// ---- The comma/array helper the token renderer feeds on ---------------------

echo "\ncsv_to_list\n";

require_once __DIR__ . '/../includes/meta-boxes.php';

check( 'comma string splits, empties kept', draad_maps_csv_to_list( 'a,,c' ), [ 'a', '', 'c' ] );
check( 'array passes through trimmed', draad_maps_csv_to_list( [ ' a ', 'b' ] ), [ 'a', 'b' ] );
check( 'empty string is an empty list', draad_maps_csv_to_list( '' ), [] );

// ---- Filter field order: the editor's order wins over the vocabulary --------

echo "\nfilter field order\n";

ob_start();
draad_maps_render_filter_select(
	'draad-ds-filter-fields',
	[ 'sport', 'gehandicapten' ],
	[ 'gehandicapten', 'jeugd', 'sport', 'volwassen' ],
	[ 'Sporttak', 'Rolstoeltoegankelijk' ]
);
$select = ob_get_clean();

preg_match_all( '/<option value="([^"]*)"([^>]*)>/', $select, $m, PREG_SET_ORDER );
$order    = array_map( static fn( $o ) => $o[1], $m );
$selected = array_values( array_map(
	static fn( $o ) => $o[1],
	array_filter( $m, static fn( $o ) => str_contains( $o[2], 'selected' ) )
) );

check( 'stored order leads, not the alphabetical vocabulary', array_slice( $order, 0, 2 ), [ 'sport', 'gehandicapten' ] );
check( 'unselected vocabulary trails, no duplicates', $order, [ 'sport', 'gehandicapten', 'jeugd', 'volwassen' ] );
check( 'only the stored fields are selected', $selected, [ 'sport', 'gehandicapten' ] );
check( 'labels stay aligned after the reorder', (bool) preg_match( '/value="gehandicapten"[^>]*data-label="Rolstoeltoegankelijk"/', $select ), true );

// A field that is no longer in the vocabulary must survive as a selected option.
ob_start();
draad_maps_render_filter_select( 'draad-ds-filter-fields', [ 'weggehaald', 'jeugd' ], [ 'jeugd' ] );
$stale = ob_get_clean();
preg_match_all( '/<option value="([^"]*)"/', $stale, $sm );
check( 'unknown stored field kept, still first', $sm[1], [ 'weggehaald', 'jeugd' ] );

// ---- Renderer: how the filter panel is dismissed ---------------------------

echo "\nfilter dismiss mode\n";

$GLOBALS['draad_test_meta'] = [];

function get_post( $id ) {
	$p              = new stdClass();
	$p->post_type   = 'map';
	$p->post_status = 'publish';
	return $p;
}

function get_post_meta( $id, $key, $single = false ) {
	return $GLOBALS['draad_test_meta'][ $key ] ?? '';
}

require_once __DIR__ . '/../includes/renderer.php';

$GLOBALS['draad_test_meta'] = [
	'_draad_map_filter_enabled' => '1',
	'_draad_map_datasources'    => wp_json_encode( [ [
		'type'          => 'geojson_url',
		'label'         => 'Sport',
		'url'           => 'https://example.test/a.geojson',
		'filter_fields' => [ 'sport' ],
	] ] ),
];

// Default (and every map saved before the setting existed): the component's own
// defaults already mean manual submit + action buttons, so nothing is emitted.
$map = draad_maps_render( 1 );
check( 'default: no submit attribute', attr( $map, 'submit' ), null );
check( 'default: no dismiss attribute', attr( $map, 'dismiss' ), null );

$GLOBALS['draad_test_meta']['_draad_map_filter_dismiss'] = 'close';
$map_close = draad_maps_render( 1 );
check( 'cross mode: filters apply live again', attr( $map_close, 'submit' ), 'auto' );
check( 'cross mode: header cross requested', attr( $map_close, 'dismiss' ), 'close' );

$GLOBALS['draad_test_meta']['_draad_map_filter_dismiss'] = 'actions';
$map_actions = draad_maps_render( 1 );
check( 'buttons mode: no attributes needed', attr( $map_actions, 'dismiss' ), null );

// ---- Password-protected posts never reach the map ----------------------------
// post_status stays "publish" on a protected post, so the status check alone
// lets it through; has_password is what actually keeps it off the map.

$GLOBALS['draad_test_get_posts_args'] = [];

function get_posts( $args ) {
	$GLOBALS['draad_test_get_posts_args'][] = $args;
	return [];
}

draad_maps_render_post_query( [
	'post_type'      => 'location',
	'location_field' => 'geo',
] );
check(
	'post query excludes password-protected posts',
	$GLOBALS['draad_test_get_posts_args'][0]['has_password'] ?? 'missing',
	false
);

// The OR union path rebuilds the args twice — the exclusion has to survive both.
$GLOBALS['draad_test_get_posts_args'] = [];
draad_maps_query_posts(
	[ 'post_type' => 'location', 'post_status' => 'publish', 'has_password' => false, 'meta_query' => [ [ 'key' => 'geo', 'compare' => '!=', 'value' => '' ] ] ],
	[
		[ 'source' => 'colour', 'operator' => '=', 'value' => 'red' ],
		[ 'source' => 'category', 'operator' => 'IN', 'value' => 'sport' ],
	],
	'OR'
);
check(
	'OR union keeps the exclusion on every query',
	array_column( $GLOBALS['draad_test_get_posts_args'], 'has_password' ),
	[ false, false ]
);

echo "\n" . ( $failures ? "$failures FAILED\n" : "all passed\n" );
exit( $failures ? 1 : 0 );
