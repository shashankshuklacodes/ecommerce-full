const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ productId: String, quantity: Number }]
});

module.exports = mongoose.model('Cart', cartSchema);
