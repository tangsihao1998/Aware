//Define a Models
var Cart = require('../models/cart');
var ProductData = require('../models/products');
let controller ={};

// Add Product To Cart 
controller.AddCart = async (cart) => {
    try {
        let check = await controller.UpdateQuantity(cart);
        if(!check){
            const newcart = await Cart.create(cart);
            if(!newcart){
                return false;
            }
            return newcart;
        }
        else{
            return check;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Update Quantity For Product In Cart
controller.UpdateQuantity = async (cart) => {
    try {        
        let {productID,userID} = cart;
        // console.log("Update Quantity: ",cart);
        // console.log("UserID: ",userID);
        // console.log("productID: ",productID);
        let check = await Cart.findOneAndUpdate({productID:productID,userID:userID},{quantity:cart.quantity});
        if(!check){
            return false;
        }
        // console.log("UpdateQuantity",check);
        return check;
    } catch (error) {
        console.log(error);
        return false;
    }
}

controller.GetCartUser = async(userID) => {
    try {
        const list = await Cart.find({userID:userID}).populate({path:'productID',model: ProductData});
        if(!list){
            return false;
        }
        return list;
    } catch (error) {
        console.log(error);
        return false;
    }
}

controller.DeleteCartProduct = async(productID,userID) =>{
    try {
        const list = await Cart.findOneAndRemove({productID:productID,userID:userID});
        console.log(list);
        // if(!list){
        //     return false;
        // }
        // return list;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = controller;