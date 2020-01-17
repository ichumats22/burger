var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableInput], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function(burger_name) {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
    connection.query(queryString, [burger_name], function(err, res) {
      if (err) throw err;
      console.log(res)
    });
  }, 

  updateOne: function () {
    var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?';
    connection.query(queryString, [colToUpdate, valToUpdate, colToSearch, valToSearch], function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

};

module.exports = orm;