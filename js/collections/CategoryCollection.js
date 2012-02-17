define([
	'Backbone',
	'models/CategoryModel',
	],

	function( Backbone, CategoryModel ) {
	
	var CategoryCollection = Backbone.Collection.extend({
		model : CategoryModel,

		localStorage : new Store( "Categories" ),

		initialize : function() {
			this.fetch();

			// If collection is empty, create defaults.
			if ( this.models.length === 0 ) {
				this.create( { label : 'Work' } );
				this.create( { label : 'School' } );
				this.create( { label : 'Private' } );
			}
		}
	});

	return CategoryCollection;

	}
);