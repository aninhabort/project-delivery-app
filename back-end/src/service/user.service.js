const md5 = require('md5');
const { User } = require('../database/models');

const registerUser = async (name, email, password) => {
  const newPassword = md5(password);
  const user = await User.create({ name, email, password: newPassword });
  return user;
};

module.exports = { registerUser };