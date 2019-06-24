//Define a Models
var Userdata = require('../models/user');
let controller ={};

// Add New User
controller.AddNewUser = async(user) =>{
    try {
        console.log(user);
        await Userdata.create({
            name: user.name,
            email: user.email,
            password: user.password},function(err){if(err){console.log(err)}})
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


module.exports = controller;