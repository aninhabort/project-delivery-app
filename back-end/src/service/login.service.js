const { User } = require('../database/models');
const md5 = require('md5');

const findUserByEmail = async (user) => {
  const newPassword = md5(user.password);
  const findUser = await User.findOne({ where: { email: user.email, password: newPassword } });

  if (!findUser) return 'INVALID';

  const { password: _, ...userWithoutPassword } = findUser.dataValues;

  return userWithoutPassword;
};

module.exports = { findUserByEmail };
