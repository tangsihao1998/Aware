const express = require('express');

//Add new
const productRouter = require('./ApiProductRoute');
const categoryRouter = require('./ApiCategoryRoute');
const cartRouter = require('./ApiCartRoute');

let router = express.Router();

router.use('/product', productRouter);
router.use('/category',categoryRouter);
router.use('/cart',cartRouter);
module.exports = router;