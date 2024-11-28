const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        enum: ["electronics", "furniture", "clothing", "grocery"],
        required: true
    },
    productDescription: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Product = model('Product', productSchema)

module.exports = Product