const express = require('express');
const passport = require('passport');
const router = express.Router();

// Define Controller
var CartController = require('../controller/ApiCartController');

router.post('/add', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const list = req.body;
    for(var i=0 ; i < list.length; ++i){
        let cart ={
            quantity: list[i].quantity,
            color: list[i].color,
            size: list[i].size,
            productID: list[i].productID,
            userID: list[i].userID
        }
        const productnew = await CartController.AddCart(cart);
    }

    return res.json({listproduct:list});
});


module.exports = router;

