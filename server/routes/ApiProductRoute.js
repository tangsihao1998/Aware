const express = require('express');
var router = express.Router();

// Define Controller
let product_controller = require('../controller/ApiProductController');
let brand_controller = require('../controller/ApiBrandController');
let size_controller = require('../controller/ApiSizeController');
let color_controller = require('../controller/ApiColorController');
let category_controller = require('../controller/ApiCategoryController');

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

router.post('/add', async (req,res) => {

    let product = {
        imgs: req.body.imgs,
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        categories: req.body.categories,
        quantity: req.body.quantity,
        description: req.body.description
    };
    
    let BrandID = await brand_controller.AddBrand(product.brand);
    let SizeID=[];
    let ColorID=[];
    let CategoryID=[];
    for(var i=0; i < product.size.length ; ++i){
        let size = await size_controller.AddSize(product.size[i]);
        SizeID = SizeID.concat(size);
    }
    for(var i=0; i < product.color.length; ++i){
        let color = await color_controller.AddColor(product.color[i]);
        ColorID = ColorID.concat(color);
    }
    for(var i=0; i < product.categories.length; ++i){
        let category = await category_controller.AddCategory(product.categories[i]);
        CategoryID = CategoryID.concat(category);
    }
    product.categories = CategoryID;
    product.brand = BrandID;
    product.size = SizeID;
    product.color = ColorID;

    let newproduct = await product_controller.AddProduct(product);
    console.log(newproduct._id);

    // Update ProductID for each Model
    let brandupdate = await brand_controller.UpdateProductID(newproduct._id,BrandID);
    for(var i = 0; i < SizeID.length; ++i ){
        let sizeupdate = await size_controller.UpdateProductID(newproduct._id,SizeID[i]);
    }
    for(var i = 0; i < ColorID.length; ++i ){
        let colorupdate = await color_controller.UpdateProductID(newproduct._id,ColorID[i]);
    }
    for(var i = 0; i < CategoryID.length; ++i ){
        let categoryupdate = await category_controller.UpdateProductID(newproduct._id,CategoryID[i]);
    }

    if(newproduct){
       return res.json(newproduct); 
    }
    return false;
});

router.get('/:id',product_controller.findProduct);


module.exports = router;

