// Generated by CoffeeScript 1.4.0
(function() {
  var render;

  render = require('./controller-helper.js').render;

  module.exports = function(app) {
    return app.get('/', function(req, res) {
      var viewData;
      viewData = {
        title: 'TITLE',
        bootstrap: {
          view: 'index',
          data: {}
        }
      };
      return render(req, res, viewData);
    });
  };

}).call(this);
