require('dotenv').config();

const userService = require('../service/user.service');

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await userService.registerUser(name, email, password, role);
    return res.status(201).json({ message: newUser });
  } catch (error) {
    if (error.message === 'User already registered') {
      return res.status(409).json({ message: error.message });
    }
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { registerUser };