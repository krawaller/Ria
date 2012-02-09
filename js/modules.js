 Category module */
Category = {
	validateCategory: function( name ) {....}
}

/**
  * @param {String} name The name to validate.
  * @returns {Category} A category object if name validates, else empty object.
  */
function validateCategory( name ) {
	// Validates the name param, not empty and only A-z.
}

/* end category module */


/* Task module */
Task = {
	validateTask : function( content, time, completed, userId, categoryId ) {....},
	toggleCompleted : function( task ) {....}
}

/**
  * @param {String} content The content of the task.
  * @param {Date} time The date and time of the creation.
  * @param {Int} userId The UserId of the creation user.
  * @param {Int} categoryId The id of the category to add the task too.
  * @returns {Task} Retruns an task object if everything passes validation, else false.
  */
function validateTask( content, time, userId, categoryId ) {
	// Validates so that no param is empty.
	// time must be a date object.
	// userId and categoryId must be integers.
}

/**
  * @param {Task} task The task object to mark as completed/uncompleted.
  * @returns {Task} the task object with updated completed property.
  */
function toggleCompleted( task ) {
	// Depending on the task.completed property, change to opposite.
	// ie true => false and false => true.
}

/* end task module */


/* TodoEvent module */

ToDoEvent = {
	validateEvent : function( name, time, userId ) {...}
}
/**
  * @param {String} name The name of the event ( Deleted, Added, Updated, Completed ).
  * @param {Date} time The date and time of the event.
  * @param {Int} userId The userId of the user who created did the action.
  * @returns {TodoEvent} Returns an TodoEvent object if the validation passes, else false.
  */
function validateEvent( name, time, userId ) {
	// Validates the TodoEvent before storing to storage.
}

/* end TodoEvent module */


/* User module */
User {
	validateUser : function( name, exists ) {....},
}

/**
  * @param {String} name The name to validate.
  * @returns {User} Returns a User object if name validates.
  */
function validateUser( name ) {
	// Validates the name, not empty, only A-z.
}

/* end User module */


/*###################*/
/* app.js */
/**
  * Initializes the application.
  */
function init() {
	// Initializes the application.
	// Does all the corresponding work for a
	// entrance path.
}


/* Objetk och data.
  Lista alla objekt som backbone modeller. */
/**
  * @class Task
  */
Task = Backbone.RelationalModel.extends({
  // Define the relations of the object using relational.
  relations : [
    {
      type : Backbone.HasOne,
      key : 'userId',
      relatedModel : 'User',
      includeInJSON : Backbone.Model.prototype.idAttribute,
      collectionType : 'UserCollection'
    },
    {
      type : Backbone.HasOne,
      key : 'categoryId',
      relatedModel : 'Category',
      includeInJSON : Backbone.Model.prototype.idAttribute,
      collectionType : 'CategoryCollection'
    }
  ],

  defaults : {
    taskId : null,
    content : null,
    time : null,
    completed : false,
    userId : null,
    categoryId : null  
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
    if (  attrs.taskId === null || attrs.content === null || 
          attrs.time === null || attrs.completed === null || 
          attrs.userId === null || attrs.categoryId === null ) {
           return "The task object does not validate."; 
    }
  }
});

Category = Backbone.Model.extends({
  defaults : {
    categoryId : null,
    label : null;
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
    if (  attrs.categoryId === null || attrs.label === null ) {
           return "The category object does not validate."; 
    }
  }
});

User = Backbone.Model.extends({
  defaults : {
    userId : null,
    name : null
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
    if (  attrs.userId === null || attrs.name === null ) {
           return "The User object does not validate."; 
    }
  }
});

TodoEvent = Backbone.Model.extends({
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
    if (  attrs.name === null || attrs.time === null || 
          attrs.userId === null ) {
           return "The ToDoEvent object does not validate."; 
    }
  }
});

/* Moduler och funktioner. 
   Lista alla collections, vyer, routes. */

/* Collections (Generic) */
TaskCollection = Backbone.Collection.extends({
  model : Task,
});

UserCollection = Backbone.Collection.extends({
  model : User,
});

CategoryCollection = Backbone.Collection.extends({
  model : Category,
});

TodoEventCollection = Backbone.Collection.extends({
  model : TodoEvent,
});


/* views */
CreateUserView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});

CreateTaskView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});

CreateCategoryView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});

// "Generic" view for the category holder.
CategoryView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});

// A view to render every category.
SingleCategoryView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});


EditTaskView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});


DeleteTaskView = Backbone.View.extends({
  el : '', // The corresponding DOM element for the view.

  initialize : function() {
    // On instanciating render.
    this.render();
  },

  events : {
    // Bind events to the view.  
  },

  /**
    * Renders the view.
    * @returns {CreateUser} CreateUser Returns this instance of the view.
    */
  render : function() {
    // Do some stuff before rendering view.
    return this;
  }
});


/* Router */
app = Backbone.Router.extends({
  routes : {
    // Eventually more routes will be defined.
    '' : 'main',
    '*actions' : 'default'
  },

  default : function( actions ) {
    // Show an error message if route is not defined.
  },

  main : function( ) {
    // Starts the main application.
    // Instanciate Model, view and collections.

    // Check if localStorage store(s) exists.
      // If not, create the storage.
      // Load createUserView to create a user.
    
    // Check if user exists.
      // If not, load createuserView to create a user.
    
    // Execute rest of application .. (Dont know details yet.)
  }

});

define( 
  var TaskModel = Backbone.RelationalModel.extends({
    // Define the relations of the object using relational.
    relations : [
      {
        type : Backbone.HasOne,
        key : 'userId',
        relatedModel : 'User',
        includeInJSON : Backbone.Model.prototype.idAttribute,
        collectionType : 'UserCollection'
      },
      {
        type : Backbone.HasOne,
        key : 'categoryId',
        relatedModel : 'Category',
        includeInJSON : Backbone.Model.prototype.idAttribute,
        collectionType : 'CategoryCollection'
      }
    ],

    defaults : {
      taskId : null,
      content : null,
      time : null,
      completed : false,
      userId : null,
      categoryId : null  
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
      if (  attrs.taskId === null || attrs.content === null || 
            attrs.time === null || attrs.completed === null || 
            attrs.userId === null || attrs.categoryId === null ) {
             return "The task object does not validate."; 
      }
    }
  })

  return TaskModel;
);
