# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.4] - 2026-07-08

### Added
- Filter panel close button: the `dm-filter` panel header now shows a close (×) button in the top-right that closes the panel (all variants).

### Fixed
- Search: selecting a map result (feature/marker) now highlights the marker itself — active icon, brought to front — and opens its infowindow, instead of only moving the map.

### Changed
- Re-vendored `assets/vendor/draad-maps.iife.js` from `@draadnl/map-components` 0.5.8.

## [1.4.3] - 2026-07-06

### Fixed
- The block root (`.wp-block-draad-map-advanced`) now creates its own stacking context (`position: relative; z-index: 0`), so map layers can no longer stack above host-theme overlays such as sticky headers and menus.

### Changed
- Re-vendored `assets/vendor/draad-maps.iife.js` from `@draadnl/map-components` 0.5.6 (latest published version).

## [1.4.2] - 2026-07-02

### Removed
- The map block wrapper (`.wp-block-draad-map-advanced`) no longer forces its own stacking context (`isolation: isolate`).

## [1.4.1] - 2026-06-24

### Added
- Address search can be scoped to a municipality via a static `DRAAD_MAPS_ADDRESS_FILTER` constant (default `gemeentecode:0518`, Den Haag), emitted as the `address-filter` attribute on `<dm-search>`. Override it in `wp-config.php`; an empty value removes the restriction (all of the Netherlands).

### Changed
- Rebuilt `assets/vendor/draad-maps.iife.js` from `@draadnl/map-components` 0.5.6: the external-link icon shows only on cross-origin action links, and the mobile map layout is reworked — the map keeps its `70svh` height at every width (no shrink just above mobile), the zoom control lays out horizontally, the infowindow keeps even spacing and clears the zoom, grows the map to fit, and goes full-width on narrow screens.

### Fixed
- Removed the dead light-DOM CSS that tried to hide the infowindow's external-link icon for internal links — it could never reach the action inside the component's shadow DOM. The icon is now resolved in the component (cross-origin only).

## [1.4.0] - 2026-06-17

### Added
- GeoJSON and WFS data sources can now configure their popups with the same field slots as WordPress content: image, eyebrow, title, address, text, chips, and an action button — each mapped to a feature property. The image uses the dedicated media strip; "text" with one field renders a paragraph and with several fields renders a key/value table.
- GeoJSON and WFS data sources now support filtering: pick which feature properties visitors can filter on ("Filterable fields"), wired into the existing map filter. Previously filtering was only available for WordPress content.
- Admin "Load available fields" now populates per-slot dropdowns (single- and multi-select) for feature sources instead of a single show/label table.
- Per-data-source marker colour: each WordPress-content or GeoJSON data source can pick a pin colour (green, blue, red, orange, pink, purple, yellow, grey) from the bundled Den Haag markers. Defaults to green.

### Changed
- Rebuilt `assets/vendor/draad-maps.iife.js` from `@draadnl/map-components` 0.5.5: the wildcard feature infowindow data-binds the media-slot image per feature and hides any popup element (heading, table row, chip, action) whose property is empty; `dm-list` cards mirror the infowindow content and zoom through an action-less wrapper.
- Assets are now versioned by their actual version instead of `filemtime()` timestamps — plugin-owned assets use `DRAAD_MAPS_VERSION`, and the vendored bundle uses the map-components package version (new `DRAAD_MAPS_COMPONENTS_VERSION`).

### Fixed
- GeoJSON (and WordPress-content) markers now render the bundled Den Haag pins instead of the grey SVG fallback. Feature sources never received an `icon` attribute, so the component fell back to a non-existent `assets/vendor/markers/marker.png`; the renderer now emits `icon`/`icon-hover`/`icon-active` (pointing at `assets/markers/`) on `dm-marker`, `dm-geojson` and `dm-wfs`. (WFS point markers still need icon support in `@draadnl/map-components` before the attributes take effect.)
- Filter dropdown for GeoJSON/WFS sources is no longer clipped: a multi-select dropdown for high-cardinality fields now escapes the filter panel's overflow and flips above the trigger near the bottom of the viewport.
- GeoJSON/WFS list-card key/value tables are now styled to match the infowindow's two-column layout. The theme CSS targeted the parts on `dm-list`, but the cards render inside a slotted `<div slot="list">` that owns its own shadow tree, so the `::part()` rules never matched; they now target the slotted host, with a little space above the table.
- Tightened the eyebrow -> title gap in `dm-list` cards: a high-specificity flow-rhythm rule overrode the intended eyebrow tightening, so the title always sat 24px below its label. `@draadnl/map-components` now excludes the eyebrow label from the flow rhythm, so the gap is set via `--draad-map-components-eyebrow-margin-block-start` (12px in the Den Haag theme).

### Compatibility
- Existing GeoJSON/WFS maps configured with the old property mapping keep rendering their auto-generated data table; configure the new popup slots to opt into the richer layout.

## [1.3.2] - 2026-06-15

### Fixed
- `.wp-block-draad-map-advanced` now establishes a new stacking context (`isolation: isolate`) so the map and its overlays no longer bleed over sibling page elements.

