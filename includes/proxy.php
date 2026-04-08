<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_ajax_draad_maps_proxy', 'draad_maps_proxy_request' );
add_action( 'wp_ajax_nopriv_draad_maps_proxy', 'draad_maps_proxy_request' );

function draad_maps_proxy_request() {
	$url = isset( $_GET['url'] ) ? esc_url_raw( $_GET['url'] ) : '';

	if ( ! $url || ! wp_http_validate_url( $url ) ) {
		wp_send_json_error( 'Invalid URL', 400 );
	}

	// Only allow http(s) schemes.
	$scheme = wp_parse_url( $url, PHP_URL_SCHEME );
	if ( ! in_array( $scheme, [ 'http', 'https' ], true ) ) {
		wp_send_json_error( 'Invalid scheme', 400 );
	}

	// Only proxy URLs that match a configured datasource.
	if ( ! draad_maps_is_allowed_proxy_url( $url ) ) {
		wp_send_json_error( 'URL not allowed', 403 );
	}

	// Check transient cache.
	$cache_key = 'draad_maps_proxy_' . md5( $url );
	$cached    = get_transient( $cache_key );

	if ( false !== $cached ) {
		header( 'Content-Type: ' . $cached['content_type'] );
		header( 'X-Draad-Maps-Proxy: cached' );
		echo $cached['body']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		wp_die();
	}

	$response = wp_remote_get( $url, [
		'timeout'   => 15,
		'sslverify' => true,
	] );

	if ( is_wp_error( $response ) ) {
		wp_send_json_error( $response->get_error_message(), 502 );
	}

	$code = wp_remote_retrieve_response_code( $response );
	if ( $code < 200 || $code >= 300 ) {
		wp_send_json_error( 'Upstream returned ' . $code, $code );
	}

	$body         = wp_remote_retrieve_body( $response );
	$content_type = wp_remote_retrieve_header( $response, 'content-type' ) ?: 'application/json';

	// Transform CKAN datastore responses to GeoJSON.
	$body = draad_maps_maybe_transform_ckan_response( $body, $content_type );

	// Cache for 5 minutes.
	set_transient( $cache_key, [
		'body'         => $body,
		'content_type' => $content_type,
	], 5 * MINUTE_IN_SECONDS );

	header( 'Content-Type: ' . $content_type );
	header( 'X-Draad-Maps-Proxy: fresh' );
	echo $body; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	wp_die();
}

function draad_maps_is_allowed_proxy_url( string $url ): bool {
	$allowed_urls = draad_maps_get_configured_datasource_urls();

	foreach ( $allowed_urls as $allowed ) {
		// Match if the requested URL starts with a configured datasource URL.
		if ( str_starts_with( $url, $allowed ) ) {
			return true;
		}
	}

	return false;
}

function draad_maps_maybe_transform_ckan_response( string $body, string &$content_type ): string {
	if ( false === stripos( $content_type, 'json' ) ) {
		return $body;
	}

	$data = json_decode( $body, true );

	if ( ! is_array( $data ) || empty( $data['result']['records'] ) || ! is_array( $data['result']['records'] ) ) {
		return $body;
	}

	$records       = $data['result']['records'];
	$geometry_key  = null;
	$crs           = null;

	// Find the geometry field by scanning the first record.
	foreach ( $records[0] as $key => $value ) {
		if ( is_array( $value ) && isset( $value['type'], $value['coordinates'] ) ) {
			$geometry_key = $key;
			if ( ! empty( $value['crs'] ) ) {
				$crs = $value['crs'];
			}
			break;
		}
	}

	if ( ! $geometry_key ) {
		return $body;
	}

	$features = [];
	foreach ( $records as $record ) {
		$geometry   = $record[ $geometry_key ] ?? null;
		$properties = $record;
		unset( $properties[ $geometry_key ] );

		if ( ! $geometry ) {
			continue;
		}

		// Strip CRS from individual geometries (will be set at collection level).
		unset( $geometry['crs'] );

		$features[] = [
			'type'       => 'Feature',
			'geometry'   => $geometry,
			'properties' => $properties,
		];
	}

	$geojson = [
		'type'     => 'FeatureCollection',
		'features' => $features,
	];

	if ( $crs ) {
		$geojson['crs'] = $crs;
	}

	$content_type = 'application/geo+json';

	return wp_json_encode( $geojson );
}

function draad_maps_get_configured_datasource_urls(): array {
	static $urls = null;

	if ( null !== $urls ) {
		return $urls;
	}

	$urls  = [];
	$maps = get_posts( [
		'post_type'      => 'map',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
		'fields'         => 'ids',
	] );

	foreach ( $maps as $map_id ) {
		$datasources = json_decode( get_post_meta( $map_id, '_draad_map_datasources', true ) ?: '[]', true );

		if ( ! is_array( $datasources ) ) {
			continue;
		}

		foreach ( $datasources as $ds ) {
			$type = $ds['type'] ?? '';
			$ds_url = $ds['url'] ?? '';

			if ( $ds_url && in_array( $type, [ 'geojson_url', 'wfs', 'wms' ], true ) ) {
				$urls[] = $ds_url;
			}
		}
	}

	return $urls;
}
