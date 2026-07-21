# Draad Maps

WordPress plugin for creating and embedding interactive maps using the `@draadnl/map-components` web component library.

## Requirements

- WordPress 6.0+
- PHP 8.0+
- Node.js 18+ (for building assets)

## Features

- **Map custom post type** — manage maps as first-class content objects.
- **Gutenberg block** — embed maps anywhere via the block editor.
- **Den Haag theme** — built-in styling aligned with the Gemeente Den Haag design system.
- **Datasource support** — connect maps to GeoJSON, WMS, and WFS data sources.

## Installation

1. Upload the plugin directory to `wp-content/plugins/`.
2. Activate via the WordPress admin.
3. Create maps under **Maps** in the admin menu.
4. Add the **Draad Map** block to any page or post.

## Development

Install dependencies:

```bash
npm install
```

Build assets (also generates the scoped Den Haag token CSS):

```bash
npm run build
```

Start development mode with file watching:

```bash
npm run start
```

### Den Haag design tokens

The plugin uses `@gemeente-denhaag/design-tokens` for colours, typography, spacing, and border radii. At build time, `scripts/wrap-tokens.js` rewrites the package's `:root` token block to `.wp-block-draad-map`, scoping all `--denhaag-*` custom properties to the block so they don't affect the surrounding page.

## Customizing cards and infowindows

Four filters replace the generated markup. All output is echoed raw — escape it yourself.

| Filter | Signature | Replaces |
| --- | --- | --- |
| `draad_maps_marker_properties` | `( array $props, WP_Post $post, array $config )` | The data bound into list cards (`properties.*`) for post-query markers |
| `draad_maps_post_infowindow_html` | `( string $html, array $context )` | The whole `<dm-infowindow>` of one post marker |
| `draad_maps_feature_infowindow_html` | `( string $html, array $context )` | The whole `<dm-infowindow>` of a GeoJSON/WFS source |
| `draad_maps_list_card_template` | `( string $html, array $context )` | The `<dm-list>` card template |

`$context` carries everything already resolved, so a custom card needs no extra queries: the `WP_Post`, `map_id`, the datasource `config`, `marker_id`, `center`, `permalink`, `image_url`, `title`, `description`, `eyebrow`, `address`, `terms`, `taxonomy`, `action_url`, `action_label` and `properties` for posts; `source_id`, `source_type`, `url`, the popup field keys and the default `media`/`body` fragments for GeoJSON/WFS.

Feature (GeoJSON/WFS) sources and list cards render client-side, so bind values with `data-field="properties.<key>"`, `data-src`, `data-chips` and `data-href` inside a `<template>` instead of printing them.

```php
add_filter( 'draad_maps_marker_properties', function ( $props, $post, $config ) {
	$props['opening_hours'] = get_post_meta( $post->ID, 'opening_hours', true );
	return $props;
}, 10, 3 );

add_filter( 'draad_maps_post_infowindow_html', function ( $html, $ctx ) {
	if ( 'restaurant' !== get_post_type( $ctx['post'] ) ) {
		return $html;
	}
	return '<dm-infowindow for="' . esc_attr( $ctx['marker_id'] ) . '">'
		. '<h3>' . esc_html( $ctx['title'] ) . '</h3>'
		. '<p>' . esc_html( $ctx['properties']['opening_hours'] ?? '' ) . '</p>'
		. '<a class="action" href="' . esc_url( $ctx['action_url'] ) . '">' . esc_html( $ctx['action_label'] ) . '</a>'
		. '</dm-infowindow>';
}, 10, 2 );
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
