const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  price: Number,
  inStock: Boolean
  
});

module.exports = mongoose.model('Product', productSchema);
