define(
	[
		'Backbone',
		'views/main/todo'
	],

	function( Backbone, TodoView ) {
		var TodoHolderView = Backbone.View.extend({
			el : $('#todo-category'),

			initialize : function( taskCollection, categoryCollection ) {
				// empty atm.
				this.template = _.template( $('#todo-list-template').html() );
				this.taskCollection = taskCollection;
				this.categoryCollection = categoryCollection;
			},

			events : {
				// empty atm.
			},

			render : function() {
				
				var school = _.filter( this.taskCollection.models, function( task ) {
					
					if ( task.attributes.category.attributes.label == 'School') {
						return task.attributes.category.attributes.label;
					}	
				});

				var work = _.filter( this.taskCollection.models, function( task ) {
					
					if ( task.attributes.category.attributes.label == 'Work') {
						return task.attributes.category.attributes.label;
					}	
				});

				var privateTodo = _.filter( this.taskCollection.models, function( task ) {
					
					if ( task.attributes.category.attributes.label == 'Private') {
						return task.attributes.category.attributes.label;
					}	
				});

				$(this.el).html( this.template({
					categories : this.categoryCollection.models	
				}));

				
				var todoView = new TodoView( ".School", school );
				todoView.render();

				todoView = new TodoView( ".Work", work );
				todoView.render();

				todoView = new TodoView( ".Private", privateTodo );
				todoView.render();
			}
		});
	
		return TodoHolderView;
	}
);