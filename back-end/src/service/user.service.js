const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../middlewares/auth/jwt');

const checkEmailExistence = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  if (checkEmail !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
};

const getUser = async (id) => {
  const infoUser = await User.findOne({ where: { id } });
  return infoUser;
};

const registerUser = async (name, email, password, role) => {
  await checkEmailExistence(email);
  
  const newPassword = md5(password);
  const user = await User.create({ name, email, password: newPassword, role: role || 'customer' });
  
  const { id } = user;

  const token = generateToken(id);

  return token;
};

module.exports = {
  registerUser,
  getUser,
};