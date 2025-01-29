const mongoose = require('mongoose');
const Product = require('./path/to/productModel');  // Adjust the path to your model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Find products in "Electronics" category with price > 500, sorted by price descending
Product.find({ category: 'Electronics', price: { $gt: 500 } })
    .sort({ price: -1 })  // Sort by price in descending order
    .then((products) => {
        console.log('Products found:', products);
    })
    .catch((err) => {
        console.error('Error fetching products:', err);
    });
