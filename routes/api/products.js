const express = require('express');
const router = express.Router();
const productsMoucks = require('../../utils/mocks/products');
const ProductsService = require('../../services/products')


const ProductService = new ProductsService();

router.get('/', function( req, res) {

    const { query } = req.query

    res.status(200).json({
        data: productsMoucks,
        message: 'prodcuts listed'
    });
 });

 router.get('/:productId', function( req, res) { 

    const { productId } = req.params;

    res.status(200).json({
        data: productsMoucks[0],
        message: 'prodcuts retrieved'
    });
 });

 router.post('/', function( req, res) { 
    res.status(201).json({
        data: productsMoucks[0],
        message: 'prodcuts listed'
    });
 });

 router.put('/:productId', function( req, res) {

    res.status(200).json({
        data: productsMoucks,
        message: 'prodcuts listed'
    });
 });
 router.delete('/:productId', function( req, res) {

    res.status(200).json({
        data: productsMoucks[0],
        message: 'prodcuts delete'
    });
 });

 module.exports = router ;