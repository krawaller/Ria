define(
	[
		'Backbone',
		'views/main/category'
	],

	function( Backbone, CategoryView ) {
		var CategoryCollectionView = Backbone.View.extend({
			el : $('#todos-holder'),

			initialize : function() {
			},

			events : {
				// empty atm.
			},

			render : function() {
				var viewResult = '';
				var colors = [ '#BB89D1', '#5F2E76', '#0C060F'];
				for( var i = 0; i < this.collection.length; i++ ) {
					var categoryView = new CategoryView( { model : this.collection.at( i ) } );
					viewResult += "<div class='category'>"+$( categoryView.render().el ).html()+"</div>";
				}

				$(this.el).html( viewResult );

			}
		});
	
		return CategoryCollectionView;
	}
);