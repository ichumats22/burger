//Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.password,
  database: 'burgers_db'
});


// Make connection
connection.connect(function(err) {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as ID: ${connection.threadId}`);
});

//Export connection four our ORM to use
module.exports = connection;