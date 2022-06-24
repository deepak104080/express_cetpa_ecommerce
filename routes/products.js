const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

var colors = require('colors');


router.get('/', (req, res) => {
    res.send('Data from products');
    console.log(colors.blue('Products page running...'));
})

router.post('/', async (req, res) => {
    console.log(colors.bgYellow('Req Object in products api - ', req.body));
    //save this data in database
    



    try{
        const product = new Products({
            productid: req.body.productid,
            productname: req.body.productname,
            price: req.body.price
            // productid: 'test123',
            // productname: 'test product 123',
            // price: 1000
        })
        console.log(product);
        const newProductStatus = await product.save();
        console.log(newProductStatus);
        // res.send('data received from api.')
        res.status(201).json(newProductStatus);
    }
    catch(err){
        res.status(400).json({message: err.message})
    }



})


router.get('/productdetails', (req, res) => {
    res.send('Data from product details');
    console.log(colors.blue('Products details page running...'));
})

router.post('/productdetails', (req, res) => {
    console.log(colors.bgYellow('Req Object in products details api - ', req.body));
    //save this data in database
    res.status(202).json({retId: '123123', addStatus: 'success'});
})


router.get('/productdetails/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Data from product details - ${req.params.id}`);
    console.log(colors.blue('Products details page running...'));
})


module.exports = router;