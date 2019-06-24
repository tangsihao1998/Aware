var express = require('express');
var router = express.Router();

// Mongoose connection -----------------------------------------------------------------------------------
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local',{ useNewUrlParser: true });

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//---------------------------------------------------------------------------------------------------------



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Define Route
const UserRouter = require('./ApiUserRoute');
router.use('/', UserRouter);
//--------------------------------------------------------------------------------------------




module.exports = router;
