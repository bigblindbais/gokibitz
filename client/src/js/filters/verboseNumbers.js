angular.module('gokibitz.filters')
.filter('verboseNumbers', function () {
	// TODO: Replace with a legit NPM package for turning numbers into English
	// words. Until then, there are higher-priority items to work on.
	return function (input) {
		var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
			'eight', 'nine'];
		var output = String(input).replace(/\b[1-9]\b/, function (match) {
			return numbers[match - 1];
		});
		return output;
	};
});
