(function() {

	var triggers = null;
	var holder = null;

	function construct() {
		triggers = document.querySelectorAll('[data-highlight]');
		holder = document.querySelector('[data-holder]');


		setupListeners();
	}

	function setupListeners() {
		for (var i = 0; i < triggers.length; i++) {
			triggers[i].addEventListener('mouseover', function(event) {
				onMouseOver(event, holder);
			});
		}

		for (var i = 0; i < triggers.length; i++) {
			triggers[i].addEventListener('mouseleave', function(event) {
				onMouseLeave(event, holder);
			});
		}
	}

	function onMouseOver(event, target) {
		var partToHighlight = event.currentTarget.getAttribute('data-highlight');
		target.classList.add('highlight-' + partToHighlight);
	}

	function onMouseLeave(event, target) {
		var partToFade = event.currentTarget.getAttribute('data-highlight');
		target.classList.remove('highlight-' + partToFade);
	}

	construct();
})();
