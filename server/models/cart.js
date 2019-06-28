//require Mongoose
const mongoose = require('mongoose');

//Create Schema
var cart = mongoose.Schema({
    quantity: Number,
    Color: String,
    Size:{type: String, max: 1},
    
});

module.exports = mongoose.model('cart', cart);