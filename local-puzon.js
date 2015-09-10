var Backbone = require('backbone');
var _ = require('underscore');

var LocalPuzon = function(opts) {
    this.initialize.call(this, opts);
}

_.extend(LocalPuzon.prototype, Backbone.Model, {
  initialize: function(options){
    this.lessonName = options.lessonName;
    this.time = 0;
  },
  getLessonTime: function() {
    return this.time;
  },
  setLessonTime: function(time) {
    this.time = time;
  }
})
module.exports = LocalPuzon;
