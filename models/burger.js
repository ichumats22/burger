var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  create: function(burger_name, cb) {
    orm.insertOne('burgers', burger_name, function(res) {
      cb(res);
    });
  },

  update: function() {
    orm.updateOne('burgers', colToUpdate, valToUpdate, colToSearch, valToSearch, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;