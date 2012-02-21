define(
	['Backbone'],

	function( Backbone ) {
		var TodoView = Backbone.View.extend({

			initialize : function( element, tasks ) {
				this.template = _.template( $('#todos').html() );
				this.tasks = tasks;
				this.el = $(element);
			},

			render : function() {
				$(this.el).html( this.template({
					todo : this.tasks
				}));
			}
		});
	
		return TodoView;
	}
);