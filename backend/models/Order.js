const mongoose = require('mongoose');

const order = new mongoose.Schema(
    {
        productName: String,
        productBrand: String,
        productPrice: Number,
        productRating: Number,
        productDescription:String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('order', order)