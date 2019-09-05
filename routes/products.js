const express = require('express');
const router = express.Router();

const productsMoucks = require('../utils/mocks/products')

router.get('/', function(req, res){
    res.render("products", { productsMoucks })
});
module.exports = router;