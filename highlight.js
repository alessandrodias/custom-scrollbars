(function() {

	var elements = null;
	var tracks = null;
	var thumbs = null;
	var incrementButtons = null;
	var decrementButtons = null;
	var corner = null;

	function construct() {
		elements = document.querySelector('[data-elements]');
		tracks = document.querySelector('[data-tracks]');
		thumbs = document.querySelector('[data-thumbs]');
		incrementButtons = document.querySelector('[data-increment-buttons]');
		decrementButtons = document.querySelector('[data-decrement-buttons]');
		corner = document.querySelector('[data-corner]');

		reportElements();
		setupListeners();
	}

	function setupListeners() {
		document.querySelector('[data-highlight-elements]').addEventListener('mouseover', function() {
			onMouseOver(elements);
		})
		document.querySelector('[data-highlight-elements]').addEventListener('mouseleave', function() {
			onMouseLeave(elements);
		});

		document.querySelector('[data-highlight-tracks]').addEventListener('mouseover', function() {
			onMouseOver(tracks);
		})
		document.querySelector('[data-highlight-tracks]').addEventListener('mouseleave', function() {
			onMouseLeave(tracks);
		});

		document.querySelector('[data-highlight-thumbs]').addEventListener('mouseover', function() {
			onMouseOver(thumbs);
		})
		document.querySelector('[data-highlight-thumbs]').addEventListener('mouseleave', function() {
			onMouseLeave(thumbs);
		});

		document.querySelector('[data-highlight-increment-buttons]').addEventListener('mouseover', function() {
			onMouseOver(incrementButtons);
		})
		document.querySelector('[data-highlight-increment-buttons]').addEventListener('mouseleave', function() {
			onMouseLeave(incrementButtons);
		});

		document.querySelector('[data-highlight-decrement-buttons]').addEventListener('mouseover', function() {
			onMouseOver(decrementButtons);
		})
		document.querySelector('[data-highlight-decrement-buttons]').addEventListener('mouseleave', function() {
			onMouseLeave(decrementButtons);
		});

		document.querySelector('[data-highlight-corner]').addEventListener('mouseover', function() {
			onMouseOver(corner);
		})
		document.querySelector('[data-highlight-corner]').addEventListener('mouseleave', function() {
			onMouseLeave(corner);
		});
	}

	function onMouseOver(target) {
		target.classList.add('is-highlighted');

		var spans = target.querySelectorAll('span');
		for (var i = 0; i < spans.length; i++) {
			spans[i].classList.add('is-highlighted');
		}
	}

	function onMouseLeave(target) {
		target.classList.remove('is-highlighted');

		var spans = target.querySelectorAll('span');
		for (var i = 0; i < spans.length; i++) {
			spans[i].classList.remove('is-highlighted');
		}
	}

	function reportElements() {
		console.log('elements', elements);
		console.log('tracks', tracks);
		console.log('thumbs', thumbs);
		console.log('incrementButtons', incrementButtons);
		console.log('decrementButtons', decrementButtons);
	}

	construct();
})();
