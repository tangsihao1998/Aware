//require Mongoose
const mongoose = require('mongoose');

//Create Schema
var size = mongoose.Schema({
    size: {type: String, max: 1},
    product_id: [{type: mongoose.Schema.Types.ObjectId, ref:'product'}],
});

module.exports = mongoose.model('size', size);