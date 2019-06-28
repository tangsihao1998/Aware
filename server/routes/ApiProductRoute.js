const express = require('express');
var router = express.Router();

// Define Controller
let product_controller = require('../controller/ApiProductController');
let brand_controller = require('../controller/ApiBrandController');
let size_controller = require('../controller/ApiSizeController');
let color_controller = require('../controller/ApiColorController');
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

    const product = {
        imgs:['/images/img1.jpg','/images/img1.jpg','/images/img1.jpg','/images/img1.jpg'],
        name:'Collete Stretch Linen Minidress',
        brand:'Zara',
        price:19000,
        size:['M'],
        color:['red','green','blue'],
        quantity:200,
        description:'Best Sellers'};
    
    let brand = await brand_controller.AddBrand(product.brand);
    console.log(brand);
    const SizeID=[];
    for(var i=0; i < product.size.length ; ++i){
        let size = await size_controller.AddSize(product.size[i]);
    }
    for(var i=0; i < product.color.length; ++i){
        let color = await color_controller.AddColor(product.color[i]);
    }

    // let newproduct = await product_controller.AddProduct(product);
    // if(newproduct){
    //     res.json(newproduct);
    // }
    // Brand Update
    // let brandupdate = await brand_controller.UpdateProductID('newproduct._id','5d159415d06d8c609cf05964');
});

router.get('/:id',product_controller.findProduct);


module.exports = router;

