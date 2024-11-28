const Product = require("../models/product.model")

const addProducts = async (req, res) => {
    const { productName, price, productImage, productType, productDescription } = req.body

    // Validate required fields
    if (!productName || !price || !req.file || !productType || !productDescription) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Validate price
    if (price < 0) {
        return res.status(400).json({ message: 'Invalid Price' })
    }

    // validateProduct
    const allowedProducts = ["electronics", "furniture", "clothing", "grocery"];
    if (!allowedProducts.includes(productType)) {
        return res.status(400).json({ message: "Invalid product type" });
    }

    const product = await Product.create({
        productName,
        price,
        productImage: `/uploads/${req.file.filename}`,
        productType,
        productDescription
    })

    return res.status(201).json({
        success: true,
        message: 'Product created Successfully'
    })
}

module.exports = {
    addProducts
}