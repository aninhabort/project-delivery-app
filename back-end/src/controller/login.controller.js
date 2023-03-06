require('dotenv').config();

const { generateToken } = require('../middlewares/auth/jwt');

const loginService = require('../service/login.service');

const findUserByEmail = async (req, res) => {
  const user = req.body;

  const userData = await loginService.findUserByEmail(user);

  if (userData === 'INVALID') {
    return res.status(404).json({ message: 'Not found' });
  }

  const token = await generateToken(userData);

  const response = {
    ...userData,
    token,
  }
  
  delete response.id;

    return res.status(200).json(response);
};

module.exports = { findUserByEmail };
