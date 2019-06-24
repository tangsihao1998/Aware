const express = require('express');
var router = express.Router();

// Define Controller
var product_controller = require('../controller/ApiProductController');

//Product Routes
//Get all Product Data 
router.get('/', async (req,res) => {
    let productdata = await product_controller.getPageProduct(req.query.page - 1);
  
    if(productdata){
        res.json({listproduct: productdata});
    }
});

router.get('/count',async(req,res) => {
    let pages = await product_controller.ProductCount();
    pages = Math.ceil(pages/20);
    if(pages){
        res.json(pages);
    }
});

router.get('/add',product_controller.AddProduct);

router.get('/:id',product_controller.findProduct);


module.exports = router;

