const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
});

module.exports = model('products', productSchema);
