define([
	'jQuery',
	'Underscore',
	'Backbone',
	'CategoryCollection',
	'TaskCollection',
	'UserCollection',
	'TodoEventCollection',
	'views/main/index',
	'views/user/create'],

	function( $, _, Backbone, CategoryCollection, TaskCollection, UserCollection, TodoEventCollection, IndexView, CreateUserView ) {
		return AppRouter = Backbone.Router.extend({
			initialize : function() {
				this.categoryCollection = new CategoryCollection();
				this.taskCollection = new TaskCollection();
				this.userCollection = new UserCollection();
				// this.todoEventCollection = TodoEventCollection();
			},

			routes : {
				'' : 'Home',
				'createUser' : 'CreateUser',
				'*actions' : 'defaultAction'
			},

			Home : function() {
				// Checks if no user in localStorage
				if ( this.userCollection.length === 0 ) {
					this.navigate( 'createUser', { trigger : true, replace : true } );
				}

				var indexView = new IndexView( this.categoryCollection, this.taskCollection, this.userCollection );
				indexView.render();
				// Check if there are any tasks.
					// List tasks.
				
				$('#createTask').html( indexView.el );
			},

			CreateUser : function() {
				if ( this.userCollection.length > 0 ) {
					this.navigate( '', { trigger : true } );
				} else {
					var createUserView = new CreateUserView( this.userCollection );
					createUserView.render();
				}
			},

			defaultAction : function( actions ) {
				console.log( 'No route:', actions );
			}
		});
});