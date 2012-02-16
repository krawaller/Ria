define(
	[	
		'jQuery',
		'Underscore',
		'Backbone'
	],

	function( $, _, Backbone ) {
		var mainIndexView = Backbone.View.extend({
			collectionCount : null,

			initialize : function( categoryCollection, taskCollection, userCollection, todoEventCollection ) {
				this.template = _.template( $( '#create-task-template' ).html() );
				this.collectionCount = ( CategoryCollection.models.length );

				this.categoryCollection = categoryCollection;
				this.taskCollection = taskCollection;
				this.userCollection = userCollection;
				this.todoEventCollection = todoEventCollection;
			},

			events : {
				'click #submit-task-form' : 'submitForm'		
			},

			render : function() {
				$(this.el).html( this.template( {
					category : this.categoryCollection.models

				} ) );
			},

			submitForm : function( e ) {
				var taskContent = $('.task-content').val();
				var taskCategory = $('.task-category').val();
				
			}
		});

		return mainIndexView;
	}
);