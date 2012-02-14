define([
	'models/CategoryModel',
	],

	function( CategoryModel ) {
	
	var CategoryCollection = Backbone.Collection.extend({
		model : CategoryModel,

		localStorage : new Store("Categories")
	});

	return new CategoryCollection;	

	}
);