//require Mongoose
var mongoose = require('mongoose');

//Create Schema
var product = mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    name: String
});


module.exports = mongoose.model('product', product);