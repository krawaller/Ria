define(
	[
		'Backbone', 
		'views/main/todo'
	],

	function( Backbone, TodoView )  {
		var categoryView = Backbone.View.extend({
			tagName : 'div',
			className : 'category',

			initialize : function() {
			},

			render : function() {
				$(this.el).append( '<h2>'+this.model.attributes.label+'</h2>' );

				var taskCount = this.model.attributes.task.models.length;
				for( var i = 0; i < taskCount; i++ ) {
					var todoView = new TodoView( {model : this.model.attributes.task.models[i]} );
					$(this.el).append( todoView.render().el );
				}

				return this;
			}
		});

		return categoryView;
	}
);
/*
	this.model
	Rendera category model.

	label,
	taskCollectionView,
	this.model.task,
		- todoItem.js
	

*/