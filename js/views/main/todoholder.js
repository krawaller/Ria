define(
	[
		'Backbone'
	],

	function( Backbone ) {
		var TodoHolderView = Backbone.View.extend({
			el : $('#todo-holder'),

			initialize : function( taskCollection ) {
				// empty atm.
				this.template = _.template( $('#todo-list-template').html() );
				this.taskCollection = taskCollection;
			},

			events : {
				// empty atm.
			},

			uniqueCategory : function( array ) {
				var current = [], l = array.length;
				var returnArray = [];

				for( var i = 0; i < l; i++ ) {
					for( var j =i+1; j < l; j++ ) {
						if( array[i] === array[j] ) {
							j = ++i;
						}
					}

					returnArray.push( array[i] );
				}

				return returnArray;
			},

			render : function() {

				// Get all category labels.
				var categoryIds = [];
				for( var i = 0; i < this.taskCollection.length; i++ ) {
					var catid = this.taskCollection.models[i].attributes.id;
					categoryIds.push( this.taskCollection.get( catid ).attributes.category.attributes.id );	
				}

				var categoryTasks = this.uniqueCategory( categoryIds );
				console.log( categoryTasks );

				
				
				/*for( var i = 0; i < this.taskCollection.length; i++ ) {
					categories.push( this.taskCollection.models[i]) 
				}*/
				// For each diffrent category, a new vy.
				$(this.el).html( this.template({
					tasks : this.taskCollection.models,

				}));
			}
		});
	
		return TodoHolderView;
	}
);