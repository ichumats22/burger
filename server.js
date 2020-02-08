var express = require('express');
var request = require('request')
var app = express();
require('dotenv').config();

var PORT = process.env.PORT || 3000;
var corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
})

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

//Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on http://locahost:' + PORT);
});