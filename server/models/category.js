//require Mongoose
var mongoose = require('mongoose');

var category = mongoose.Schema({
    name: String,
    product_id: [{type: mongoose.Schema.Types.ObjectId, ref:'product'}],
});

module.exports = mongoose.model('category', category);