var express = require('express');
var router = express.Router();

// Mongoose connection
var mongoose = require('mongoose');
var product = require('../models/product-models');

mongoose.connect('mongodb://localhost:27017/local');
/* GET home page. */
router.get('/', function(req, res, next) {
  var productdata= new product({name: 'Lara'});

  //Save and Create 
  productdata.save(function(err){
    if(err) {return console.log(err)};
  });
  
  product.create({name: 'Nike'},function(err,productda){
    if(err) {return console.log(err)};
  });
  
  //Find 
  product.find({ 'name': 'Nike'},function(err,productlist) {
    console.log(productlist)
    if(err) {return console.log(err)};
  });
  res.render('index', { title: 'Express' });

  
});

//--------------------------------------------------------------------------------------------




module.exports = router;
