var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.password,
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error(`Error conecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as ID: ${connection.threadId}`);
});

module.exports = connection;