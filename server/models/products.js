//require Mongoose
var mongoose = require('mongoose');

//Create Schema
var product = mongoose.Schema({
    img: [String],
    name: String,
    Categories: {type: mongoose.Schema.Types.ObjectId ,ref:'category'},
    brand: String,
    price: {type: Number, min: 0},
    size: String,
    color: [String],
    quantity: Number,
    description: String
});


module.exports = mongoose.model('product', product);