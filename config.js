(function() {
  define(function(require) {
    var settings;
    settings = require('settings');
    settings.set('app', 'intro_command', "github.load 'https://github.com/also/lead.js/blob/master/docs/quickstart.md'");
  });

}).call(this);
