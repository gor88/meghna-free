
jQuery(document).ready(function($) {
	var isWheeling = false;
	var bulbSize = 463;
	var steps = 3;
	var currentStep = 0;

	$('.wheel-image').on('click', function() {
		if (isWheeling || isFinished()) {
			return;
		}
		var self = $(this);

		isWheeling = true;
		self.removeClass('wheel-image');
		self.addClass('wheel-image-wheeling');
		step();

		setTimeout(function() {
			self.removeClass('wheel-image-wheeling');
			self.addClass('wheel-image');
			isWheeling = false;			

			if (isFinished()) {
				finish();
			}
		}, 2000);
	});

	function step() {
		if (isLastStep()) {
			$('.wheel-power').css('transition', 'width 4.5s');
		}
		if (currentStep < steps) {
			$('.wheel-power').width($('.wheel-power').width() + (bulbSize / steps));	
			currentStep++
		}
	}

	function finish() {
		$('.gif-iluminati').show();
	}

	function isFinished() {
		return currentStep === steps;
	}

	function isLastStep() {
		return currentStep === steps - 1;
	}
});