## [1.3.1] - 2026-05-27

### Added
- Per-map "Button label" setting — overrides the action button text on both info windows and list cards.
- Per-map "Hide address in list cards" toggle — suppresses the address line in the list view even when posts have an address.
- Dutch translation file (`languages/draad-maps-nl_NL.po`/`.mo`) and `load_plugin_textdomain` hook. Source strings are now English; Dutch is delivered via translation.
- `menu_name` label set to "Kaarten (v2)" (via translation) to distinguish from the legacy `draad-kaarten` menu.

### Changed
- Updated `@draadnl/map-components` to 0.5.3, which translates the remaining English component UI strings to Dutch (info window labels, map canvas label, tile attribution, search result fallback, and others). Rebuilt the bundled `assets/vendor/draad-maps.iife.js`.

### Fixed
- `post_query` data source now uses a `meta_query` that requires a non-empty location value, so posts without a location no longer appear in the list view.
- Filter no longer renders empty chips: empty meta values and missing taxonomy terms are skipped when building marker properties.

## [1.3.0] - 2026-05-21

### Changed
- Block renamed from `draad/map` to `draad/map-advanced`. Generated wrapper class is now `.wp-block-draad-map-advanced`; theme and token CSS selectors updated to match. Existing posts using `draad/map` will need to be re-inserted or migrated.

## [1.2.9] - 2026-05-18

### Fixed
- Renamed the map post type registration function to `draad_maps_register_map_post_type` and guarded it with `function_exists()` to prevent a fatal name clash with the legacy `draad-kaarten` plugin during map migration.

## [1.2.8] - 2026-04-22

### Fixed
- `composer.json` package name corrected to `draadnl/draad-maps-plugin`; removed `composer/installers` dependency to avoid version conflicts with host projects.

## [1.2.6] - 2026-04-22

### Added
- `composer.json` added to the plugin, enabling installation via Composer (`draadnl/draad-maps-plugin`).

## [1.2.5] - 2026-04-22

### Changed
- Built assets (`assets/vendor/draad-maps.iife.js`, `build/`) are now committed to the repo and the release workflow no longer runs `npm install` or `npm run build`, eliminating the GitHub Package Registry auth dependency.

## [1.2.4] - 2026-04-22

### Fixed
- Add `packages: read` permission to release workflow so `npm ci` can fetch `@draadnl/map-components` from GitHub Package Registry.

## [1.2.3] - 2026-04-22

### Fixed
- Release zip now uses a whitelist copy (`draad-maps-plugin.php`, `includes/`, `build/`, `assets/`, `README.md`) instead of rsync exclude patterns, which were silently failing to exclude dev files.

## [1.2.2] - 2026-04-22

### Fixed
- Removed leading `/` from `.distignore` patterns; rsync's `--exclude-from` was not honouring the anchored form, causing `src/`, `scripts/`, and other dev files to be included in the release zip.

## [1.2.1] - 2026-04-22

### Fixed
- IIFE is now copied to `assets/vendor/` during build so it is web-accessible when installed from the release zip. Previously the plugin served it from `node_modules/`, which is excluded from the distribution archive.
- `scripts/` directory excluded from release zip via `.distignore`.

## [1.2.0] - 2026-04-22

### Added
- Denhaag marker icon PNGs (green, blue, red, orange, pink, purple, yellow, grey + hover/active variants) bundled under `assets/markers/`.
- `assets/js/denhaag-sprite.js` icon sprite, enqueued before the map IIFE so components can resolve icons on first init.
- `assets/js/denhaag-markers.js` helper that sets default marker icon attributes on `dm-marker` elements at runtime.
- GitHub Actions release workflow (`.github/workflows/release.yml`).
- `.npmrc` pointing `@draadnl` scope to GitHub Package Registry.
- `.distignore` listing files excluded from plugin release builds.

### Changed
- Replaced local `draad-maps-0.4.0.tgz` tarball dependency with published `@draadnl/map-components@^0.5.0` npm package.
- IIFE and base URL now resolved from `node_modules/@draadnl/map-components/dist/` instead of `assets/vendor/`.

## [1.1.0] - 2026-04-22

### Added
- `@gemeente-denhaag/design-tokens` package provides `--denhaag-*` CSS custom properties at runtime.
- `scripts/wrap-tokens.js` build script rewrites the token package's `:root` selector to `.wp-block-draad-map`, preventing token variables from leaking into the global cascade. Runs automatically via `prebuild`/`prestart` npm hooks.

### Changed
- All hardcoded HSL colour values, font families, font weights, font sizes, and border-radius values in `denhaag-theme.css` replaced with `var(--denhaag-*)` references. Hardcoded fallbacks retained on `::part()` selectors and baseline rules.

### Fixed
- `denhaag-theme.css` token block was set on `:root`, leaking ~100 CSS custom properties into the global cascade. Block now scoped to `.wp-block-draad-map`.
- Unscoped `dm-map { display: block }` rule moved to `.wp-block-draad-map dm-map` to prevent affecting custom elements outside the block.

## [1.0.0] - 2026-04-07

Initial release.
