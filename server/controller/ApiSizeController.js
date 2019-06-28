//Define a Models
var Size = require('../models/size');
let controller ={};

// Create Data for Size If The New Size doesn't in DB
controller.AddSize = async(data) => {
    try {           
        const checkSize = await controller.findOneSize(data);
        if(!checkSize){
            const newSize = {
                size: data,
                product_id: []
            }
            const size = await Size.create(newSize);
            if(!size){
                return false;
            }
            return size._id;
        }
        else{
            return checkSize._id;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Find One Data Using Size Name
controller.findOneSize = async(data) => {
    try {
        const size = await Size.findOne({size:data});
        if(!size){
            return false;
        }
        return size;
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Find One and Update By Using Size ID
controller.UpdateProductID = async (productID,SizeID) => {
    try {
        const preUpdate = await Size.findById(SizeID,'product_id');
        const newListProductID = preUpdate.product_id.concat(productID);
        const updated = await Size.findByIdAndUpdate(SizeID,{product_id: newListProductID});
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Create Find Product By Size Filter

module.exports = controller;