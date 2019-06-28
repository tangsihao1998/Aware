//Define a Models
var Brand = require('../models/brand');
let controller ={};

// Create Data for Brand If The New Brand doesn't in DB
controller.AddBrand = async(data) => {
    try {           
        const checkBrand = await controller.findOneBrand(data);
        if(!checkBrand){
            const newbrand = {
                name: data,
                product_id: []
            }
            const brand = await Brand.create(newbrand);
            if(!brand){
                return false;
            }
            return brand._id;
        }
        else{
            return checkBrand._id;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Find One Data Using Brand Name
controller.findOneBrand = async(data) => {
    try {
        const brand = await Brand.findOne({name:data});
        if(!brand){
            return false;
        }
        return brand;
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Find One and Update By Using Brand ID
controller.UpdateProductID = async (productID,brandID) => {
    try {
        const preUpdate = await Brand.findById(brandID,'product_id');
        console.log(preUpdate.product_id)
        const newListProductID = preUpdate.product_id.concat(productID);
        console.log(newListProductID);
        
        const updated = await Brand.findByIdAndUpdate(brandID,{product_id: newListProductID});
        console.log(updated);
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports = controller;