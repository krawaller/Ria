define(
	['jQuery', 'Underscore', 'Backbone', 'models/CategoryModel', 'collections/CategoryCollection'],
	function( $, _, Backbone, CategoryModel, CategoryCollection ) {
		var mainIndexView = Backbone.View.extend({
			collectionCount : null,

			initialize : function() {
				this.template = _.template( $( '#create-task-template' ).html() );
				
				CategoryCollection.fetch();
				
				if ( CategoryCollection.models.length === 0 ) {

					// Create the three default categories.
					CategoryCollection.create( { categoryId : 1, label : 'Work' } );
					CategoryCollection.create( { categoryId : 2, label : 'Scool' } );
					CategoryCollection.create( { categoryId : 3, label : 'Private' } );
				}

				this.collectionCount = ( CategoryCollection.models.length );
			},

			events : {
				'click #submit-task-form' : 'submitForm'		
			},

			render : function() {
				$(this.el).html( this.template );
			},

			submitForm : function( e ) {
				var task = $('.task-content').val();
				CategoryCollection.create( {categoryId : '1', label : task } );
				if ( CategoryCollection.models.length > 0 ) {
					console.log( "Större än noll." );
				}
			}
		});

		return new mainIndexView;
	}
);