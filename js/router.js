define([
	'jQuery',
	'Underscore',
	'Backbone',
	'CategoryCollection',
	'TaskCollection',
	'UserCollection',
	'TodoEventCollection',
	'views/main/index',
	'views/user/create',
	'views/main/categorycollectionview'],

	function( $, _, Backbone, CategoryCollection, TaskCollection, UserCollection, TodoEventCollection, IndexView, CreateUserView, CategoryCollectionView ) {
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
				// Checks if no user in 
				if ( this.userCollection.length == 0 ) {
					this.navigate( 'createUser', { trigger : true, replace : true } );
				}

				var indexView = new IndexView( this.categoryCollection, this.taskCollection, this.userCollection );
				indexView.render();

				var categoryCollectionView = new CategoryCollectionView( { collection : this.categoryCollection } );
				categoryCollectionView.render();
				
				$('#createTask').html( indexView.el );
				$('#todos-holder').html( categoryCollectionView.el ); // router should be responsible for positioning
			},

			CreateUser : function() {
				if ( this.userCollection.length > 0 ) {
					this.navigate( '', { trigger: true, replace : false } );	
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