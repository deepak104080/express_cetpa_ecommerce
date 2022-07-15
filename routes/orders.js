const express = require('express');
const Orders = require('../models/Orders');

const router = express.Router();


router.post('/placeorder', async (req, res) => {
    try{
        const tempOrder = new Orders({
            orderid: parseInt(Math.random()*10000000000),
            username: req.body.username,
            orderdate: (new Date).toLocaleDateString(),
            deliverydate: '',
            amount: req.body.amount,
            mobile: req.body.mobile,
            pincode: req.body.pincode,
            address: req.body.address,
            paymentmode: req.body.paymentmode,
            paymentstatus: false
        })
        const response = await tempOrder.save();
        res.status(201).json(response);
    }
    catch(err) {
        res.status(400).json(err);
    }
})




module.exports = router;
