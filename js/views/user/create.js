define(
	['jQuery', 'Underscore', 'Backbone' ],
	
	function( $, _, Backbone ) {
		var createUserView = Backbone.View.extend({
			el : $('#create-user'),

			initialize : function( userCollection ) {
				this.template = _.template( $( '#create-user-template' ).html() );
				this.userCollection = userCollection;
				console.log(this.userCollection);
			},

			events : {
				'click #submit-create-user-form' : 'submitCreateUserForm'
			},

			render : function() {
				$(this.el).html( this.template );
			},

			submitCreateUserForm : function( e ) {
				var username = $('.input-username').val();
				this.userCollection.create( { userId : 1, name : username } );
				console.log( this.userCollection );
			}

		});

		return createUserView;
	}	
);