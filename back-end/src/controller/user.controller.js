require('dotenv').config();

const userService = require('../service/user.service');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await userService.registerUser(name, email, password);
  return res.status(201).json({message: newUser });
}

module.exports = { registerUser };