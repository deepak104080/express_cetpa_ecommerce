const express = require('express');

const router = express.Router();

var colors = require('colors');


router.get('/', (req, res) => {
    res.send('Data from products');
    console.log(colors.blue('Products page running...'));
})

router.post('/', (req, res) => {
    console.log(colors.bgYellow('Req Object in products api - ', req.body));
    //save this data in database
    res.send('data received from api.')
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