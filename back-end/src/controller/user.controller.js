require('dotenv').config();

const userService = require('../service/user.service');

const registerUser = async (req, res) => {
  const roleUser = 'customer';
  try {
    const { name, email, password } = req.body;
    let { role } = req.body;
    if (!role) role = roleUser;
    const token = await userService.registerUser(name, email, password, role);
    return res.status(201).json({ name, email, role, token });
  } catch (error) {
    if (error.message === 'User already registered') {
      return res.status(409).json({ message: error.message });
    }
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { registerUser };