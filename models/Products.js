const mongoose = require('mongoose');
// ORM - Object Relational Model



const ProductsSchema = mongoose.Schema({
    productid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    productname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', ProductsSchema);