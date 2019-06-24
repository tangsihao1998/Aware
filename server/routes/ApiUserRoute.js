const express = require('express');
var router = express.Router();

// Define Controller
var UserController = require('../controller/ApiUserController');

// User Router
router.post('/register', async (req,res)=>{
    const newuser ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    let success = await UserController.AddNewUser(newuser);
    if(success){
        res.send("Success");
    }
    else{
        res.send("Fail")
    }
});


module.exports = router;

