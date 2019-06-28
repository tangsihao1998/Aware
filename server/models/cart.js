//require Mongoose
const mongoose = require('mongoose');

//Create Schema
var cart = mongoose.Schema({
    quantity: Number,
    color: String,
    size:{type: String, max: 1},
    checkout: Boolean,
    productID: {type: mongoose.Schema.Types.ObjectId ,ref:'product'},
    userID: {type: mongoose.Schema.Types.ObjectId, ref:'user'}
});

module.exports = mongoose.model('cart', cart);