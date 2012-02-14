require.config({
	paths: {
		jQuery : 'lib/jquery/jquery',
		Underscore : 'lib/underscore/underscore',
		Backbone : 'lib/backbone/backbone'
	}
});

require( ['app'],

	function( App ) {
		App.init();
	}
);