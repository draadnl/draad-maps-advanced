# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.2] - 2026-09-02

### Fixed
- A taxonomy that is both the map's category source and a filterable field keeps the display name and filter type set in the data source's filter table. The category source was applied after the filter table, so it overwrote the editor's label with the taxonomy's own name (an "Onderwerpen" filter on Tags rendered as "Tags") and reset the filter type to auto.

### Changed
- Bundled map components updated to 0.7.0. Selecting a search result now re-orders the list nearest-first from that result instead of leaving the order untouched, clearing the search restores the original order, and picking a search result while the list is open no longer floats an infowindow over the cards.

## [1.6.1] - 2026-08-25

### Fixed
- Maps that open in list view no longer steal focus on page load. The list was opened by simulating a click on the component's toggle button, and the component treats a toggle click as a user action — so it moved focus to the first card and the browser scrolled the page down to it. `<dm-list>` now takes an `open` attribute, so the list starts open declaratively and focus stays where the visitor left it. Keyboard users still get focus on the first card when they open the list themselves.

### Changed
- Bundled map components updated to 0.6.1.

## [1.6.0] - 2026-07-29

### Added
- Filter order is now the editor's to decide: each filterable field gets up/down buttons in the data source's filter table, and the map follows that order. Previously the order came from the field vocabulary — alphabetical for custom fields — no matter how the fields were picked.
- Map setting **Closing the filter panel**: choose between the buttons at the bottom of the filter panel (Apply / Clear filters) or the cross in the top right. Appears under the Filters checkbox.

### Changed
- Bundled map components updated to 0.6.0.
- The filter panel now closes through **Toepassen** / **Filters wissen** at the bottom by default, and results update only after Apply. Visitors did not reliably recognise the cross added in 1.4.4 as the way to close the panel. Existing maps switch over without being re-saved; pick "Cross in the top right" per map to keep the old behaviour.

### Fixed
- Password-protected posts no longer appear on a map. Their status is still `publish`, so they passed the published-only check and were rendered with title, description and location readable. Their values are also gone from the filter field pickers in the admin.
- Headings in infowindows, list cards and the filter panel now use the Den Haag heading font (TheMix) instead of falling back to the browser's system font. The theme stylesheet defined `--heading-font-family` but never handed it to the map components.

## [1.5.1] - 2026-07-22

### Removed
- Stacking context on the map block root (`position: relative; z-index: 0`), so the block no longer traps map layers below host-theme elements.

## [1.5.0] - 2026-07-21

### Added
- Filters to replace the generated cards and infowindows from outside the plugin: `draad_maps_marker_properties`, `draad_maps_post_infowindow_html`, `draad_maps_feature_infowindow_html` and `draad_maps_list_card_template`. Each receives a context array with everything already resolved (post, map ID, datasource config, marker ID, coordinates, permalink, image, title, description, eyebrow, address, terms, action URL/label, properties). See the README.
- Content filters on post query datasources: a repeater of source / operator / value rows (custom fields and `taxonomy:…` sources) restricting which posts a layer pulls in, plus an AND/OR combiner. Values autocomplete from existing term slugs and meta values, but any custom value is accepted.

### Changed
- Bundled `@draadnl/map-components` 0.5.9: bool filters render as a single checkbox with a configurable label, checkboxes align to the first line of their label, and list card spacing ignores label elements.

## [1.4.4] - 2026-07-08

### Added
- Filter panel close button: the `dm-filter` panel header now shows a close (×) button in the top-right that closes the panel (all variants).

### Fixed
- Search: selecting a map result (feature/marker) now highlights the marker itself — active icon, brought to front — and opens its infowindow, instead of only moving the map.
- Hovering a selected marker no longer leaves it stuck on the hover icon; it returns to the active icon when the mouse leaves.

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
