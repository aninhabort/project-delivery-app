require('dotenv').config();
const loginService = require('../service/login.service');

const findUserByEmail = async (req, res) => {
  const user = req.body;

  const userData = await loginService.findUserByEmail(user);

  if (userData === 'INVALID') {
    return res.status(404).json({ message: 'Not found'});
  }

  return res.status(200).json(userData);
}

module.exports = { findUserByEmail };
