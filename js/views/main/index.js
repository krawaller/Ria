define(
	[	
		'jQuery',
		'Underscore',
		'Backbone'
	],

	function( $, _, Backbone ) {
		var mainIndexView = Backbone.View.extend({
			
			initialize : function( categoryCollection, taskCollection, userCollection ) {
				this.template = _.template( $( '#create-task-template' ).html() );
				this.categoryCollection = categoryCollection;
				this.taskCollection = taskCollection;
				this.userCollection = userCollection;
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
				// Get the needed values for a task.
				var taskContent = $('.task-content').val();
				var taskCategory = $('.task-category').val();

				console.log( this.userCollection.at(0) );

				this.taskCollection.create({ 
						taskId : ( this.taskCollection.lenth + 1 ),
						content : taskContent,
						time : new Date(),
						completed : false,
						// Gets the userId from userCollection.
						// Specified index 0 because limit of one user per browser.
						userId: this.userCollection.at(0),
						categoryId : taskCategory
				});
			}
		});

		return mainIndexView;
	}
);