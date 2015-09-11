var Backbone = require('backbone');
var _ = require('underscore');

function setValue(key, value) {
  localStorage.setItem(key, value);
};

function getValue(key) {
  return localStorage.getItem(key);
};
var LocalPuzon = {
  set: setValue,
  get: getValue
};

module.exports = LocalPuzon;
