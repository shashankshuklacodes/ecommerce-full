const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const newUser = await new User(req.body).save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  res.json({ user: newUser, token });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !(await user.compare(req.body.password)))
    return res.status(400).json("Invalid credentials");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ user, token });
};
