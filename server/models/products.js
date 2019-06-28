//require Mongoose
var mongoose = require('mongoose');

//Create Schema
var product = mongoose.Schema({
    imgs: [String],
    name: String,
    categories: [{type: mongoose.Schema.Types.ObjectId ,ref:'category'}],
    brand: {type: mongoose.Schema.Types.ObjectId ,ref:'brand'},
    price: {type: Number, min: 0},
    size: [{type: mongoose.Schema.Types.ObjectId ,ref:'size'}],
    color: [{type: mongoose.Schema.Types.ObjectId ,ref:'color'}],
    quantity: Number,
    description: String
});

module.exports = mongoose.model('product', product);