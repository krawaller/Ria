define([
	'jQuery',
	'Underscore',
	'Backbone',
	'views/main/index'],

	function( $, _, Backbone, indexView ) {
		var AppRouter = Backbone.Router.extend({
			
			routes : {
				'' : 'Home',
				'*actions' : 'defaultAction'
			},

			Home : function() {
				indexView.render();
				$('#createTask').html( indexView.el );
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