define( 
	[
		'Backbone',
		'models/ToDoEventModel'
	],

	function( Backbone, TodoEventModel ) {
		var ToDoEventCollection = Backbone.Collection.extend({
			model : TodoEventModel
		});

		return TodoEventModel;
	}
);