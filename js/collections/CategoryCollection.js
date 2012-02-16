define([
	'Backbone',
	'models/CategoryModel',
	],

	function( Backbone, CategoryModel ) {
	
	var CategoryCollection = Backbone.Collection.extend({
		model : CategoryModel,

		localStorage : new Store("Categories"),

		initialize : function() {
			this.fetch();

			if ( this.models.length === 0 ) {
				this.create( { categoryId : 1, label : 'Work' } );
				this.create( { categoryId : 2, label : 'Scool' } );
				this.create( { categoryId : 3, label : 'Private' } );
			}
		}
	});

	return CategoryCollection;

	}
);