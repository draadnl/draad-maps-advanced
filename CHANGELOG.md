# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
