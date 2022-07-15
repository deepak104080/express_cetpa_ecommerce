const { json } = require('body-parser');
const { application } = require('express');
const express = require('express');
const Users = require('../models/Users');


const router = express.Router();





router.get('/', async (req, res) => {
    try{
        console.log('to fetch the list of all users');
        const response = await Users.find();
        console.log(response);
        res.status(200).json(response);
    }
    catch(err){
        res.status(400).json(err);
    }
})


router.post('/login', async (req, res) => {
    try {
        console.log('api for login');
        const tempUsername = req.body.username;
        const tempPassword = req.body.password;
        const response = await Users.find({username: tempUsername, password: tempPassword});
        console.log(response);
        if(response.length == 0) {
            res.status(422).json({message: 'User Not Found'})
        }
        else if(response.length == 1) {
            //allow login
            //session//jwt - rest
            res.status(200).json(response);
        }
        else{
            res.status(400).json({message: 'Duplicate User'})
        }
    }
    catch(err){
        res.status(400).json(err);
    }
})



router.post('/adduser', async(req, res) => {
    console.log('inside user add api')
    try{
        const user = new Users({
            userid: parseInt(Math.random()*100000000),
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password
        })
        const response = await user.save();
        console.log(response);
        res.status(201).json(response);
    }
    catch(err){
        res.status(400),json({message: err.message})
    }
    
})




module.exports = router;