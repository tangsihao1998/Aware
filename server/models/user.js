//require Mongoose
var mongoose = require('mongoose');

var user = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model('user', user);