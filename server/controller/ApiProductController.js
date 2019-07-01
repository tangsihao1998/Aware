//Define a Models
var Productdata = require('../models/products');
let controller ={};

// Pagination Product
controller.getPageProduct = async (page) => {
    try{
        let productdata = await Productdata.find({}).populate('categories').limit(20).skip(page*20);
        return productdata;
    }
    catch(err){
        console.log(err);
        return err;
    }
};

// Get All Product
controller.getAllProduct = async()=>{
    try{
        let productdata = await Productdata.find().populate('categories');
        return productdata;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

// Couunt Product
controller.ProductCount = async() =>{
    try {
        let count = await Productdata.find().count();
        return count;
    } catch (error) {
        console.log(error)
        return error;
    }
}

// Find Product 
controller.findProduct = async (id) => {
    try {
        const ReProduct = await Productdata.findById(id).populate('categories').populate('color').populate('size').populate('brand');
        // console.log(ReProduct);
        if(ReProduct){
            return ReProduct;
        }
        return false;
    } catch (error) {
        console.log(err);
        return false;
    }
}

// Add New Product
controller.AddProduct = async (product) => {
    try {
        const newproduct = await Productdata.create(product);
        // console.log(newproduct)
        if(!newproduct){
            return false;
        }
        return newproduct;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = controller;