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

	function( $, _, Backbone, CategoryCollection, TaskCollection, UserCollection, TodoEventCollection, indexView, CreateUserView ) {
		return AppRouter = Backbone.Router.extend({
			initialize : function() {

				Backbone.history.start();
				
				this.categoryCollection = new CategoryCollection();
				this.taskCollection = new TaskCollection();
				this.userCollection = new UserCollection();
				// this.todoEventCollection = TodoEventCollection();
				console.log( "Init : ", this );
			},

			routes : {
				'' : 'Home',
				'createUser' : 'CreateUser',
				'*actions' : 'defaultAction'
			},

			Home : function() {
				console.log( "Home : ", this );
				// Checks if no user in localStorage
				if ( this.userCollection.length === 0 ) {
					this.navigate( 'createUser', { trigger : true, replace : true } );
				}


				// Om användaren finns,
					// Skapa ny
				//this.navigate( 'createUser', { trigger : true, replace : true } );	
				// indexView.render();
				// $('#createTask').html( indexView.el );
			},

			CreateUser : function() {
				console.log( "CreateUser : ", this );
				var createUserView = new CreateUserView( this.userCollection );
				createUserView.render();
			},

			defaultAction : function( actions ) {
				console.log( 'No route:', actions );
			}
		});
});