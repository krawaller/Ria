require.config({
	paths: {
		jQuery : 'lib/jquery/jquery',
		Underscore : 'lib/underscore/underscore',
		Backbone : 'lib/backbone/backbone',
		CategoryCollection : 'collections/CategoryCollection',
		TaskCollection : 'collections/TaskCollection',
		UserCollection : 'collections/UserCollection',
		TodoEventCollection : 'collections/ToDoEventCollection'
	}
});

require( ['app'],

	function( App ) {
		App.init();
	}
);