define([
	'Backbone',
	'models/TaskModel'
	],

	function( Backbone, TaskModel ) {
	
	var TasksCollection = Backbone.Collection.extend({
		model : TaskModel,

		localStorage : new Store("Tasks"),

		initialize : function() {
			this.fetch();
		}
	});

	return TasksCollection;	

	}
);