//Import MySQL connection
var connection = require('./connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }
  return arr.toString();
};

//Object for all SQL statement function
var orm = {
  all: function(cb) {
    var queryString = 'SELECT * FROM burgers;';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(cols, vals, cb) {
    var queryString = 'INSERT INTO burgers';

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);
    
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, 

  update: function (objColVals, condition, cb) {
    var queryString = 'UPDATE burgers';

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: function(condition, cb) {
    var queryString = 'DELETE FROM burgers';
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

//Export the orm object for the model (burger.js)
module.exports = orm;