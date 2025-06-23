const Product = require('../models/Product');

exports.getAll = async (_, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.create = async (req, res) => {
  const product = await new Product(req.body).save();
  res.status(201).json(product);
};

exports.update = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
