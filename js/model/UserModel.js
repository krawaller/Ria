define(
	var UserModel = Backbone.Model.extends({
	  defaults : {
	    userId : null,
	    name : null
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
	    if (  !attrs.userId || !attrs.name ) {
	           return "The User object does not validate."; 
	    }
	  }
	});

	return UserModel;
);