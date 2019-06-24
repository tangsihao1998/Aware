//Define a Models
var Productdata = require('../models/products');
let controller ={};

controller.getAllProduct = async (req,res,next) => {
    try{
        await Productdata.find({}).populate('categories').exec(function (err,listproduct){
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

controller.findProduct = async (req,res,next) => {
    try {
        const id = req.params.id;
        await Productdata.findById(id).populate('categories').exec(function (err,product){
            if(err) {
                return next(err);
            }
            res.send(product);
        });
        return true;
    } catch (error) {
        console.log(err);
        return false;
    }
}

controller.AddProduct = async (req,res,next) => {
    try {
        await Productdata.create({imgs:['/images/img1.jpg','/images/img1.jpg','/images/img1.jpg','/images/img1.jpg'],
            name:'Collete Stretch Linen Minidress',brand:'Zara',price:19000,size:['M'],
            color:['red','green','blue'],quantity:200,description:'Best Sellers'},function(err,productda){
              if(err) {return console.log(err)};
        });
        res.send('Hello It Me');
        return true;
    } catch (error) {
        console.log(err);
        return false;
    }
};

module.exports = controller;