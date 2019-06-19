//require Mongoose
var mongoose = require('mongoose');

//Create Schema
var product = mongoose.Schema({
    imgs: [String],
    name: String,
    categories: {type: mongoose.Schema.Types.ObjectId ,ref:'category'},
    brand: String,
    price: {type: Number, min: 0},
    size: [{type: String, max: 1}],
    color: [String],
    quantity: Number,
    description: String
});


module.exports = mongoose.model('product', product);