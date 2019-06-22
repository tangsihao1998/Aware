var express = require('express');
var router = express.Router();

// Define Controller
var product_controller = require('../controller/ApiProductController');

//Product Routes
router.get('/',product_controller.getAllProduct);
router.get('/:id',product_controller.findProduct);
router.post('/add',product_controller.AddProduct);

module.exports = router;

