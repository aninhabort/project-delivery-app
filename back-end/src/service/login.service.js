const { User } = require('../database/models');

const findUserByEmail = async (user) => {
  const findUser = await User.findOne({ where: { email: user.email } });

  if (!findUser || findUser.password !== user.password) return 'INVALID';

  const { password: _, ...userWithoutPassword } = findUser.dataValues;

  return userWithoutPassword;
};

module.exports = { findUserByEmail };
