var express = require('express');
// Set Handlebars
var exphbs = require('express-handlebars');
var db = require("./models");
var mysql = require("mysql");

var request = require('request')
var app = express();
require('dotenv').config();

var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));
// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

//error handler
app.use(function(err,req,res,next){
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  //render the error page
  res.status(err.status || 500);
})


//Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on http://locahost:' + PORT);
});

module.exports = app;