//Define a Models
var Color = require('../models/color');
let controller ={};

// Create Data for Size If The New Size doesn't in DB
controller.AddColor = async(data) => {
    try {           
        const checkColor = await controller.findOneColor(data);
        if(!checkColor){
            const newColor = {
                color: data,
                product_id: []
            }
            const color = await Color.create(newColor);
            if(!color){
                return false;
            }
            return color._id;
        }
        else{
            return checkColor._id;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Find One Data Using Size Name
controller.findOneColor = async(data) => {
    try {
        const color = await Color.findOne({color:data});
        if(!color){
            return false;
        }
        return color;
    } catch (error) {
        console.log(error)
        return false;
    }
}

// Find One and Update By Using Size ID
controller.UpdateProductID = async (productID,ColorID) => {
    try {
        const preUpdate = await Color.findById(ColorID,'product_id');
        console.log(preUpdate.product_id)
        const newListProductID = preUpdate.product_id.concat(productID);
        console.log(newListProductID);
        
        const updated = await Color.findByIdAndUpdate(ColorID,{product_id: newListProductID});
        console.log(updated);
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports = controller;