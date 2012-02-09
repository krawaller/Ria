define(
	['jQuery', 'Underscore', 'Backbone'],
	function( $, _, Backbone ) {
		var mainIndexView = Backbone.View.extend({
			el : $('#createTask'),

			initialize : function() {
				this.template = _.template( $( '#create-task-template' ).html() );	
			},

			render : function() {
				$(this.el).html( this.template );

			}
		});

		return new mainIndexView;
	}
);