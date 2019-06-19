var express = require('express');
var router = express.Router();

// Mongoose connection -----------------------------------------------------------------------------------
var mongoose = require('mongoose');
// Get Model
var product = require('../models/products');

mongoose.connect('mongodb://localhost:27017/local',{ useNewUrlParser: true });

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//---------------------------------------------------------------------------------------------------------


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//--------------------------------------------------------------------------------------------




module.exports = router;
