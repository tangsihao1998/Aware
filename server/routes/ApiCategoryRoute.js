var express = require('express');
var router = express.Router();

// Define Controller
var category_controller = require('../controller/ApiCategoryController');

//Category Routes
router.get('/',category_controller.category_list);

module.exports = router;

