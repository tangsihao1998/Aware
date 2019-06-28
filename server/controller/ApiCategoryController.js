//Define a Models
var Category = require('../models/category');
let controller ={};

// Create Data for Category If The New Category doesn't in DB
controller.AddCategory = async(data) => {
    try {           
        const checkCategory = await controller.findOneCategory(data);
        if(!checkCategory){
            const newCategory = {
                name: data,
                product_id: []
            }
            const category = await Category.create(newCategory);
            if(!category){
                return false;
            }
            return category._id;
        }
        else{
            return checkCategory._id;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Find One Data Using Category Name
controller.findOneCategory = async(data) => {
    try {
        const category = await Category.findOne({name:data});
        if(!category){
            return false;
        }
        return category;
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Find One and Update By Using Category ID
controller.UpdateProductID = async (productID,CategoryID) => {
    try {
        const preUpdate = await Category.findById(CategoryID,'product_id');
        const newListProductID = preUpdate.product_id.concat(productID);
        const updated = await Category.findByIdAndUpdate(CategoryID,{product_id: newListProductID});
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Create Find Product With Category Filter

module.exports = controller;