define([
	'Backbone'
	], 
	
	function( Backbone ) {
		var CategoryModel = Backbone.RelationalModel.extend({
			
			/**
			  * @param {Array} attrs The attributes to validate.
			  * @returns {String} If something does not validate, return string
			  * (throw error in backbone.) does not run set or save on model.
			  */
			validate : function( attrs ) {
			if (  !attrs.label ) {
			       throw "The category object does not validate."; 
				}
			}
		});

	return CategoryModel;
	}
);