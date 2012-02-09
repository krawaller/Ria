define(
	var TodoEventModel = Backbone.Model.extends({
	  // Define the relations of the object using relational.
	  relations : [
	    {
	      type : Backbone.HasOne,
	      key : 'userId',
	      relatedModel : 'User',
	      includeInJSON : Backbone.Model.prototype.idAttribute,
	      collectionType : 'UserCollection'
	    }
	  ],
	 
	  defaults : {
	    name : null,
	    time : null,
	    userId : null
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
	    if (  !attrs.name || !attrs.time || !attrs.userId ) {
	           return "The ToDoEvent object does not validate."; 
	    }
	  }
	});

	return TodoEventModel;
);