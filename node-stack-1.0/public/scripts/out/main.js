// Generated by CoffeeScript 1.4.0
(function() {

  RJS.installPrototypes();

  if (typeof client === void 0) {
    console.error("Expected the client namespace to be defined. This should be boostrapped from the server.");
  }

  client.views = {};

  client.partials = {};

  /*
  Returns a function that, given some data, returns a new instance of the specified Backbone View constuctor with the data as its model.
  Useful for mapping array data to fully-qualified backbone views:
  e.g.
  */


  client.viewCreator = function(View) {
    return function(data) {
      return View["new"]({
        model: new Backbone.Model(data)
      });
    };
  };

  $(function() {
    var view;
    if (!client.view in client.views) {
      console.error("Invalid view: '{0}'. This value must exactly match the name of a view function stored on client.views.".supplant([client.view]));
    }
    view = new client.views[client.view]({
      model: new Backbone.Model(client.data)
    });
    return Creatable.render(view);
  });

}).call(this);
