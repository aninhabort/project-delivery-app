const md5 = require('md5');
const { User } = require('../database/models');

const checkEmailExistence = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  if (checkEmail !== null) {
    const message = 'User already registered';
    throw new Error(message);
  }
};

const registerUser = async (name, email, password, role) => {
  await checkEmailExistence(email);
  
  const newPassword = md5(password);
  const user = await User.create({ name, email, password: newPassword, role: role || 'customer' });
  return user;
};

module.exports = { registerUser };