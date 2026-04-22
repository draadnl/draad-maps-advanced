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

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
