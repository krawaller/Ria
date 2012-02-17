define(
	['Backbone'],

	function( Backbone ) {
		var TodoEventModel = Backbone.Model.extend({
	  		// Define the relations of the object using relational.
			relations : [
			{
				type : Backbone.HasOne,
				key : 'userId',
				relatedModel : 'User',
				includeInJSON : Backbone.Model.prototype.idAttribute,
				collectionType : 'UserCollection'
			}],
	 
			/**
			  * @param {Array} attrs The attributes to validate.
			  * @returns {String} If something does not validate, return string
			  * (throw error in backbone.) does not run set or save on model.
			  */
			validate : function( attrs ) {
				if (  !attrs.name || !attrs.time || !attrs.userId ) {
					throw "The ToDoEvent object does not validate."; 
				}
			}
	});

	return TodoEventModel;
});