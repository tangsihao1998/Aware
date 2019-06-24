const express = require('express');

//Add new
const productRouter = require('./ApiProductRoute');
const categoryRouter = require('./ApiCategoryRoute');

let router = express.Router();

router.use('/product', productRouter);
router.use('/category',categoryRouter);

module.exports = router;