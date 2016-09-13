var exec = require('cordova/exec');

var Teemo = {
	q: function(success, ad, ap, level) {
		exec(success, failure, "Teemo", "q", [ad, ap, level]);
	},
	w: function() {

	},
	e: function() {

	},
	r: function() {

	}
};

module.exports = Teemo;
