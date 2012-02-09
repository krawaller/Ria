require.config({
	paths: {
		jQuery : 'lib/jquery/jquery',
		Underscore : 'lib/underscore/underscore',
		Backbone : 'lib/backbone/backbone',
		Relational : 'lib/backbone/backbone-relational',
		localStorage : 'lib/backbone/backbone.localStorage'
	}
});

require([
	'app',
	
	'lib/jquery/jquery-1.7.1.min',
	'lib/underscore/underscore-full',
	'lib/backbone/backbone-full',
	],

	function( App ) {
		App.init();
	}
);