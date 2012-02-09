define(
	var ToDoEventCollection = Backbone.Collection.extends({
		model : TodoEventModel
	});

	return ToDoEventCollection;
);