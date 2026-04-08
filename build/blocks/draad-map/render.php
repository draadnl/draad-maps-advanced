<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$map_id = isset( $attributes['mapId'] ) ? (int) $attributes['mapId'] : 0;

if ( ! $map_id ) {
	return;
}

draad_maps_enqueue_frontend_assets();

echo '<div ' . get_block_wrapper_attributes() . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
echo draad_maps_render( $map_id ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

if ( draad_maps_has_url_markers( $map_id ) ) : ?>
<script>
document.addEventListener( 'dm-marker:click', function ( e ) {
	var url = e.target.getAttribute( 'data-url' );
	if ( url ) {
		window.location.href = url;
	}
} );
</script>
<?php endif;

echo '</div>';
