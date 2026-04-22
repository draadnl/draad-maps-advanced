# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
