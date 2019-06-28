//require Mongoose
const mongoose = require('mongoose');

//Create Schema
var color = mongoose.Schema({
    color: String,
    product_id: [{type: mongoose.Schema.Types.ObjectId, ref:'product'}],
});

module.exports = mongoose.model('color', color);