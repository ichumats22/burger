var express = require('express');

var router = express.Router();

//Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');

//Create routes
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.create(['burger_name'], [req.body.name], function(result) {
    res.json({ burger_name: result.burger_name });
  });
});

router.put('/api/cats/:id', function(req, res) {
  var condition = `id = ${req.params.id}`;

  console.log('condition: ', condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if(result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

//Export router for server.js
module.exports = router;