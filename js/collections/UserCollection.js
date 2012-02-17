define([
	'Backbone',
	'models/UserModel',
	],

	function( Backbone, UserModel ) {
	
		return Backbone.Collection.extend({
			model : UserModel,

			localStorage : new Store( "User" ),

			initialize : function() {
				this.fetch();
			}
		});
	}
);