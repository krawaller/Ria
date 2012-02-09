define([
	'jQuery',
	'Underscore',
	'Backbone',
	'views/main/index',
	'views/user/create' ],

	function( $, _, Backbone, indexView, createUserView ) {
		var AppRouter = Backbone.Router.extend({
			routes : {
				'' : 'Home',

				'*actions' : 'defaultAction'
			},

			Home : function() {
				indexView.render();
			},

			defaultAction : function( actions ) {
				console.log( 'No route:', actions );
			}
		});

		var init = function() {
			var app_router = new AppRouter();
			Backbone.history.start();
		};

		return {
			init : init
		};
});