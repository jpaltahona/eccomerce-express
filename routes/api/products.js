const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products')

const ProductService = new ProductsService();

router.get('/', function( req, res, next) {

    const { tags } = req.query;

    try{
        const prodcuts = ProductService.getProducts({tags});

        res.status(200).json({
            data: prodcuts,
            message: 'prodcuts listed'
        });
    } catch(err){
        next(err);
    }
 });

 router.get('/:productId', async function( req, res, next) { 

    const { productId } = req.params;
    try{
        const prodcut =  await ProductService.getProduct({ productId });

        res.status(200).json({
            data: prodcut[0],
            message: 'prodcuts retrieved'
        });
    }
    catch(err){
        next(err);
    }
 });

 router.post('/', async function( req, res, next) { 

    const { body: product } = req;

    try{
        const prodcut = await ProductService.createProduct({ product });

        res.status(201).json({
            data: prodcut[0],
            message: 'prodcut listed'
        });
    }
    catch(err){
        next(err);
    }
 });

 router.put('/:productId', async function( req, res, next) {

    const { productId } = req.params;
    const { body: product } = req;
    try{

        const prodcut = await ProductService.updateProduct({ productId, product});

        res.status(200).json({
            data: prodcut,
            message: 'prodcuts listed'
        });
    }
    catch(err){
        next(err);
    }
    
 });
 router.delete('/:productId', async function( req, res, next) {
    const { productId } = req.params;

    try{
        const prodcut = await ProductService.deleteProduct({ productId });

        res.status(200).json({
            data: prodcut[0],
            message: 'prodcuts delete'
        });
    }
    catch(err){
        next(err);
    }
 });

 module.exports = router ;