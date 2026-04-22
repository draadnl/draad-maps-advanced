(function () {
	var base = window.__DRAAD_MAPS_DENHAAG_MARKERS__ || '';

	function applyDefaultMarkers() {
		document.querySelectorAll('dm-marker').forEach(function (m) {
			if (!m.getAttribute('icon'))        m.setAttribute('icon',        base + 'marker-green.png');
			if (!m.getAttribute('icon-hover'))  m.setAttribute('icon-hover',  base + 'marker-hover-green.png');
			if (!m.getAttribute('icon-active')) m.setAttribute('icon-active', base + 'marker-active-green.png');
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyDefaultMarkers);
	} else {
		applyDefaultMarkers();
	}
})();
