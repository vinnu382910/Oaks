const mongoose = require('mongoose');

// Define the schema for the Product
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
    },
    price: {
        type: Number,
        required: true, // Price is required
    },
    category: {
        type: String,
        required: true, // Category is required
    },
    inStock: {
        type: Boolean,
        required: true, // inStock is required
    }
});

// Create the model for Product using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
