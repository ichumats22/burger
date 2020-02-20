//Import the ORM to create functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create([
      'burger_name', 'devoured'
    ], [
      name, false
    ], cb)
  },

  update: function(id, cb) {
    var condition = 'id=' + id;
    orm.update({ 
      devoured: true
    }, condition, cb);
  },

  delete: function(id, cb) {
    var condition = 'id=' + id;
    orm.delete(condition, cb);
  }
};

//Export the databse functions for the controller (burgers_controller.js)
module.exports = burger;