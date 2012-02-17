define(
	[	
		'jQuery',
		'Underscore',
		'Backbone',
		'models/TaskModel'
	],

	function( $, _, Backbone, TaskModel ) {
		var mainIndexView = Backbone.View.extend({
			
			initialize : function( categoryCollection, taskCollection, userCollection ) {
				this.template = _.template( $( '#create-task-template' ).html() );
				this.categoryCollection = categoryCollection;
				this.taskCollection = taskCollection;
				this.userCollection = userCollection;

				this.taskCollection.bind( 'add', this.addOne, this );

			},

			events : {
				'click #submit-task-form' : 'submitForm'		
			},

			addOne : function( taskModel ) {
				console.log( this.taskCollection );
				console.log( "TaskCollection - Added task." );
			},

			render : function() {
				$(this.el).html( this.template({
					category : this.categoryCollection.models
				}));
			},

			submitForm : function( e ) {
				// Get the needed values for a task.
				var taskContent = $('.task-content').val();
				var taskCategoryId = $('.task-category').val();
				var category = this.categoryCollection.get( taskCategoryId );
				var user = this.userCollection.at( 0 );

				try {
					var model = new TaskModel({
						content : taskContent,
						time : new Date(),
						completed : false,
						user: user,
						category : category
					});

					// add the model to the collection.
					this.taskCollection.add( model );
				} catch( error ) {
					console.log( "Error :", error );
				}
			}
		});

		return mainIndexView;
	}
);