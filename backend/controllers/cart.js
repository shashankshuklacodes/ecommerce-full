const Cart = require('../models/Cart');

exports.get = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  res.json(cart || { products: [] });
};

exports.add = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user._id });
  if (!cart) cart = new Cart({ userId: req.user._id, products: [] });

  const item = cart.products.find(p => p.productId === req.body.productId);
  if (item) item.quantity += req.body.quantity;
  else cart.products.push(req.body);

  await cart.save();
  res.json(cart);
};

exports.remove = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  cart.products = cart.products.filter(p => p.productId !== req.params.productId);
  await cart.save();
  res.json(cart);
};
