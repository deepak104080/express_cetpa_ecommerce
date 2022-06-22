const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const reqFilter = require('./middleware/middleware_age');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

//middleware on all routes
// app.use(reqFilter);
app.use(cors());


app.get('/', (req, res) => {
    res.send('My First Express Page...');
    console.log(colors.red('My First Express Page...'));
    //logger libraries
})


app.get('/about', reqFilter, (req, res) => {
    console.log(colors.red('My About Page...'));
    res.send('<h2>My About Page</h2><h2>My About Page</h2><h2>My About Page</h2><h2>My About Page</h2><h2>My About Page</h2><h2>My About Page</h2>');
})

app.get('/contactdata', reqFilter, (req, res) => {
    console.log(colors.red('My contact data...'));
    const tempObj = {
        name: 'test',
        age: 123,
        status: false
    }
    res.send(tempObj);
    console.log(colors.red('My contact data...'));
    console.log(colors.blue(req.header));
    console.log(colors.blue(res.body));
})


const productsRoute = require('./routes/products');
app.use('/products', productsRoute);


const path = require('path');
const publicPath = path.join(__dirname, 'public' );
app.use(express.static(publicPath));


app.get('/staticpage1', (req, res) => {
    console.log('staticpage1 rendering route...');
    res.sendFile(`${publicPath}/staticpage1.html`)
})




app.set('view engine', 'ejs');

app.get('/ejspage1', (req, res) => {
    const data = {
        name: 'test',
        city: 'testcity',
        pincode: 123123
    }
    //take data from model/database and pass to view
    res.render('ejspage1', {data});
})





app.listen(4000);