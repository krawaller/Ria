define(
var CategoryModel = Backbone.Model.extends({
	  defaults : {
	    categoryId : null,
	    label : null;
	  },
	 
	  initialize : function() {
	    // Empty function for future need.
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
);