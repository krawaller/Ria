define([
	'Backbone'
	], 
	
	function( Backbone ) {
		var CategoryModel = Backbone.Model.extend({
			
			defaults : {
				categoryId : null,
				label : null
			},

			/**
			* @param {Array} attrs The attributes to validate.
			* @returns {String} If something does not validate, return string
			* (throw error in backbone.) does not run set or save on model.
			*/
			validate : function( attrs ) {
			if (  !attrs.categoryId || !attrs.label ) {
			       return "The category object does not validate."; 
				}
			}
		});

	return CategoryModel;
	}
);