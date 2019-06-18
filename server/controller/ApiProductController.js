//Define a Models
var Productdata = require('../models/products');
let controller ={};

controller.getAllProduct = async (req,res,next) => {
    try{
        Productdata.find({}).populate('Categories').exec(function (err,listproduct){
            if(err) {
                return next(err);
            }
            res.send(listproduct);
        });
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
};

controller.AddProduct = async (req,res,next) => {
    try {
        // Productdata.create({img:{}},function(err,productda){
        //       if(err) {return console.log(err)};
        // });
        res.send('Hello It Me');
        return true;
    } catch (error) {
        console.log(err);
        return false;
    }
};

module.exports = controller;