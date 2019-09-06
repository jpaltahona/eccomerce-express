const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');
const ProductService = new ProductsService();


router.get('/', async function(req, res, next){

    const { tags } = req.query;
try{
    const Products = await ProductService.getProducts({ tags });
    res.render("products", { Products })
}
catch(err){
    next(err)
}
});
module.exports = router;