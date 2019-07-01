const express = require('express');
const passport = require('passport');
const router = express.Router();

// Define Controller
var CartController = require('../controller/ApiCartController');


router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("complete");
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    });
});


module.exports = router;

