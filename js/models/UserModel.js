define( ['Backbone'],
	function( Backbone ) {
		var UserModel = Backbone.Model.extend({
			defaults : {
	    		userId : null,
	    		name : null
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
	}
);