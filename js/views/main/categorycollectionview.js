define(
	[
		'Backbone',
		'views/main/category'
	],

	function( Backbone, CategoryView ) {
		var CategoryCollectionView = Backbone.View.extend({
			tagName : "div",//$('#todos-holder'),

			initialize : function() {
			},

			events : {
				// empty atm.
			},

			render : function() {
				this.$el.empty();
				var colors = [ '#BB89D1', '#5F2E76', '#0C060F'];
				for( var i = 0; i < this.collection.length; i++ ) {
					var categoryView = new CategoryView( { model : this.collection.at( i ) } );
					this.$el.append(categoryView.render().$el);
				}
				return this;
			}
		});
	
		return CategoryCollectionView;
	}
);