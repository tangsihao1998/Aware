//require Mongoose
const mongoose = require('mongoose');

//Create Schema
var brand = mongoose.Schema({
    name: String,
    product_id: [{type: mongoose.Schema.Types.ObjectId, ref:'product'}],
});

module.exports = mongoose.model('brand', brand);