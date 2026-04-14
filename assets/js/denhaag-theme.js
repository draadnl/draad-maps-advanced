/**
 * Den Haag theme — injects overrides into each web-component Shadow DOM.
 *
 * CSS custom properties cascade into Shadow DOM automatically, but hardcoded
 * values (widths, border-radii, font-families) can only be overridden from
 * inside the shadow root. This script creates a shared CSSStyleSheet and
 * adopts it into every draad-maps component.
 */
( function () {
	'use strict';

	var css = `
		/* ─── Infowindow overrides ───────────────────────────────────────── */

		/* Collapse host when panel is hidden — prevents 43 invisible
		   dm-infowindow elements from stacking in the top-right slot */
		:host(dm-infowindow) {
			display: contents !important;
		}

		.infowindow[hidden] {
			display: none !important;
		}

		.infowindow {
			inline-size: 380px !important;
			border-radius: 3px !important;
			overflow: hidden !important;
			overflow-y: auto !important;
			box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
		}

		/* Close button — white bg, green cross, like denhaag.nl */
		.infowindow__close {
			position: absolute !important;
			inset-block-start: 8px !important;
			inset-inline-end: 8px !important;
			z-index: 10 !important;
			inline-size: 32px !important;
			block-size: 32px !important;
			border-radius: 3px !important;
			background: hsl(0 0% 100%) !important;
			color: hsl(138 58% 33%) !important;
			font-size: 0 !important;
			border: none !important;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			padding: 0 !important;
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15) !important;
		}

		/* Hide original SVG, show Den Haag close icon */
		.infowindow__close svg {
			display: none !important;
		}

		.infowindow__close::after {
			content: '' !important;
			display: block !important;
			inline-size: 16px !important;
			block-size: 16px !important;
			background: hsl(138 58% 33%) !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
		}

		.infowindow__close:hover {
			background: hsl(0 0% 95%) !important;
		}

		/* Image — full width, generous height like design */
		.infowindow__media {
			max-block-size: 220px !important;
			min-block-size: 140px !important;
			overflow: hidden !important;
		}

		.infowindow__media ::slotted(img) {
			display: block !important;
			inline-size: 100% !important;
			block-size: 220px !important;
			object-fit: cover !important;
		}

		/* Body padding */
		.infowindow__body {
			padding: 1rem 1.25rem 1.25rem !important;
		}

		/* Headings — green, TheMix */
		.infowindow__content h1,
		.infowindow__content h2,
		.infowindow__content h3 {
			font-family: "TheMix", "TheSans", sans-serif !important;
			color: var(--dm-infowindow-heading, hsl(138 58% 33%)) !important;
			font-weight: 700 !important;
			margin: 0 0 8px 0 !important;
		}

		.infowindow__content h3 {
			font-size: 1.25rem !important;
		}

		/* Eyebrow label */
		.infowindow__content .label,
		.infowindow__content [data-label] {
			display: block !important;
			font-size: 0.6875rem !important;
			font-weight: 700 !important;
			letter-spacing: 0.08em !important;
			text-transform: uppercase !important;
			color: hsl(0 0% 18%) !important;
			margin-block-end: 4px !important;
			margin-block-start: 0 !important;
		}

		/* Address with outlined location pin icon */
		.infowindow__content address {
			display: flex !important;
			align-items: flex-start !important;
			gap: 6px !important;
			font-size: 1rem !important;
			color: hsl(0 0% 29%) !important;
			text-decoration: underline !important;
			text-underline-offset: 2px !important;
			margin-block-end: 1rem !important;
		}

		.infowindow__content address::before {
			content: '' !important;
			flex-shrink: 0 !important;
			display: inline-block !important;
			inline-size: 18px !important;
			block-size: 18px !important;
			margin-block-start: 2px !important;
			background: currentColor !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 3.34-2.84 7.49-5 10.15C9.84 16.49 7 12.34 7 9zm5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 3.34-2.84 7.49-5 10.15C9.84 16.49 7 12.34 7 9zm5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
			-webkit-mask-repeat: no-repeat !important;
			mask-repeat: no-repeat !important;
		}

		/* Description */
		.infowindow__content p {
			font-size: 1rem !important;
			line-height: 1.5 !important;
			color: hsl(0 0% 29%) !important;
			margin: 0 0 1rem 0 !important;
		}

		/* Chips — outlined pill style matching design */
		.infowindow__content .chips {
			display: flex !important;
			flex-wrap: wrap !important;
			gap: 8px !important;
			margin-block: 1rem !important;
		}

		.infowindow__content .chips span {
			background: transparent !important;
			border: 1px solid hsl(0 0% 75%) !important;
			border-radius: 9999px !important;
			color: hsl(0 0% 18%) !important;
			font-size: 0.875rem !important;
			padding: 6px 16px !important;
			line-height: 1.3 !important;
		}

		/* Action button — Den Haag primary button spec */
		.infowindow__content .action,
		.infowindow__content a.button,
		.infowindow__content button.action {
			display: inline-flex !important;
			align-items: center !important;
			gap: 0.5rem !important;                          /* --denhaag-button-gap: space-inline-xs */
			margin-block-start: 0.75rem !important;
			padding: 0.5rem 1rem !important;                 /* --denhaag-button-padding: xs md */
			background: hsl(138 58% 33%) !important;         /* --denhaag-button-primary-action-background-color */
			color: hsl(0 0% 100%) !important;
			border: 1px solid transparent !important;
			border-radius: 3px !important;                   /* --denhaag-border-radius */
			font-family: "TheSans", sans-serif !important;   /* --denhaag-button-font-family */
			font-size: 1.125rem !important;                  /* --denhaag-button-font-size: scale-base */
			font-weight: 400 !important;                     /* --denhaag-button-font-weight: regular */
			text-decoration: none !important;
			cursor: pointer !important;
			line-height: 1.5 !important;
		}

		.infowindow__content .action:hover,
		.infowindow__content a.button:hover {
			background: hsl(138 57% 27%) !important;         /* green-4 */
		}

		.infowindow__content .action:focus-visible,
		.infowindow__content a.button:focus-visible {
			outline: 2px dashed hsl(47 100% 25%) !important; /* --denhaag-focus-border: dashed ocher-5 */
			outline-offset: 2px !important;
		}

		/* Den Haag ExternalLink icon BEFORE the text (like denhaag.nl buttons) */
		.infowindow__content .action::before,
		.infowindow__content a.button::before {
			content: '' !important;
			display: inline-block !important;
			flex-shrink: 0 !important;
			inline-size: 16px !important;
			block-size: 16px !important;
			background: currentColor !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
			-webkit-mask-repeat: no-repeat !important;
			mask-repeat: no-repeat !important;
		}

		/* Remove the old arrow after */
		.infowindow__content .action::after,
		.infowindow__content a.button::after {
			content: none !important;
			display: none !important;
		}

		/* ─── Map position — infowindow flush top-right, full height */

		.map__position--top-right {
			inset-block-start: 0 !important;
			inset-inline-end: 0 !important;
			inset-block-end: 0 !important;
			max-block-size: none !important;
			overflow-y: visible !important;
			padding: 12px !important;
		}

		/* ─── Toolbar layout — filter close to search, list-toggle far right */

		.map__toolbar {
			flex-wrap: nowrap !important;
		}

		/* Map container needs position context for filter panel */
		.map__container {
			position: relative !important;
		}

		/* ─── Filter overrides ───────────────────────────────────────────── */

		.filter__toggle {
			border-radius: 3px !important;
		}

		.filter__dialog {
			border-radius: 3px !important;
		}

		.filter__close {
			border-radius: 3px !important;
		}

		.filter__apply {
			border-radius: 3px !important;
			font-weight: 700 !important;
		}

		.filter__panel--dropdown {
			border-radius: 3px !important;
		}

		/* ─── Search overrides — input + button as one unit ─────────────── */

		:host {
			flex: 0 1 auto !important;
		}

		.search {
			font-size: 1.125rem !important;              /* --denhaag-typography-scale-base-font-size */
		}

		.search__label {
			font-size: 1.125rem !important;
		}

		.search__input-wrapper {
			gap: 0 !important;
			flex-wrap: nowrap !important;
		}

		.search__input {
			flex: 0 1 auto !important;
			inline-size: 190px !important;
			min-inline-size: 140px !important;
			max-inline-size: 220px !important;
			border-radius: 3px 0 0 3px !important;
			border-inline-end: none !important;
			font-size: 1.125rem !important;              /* base font-size */
		}

		.search__input:focus {
			z-index: 1 !important;
			position: relative !important;
		}

		.search__button {
			border-radius: 0 3px 3px 0 !important;
			padding-inline: 14px !important;
			border: 1px solid var(--dm-color-primary, hsl(138 58% 33%)) !important;
			flex-shrink: 0 !important;
		}

		.search__button-text {
			display: none !important;
		}

		/* Den Haag search icon (magnifying glass) */
		.search__icon {
			display: none !important;
		}

		.search__button::after {
			content: '' !important;
			display: block !important;
			inline-size: 18px !important;
			block-size: 18px !important;
			background: currentColor !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
		}

		/* ─── Filter panel — full-width inline below toolbar (not floating) */

		.filter--dropdown {
			position: static !important;
		}

		/* Panel — position set entirely by JS positionFilterPanel() */
		.filter__panel--dropdown {
			position: fixed !important;
			inline-size: auto !important;
			max-inline-size: none !important;
			max-block-size: 60vh !important;
			overflow-y: auto !important;
			border: none !important;
			border-radius: 0 0 3px 3px !important;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
			background: hsl(0 0% 100%) !important;
			border-block-end: 1px solid hsl(0 0% 82%) !important;
			padding: 0.75rem 1.25rem 1rem !important;
			z-index: 10000 !important;
		}

		:host(dm-filter) {
			position: static !important;
		}

		.filter__panel--dropdown .filter__header {
			padding: 0 0 0.25rem !important;
		}

		/* "Filters" heading via the header slot area */
		.filter__header-text::before {
			content: 'Filters' !important;
			display: block !important;
			font-family: "TheMix", "TheSans", sans-serif !important;
			font-size: 1.125rem !important;
			font-weight: 700 !important;
			color: hsl(0 0% 18%) !important;
		}

		.filter__header-text--empty {
			display: block !important;
		}

		.filter__panel--dropdown .filter__content {
			padding: 0 !important;
			max-block-size: none !important;
		}

		/* Section titles — smaller, bold, like design */
		.filter__section-title,
		.filter__section-toggle {
			font-size: 0.875rem !important;
			font-weight: 700 !important;
			color: hsl(0 0% 18%) !important;
			padding: 0.25rem 0 !important;
		}

		.filter__section {
			margin-block-end: 0.75rem !important;
		}

		/* Checkbox grid — responsive multi-column like design */
		.filter__fieldset {
			display: grid !important;
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important;
			gap: 8px !important;
		}

		@media (min-width: 768px) {
			.filter__fieldset {
				grid-template-columns: repeat(5, 1fr) !important;
			}
		}

		/* Checkboxes — no border, plain text like design */
		.filter__checkbox-label {
			min-block-size: auto !important;
			padding: 0.375rem 0 !important;
			font-size: 0.875rem !important;
			border: none !important;
			border-radius: 0 !important;
			background: transparent !important;
			gap: 0.5rem !important;
		}

		.filter__checkbox-label:hover {
			background: transparent !important;
		}

		.filter__checkbox-label:has(.filter__checkbox:checked) {
			border: none !important;
			background: transparent !important;
		}

		.filter__checkbox-label:has(.filter__checkbox:focus-visible) {
			outline: 2px dashed hsl(47 100% 25%) !important;
			outline-offset: 2px !important;
		}

		/* Close button in filter panel — Den Haag style */
		.filter__close {
			inline-size: 32px !important;
			block-size: 32px !important;
			border-radius: 3px !important;
			color: hsl(138 58% 33%) !important;
		}

		.filter__close:hover {
			background: hsl(0 0% 95%) !important;
		}

		/* ─── Filter icon override — Den Haag filter icon ────────────────── */

		.filter__icon {
			display: none !important;
		}

		.filter__toggle::before {
			content: '' !important;
			display: inline-block !important;
			inline-size: 18px !important;
			block-size: 18px !important;
			flex-shrink: 0 !important;
			background: currentColor !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.17188V5H5V6.22656C5.00003 6.47521 5.09255 6.71539 5.25977 6.89941L9.74023 11.8271C9.90754 12.0112 10 12.2513 10 12.5V19.6123L14 18.2793V12C14 11.7348 14.1054 11.4805 14.293 11.293L18.707 6.87891C18.8712 6.71482 18.9724 6.49945 18.9951 6.27051L19 6.17188ZM21 6.17188C20.9999 6.86802 20.7578 7.53952 20.3203 8.07324L20.1211 8.29297L16 12.4141V19C16 19.4303 15.7246 19.812 15.3164 19.9482L9.31641 21.9482C9.01146 22.0499 8.67581 21.9995 8.41504 21.8115C8.15429 21.6236 8 21.3214 8 21V12.8867L3.78027 8.24512V8.24414C3.27861 7.69215 3.00019 6.97343 3 6.22754V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.17188Z' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.17188V5H5V6.22656C5.00003 6.47521 5.09255 6.71539 5.25977 6.89941L9.74023 11.8271C9.90754 12.0112 10 12.2513 10 12.5V19.6123L14 18.2793V12C14 11.7348 14.1054 11.4805 14.293 11.293L18.707 6.87891C18.8712 6.71482 18.9724 6.49945 18.9951 6.27051L19 6.17188ZM21 6.17188C20.9999 6.86802 20.7578 7.53952 20.3203 8.07324L20.1211 8.29297L16 12.4141V19C16 19.4303 15.7246 19.812 15.3164 19.9482L9.31641 21.9482C9.01146 22.0499 8.67581 21.9995 8.41504 21.8115C8.15429 21.6236 8 21.3214 8 21V12.8867L3.78027 8.24512V8.24414C3.27861 7.69215 3.00019 6.97343 3 6.22754V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.17188Z' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
		}

		.filter__toggle {
			font-size: 1.125rem !important;              /* --denhaag-button-font-size: base */
			font-weight: 400 !important;                 /* --denhaag-button-font-weight: regular */
			padding: 0.5rem 1rem !important;             /* --denhaag-button-padding: xs md */
		}

		/* ─── List icon override — Den Haag list icon ────────────────────── */

		.list__icon {
			display: none !important;
		}

		.list__toggle::before {
			content: '' !important;
			display: inline-block !important;
			inline-size: 18px !important;
			block-size: 18px !important;
			flex-shrink: 0 !important;
			background: currentColor !important;
			-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 7a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1' fill='currentColor'/%3E%3C/svg%3E") !important;
			mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 7a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1' fill='currentColor'/%3E%3C/svg%3E") !important;
			-webkit-mask-size: contain !important;
			mask-size: contain !important;
		}

		.list__toggle {
			font-size: 1.125rem !important;              /* --denhaag-button-font-size: base */
			font-weight: 400 !important;                 /* --denhaag-button-font-weight: regular */
			padding: 0.5rem 1rem !important;             /* --denhaag-button-padding: xs md */
		}

		/* ─── List card overrides ────────────────────────────────────────── */

		.list-card {
			border-radius: 3px !important;
		}

		:host(dm-list) {
			margin-inline-start: auto !important;
		}

		.list__toggle {
			border-radius: 3px !important;
		}

		/* ─── Map zoom overrides ─────────────────────────────────────────── */

		.leaflet-control-zoom {
			border-radius: 3px !important;
		}
	`;

	var sheet;
	try {
		sheet = new CSSStyleSheet();
		sheet.replaceSync( css );
	} catch ( e ) {
		// Fallback for older browsers without constructable stylesheets.
		sheet = null;
	}

	/**
	 * Inject the theme sheet into a shadow root.
	 */
	function inject( shadowRoot ) {
		if ( ! shadowRoot ) return;

		// Prevent double-injection.
		if ( shadowRoot.__denhaagTheme ) return;
		shadowRoot.__denhaagTheme = true;

		if ( sheet && shadowRoot.adoptedStyleSheets !== undefined ) {
			shadowRoot.adoptedStyleSheets = [
				...shadowRoot.adoptedStyleSheets,
				sheet,
			];
		} else {
			// Fallback: append a <style> element.
			var style = document.createElement( 'style' );
			style.textContent = css;
			shadowRoot.appendChild( style );
		}
	}

	/**
	 * Process a node and its children for shadow roots.
	 */
	function process( node ) {
		if ( ! ( node instanceof HTMLElement ) ) return;

		if ( node.shadowRoot ) {
			inject( node.shadowRoot );
		}

		// Also check children (custom elements inside dm-map, etc.)
		node.querySelectorAll( '*' ).forEach( function ( el ) {
			if ( el.shadowRoot ) {
				inject( el.shadowRoot );
			}
		} );
	}

	/**
	 * Observe the DOM for new custom elements being added.
	 */
	function observe() {
		// Process any already-rendered elements.
		process( document.body );

		// Watch for new elements (infowindows are created dynamically).
		var observer = new MutationObserver( function ( mutations ) {
			mutations.forEach( function ( m ) {
				m.addedNodes.forEach( function ( node ) {
					process( node );
				} );
			} );
		} );

		observer.observe( document.body, { childList: true, subtree: true } );
	}

	// Hook into custom element definition to catch shadow roots at creation time.
	var originalAttachShadow = Element.prototype.attachShadow;
	Element.prototype.attachShadow = function ( init ) {
		var shadowRoot = originalAttachShadow.call( this, init );
		// Defer injection so the component has time to set up its own styles.
		requestAnimationFrame( function () {
			inject( shadowRoot );
		} );
		return shadowRoot;
	};

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', observe );
	} else {
		observe();
	}

	/**
	 * Position the filter dropdown panel at the top of the map canvas.
	 * Runs on toggle click so it always has the right position.
	 */
	function positionFilterPanel() {
		var dmMap = document.querySelector( 'dm-map' );
		var dmFilter = document.querySelector( 'dm-filter' );
		if ( ! dmMap || ! dmFilter || ! dmMap.shadowRoot || ! dmFilter.shadowRoot ) return;

		var mapContainer = dmMap.shadowRoot.querySelector( '.map__container' );
		var panel = dmFilter.shadowRoot.querySelector( '.filter__panel' );
		if ( ! mapContainer || ! panel ) return;

		var mapRect = mapContainer.getBoundingClientRect();
		// Position panel just above the map canvas top (-8px overlap like design)
		panel.style.top = ( mapRect.top - 8 ) + 'px';
		// Match the map container width exactly
		panel.style.left = ( mapRect.left + 12 ) + 'px';
		panel.style.right = ( window.innerWidth - mapRect.right + 12 ) + 'px';
		panel.style.maxHeight = ( mapRect.height + 8 ) + 'px';
	}

	// Re-position on scroll and resize
	var positionRAF = null;
	function schedulePosition() {
		if ( positionRAF ) return;
		positionRAF = requestAnimationFrame( function () {
			positionRAF = null;
			positionFilterPanel();
		} );
	}

	window.addEventListener( 'scroll', schedulePosition, { passive: true } );
	window.addEventListener( 'resize', schedulePosition, { passive: true } );

	// Hook into filter toggle clicks
	var filterObserver = new MutationObserver( function () {
		var dmFilter = document.querySelector( 'dm-filter' );
		if ( ! dmFilter || ! dmFilter.shadowRoot ) return;

		var panel = dmFilter.shadowRoot.querySelector( '.filter__panel' );
		if ( panel && panel.classList.contains( 'filter__panel--open' ) ) {
			positionFilterPanel();
		}
	} );

	// Start observing once dm-filter exists
	function watchFilter() {
		var dmFilter = document.querySelector( 'dm-filter' );
		if ( dmFilter && dmFilter.shadowRoot ) {
			filterObserver.observe( dmFilter.shadowRoot, { attributes: true, subtree: true, attributeFilter: [ 'class' ] } );
		} else {
			// Retry after a bit
			setTimeout( watchFilter, 500 );
		}
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', function () { setTimeout( watchFilter, 1000 ); } );
	} else {
		setTimeout( watchFilter, 1000 );
	}
} )();
