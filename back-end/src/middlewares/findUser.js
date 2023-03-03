const { User } = require('../database/models');

const findUserByName = async (req, res, next) => {
  const { name } = req.body;
  const foundUser = await User.findOne({ where: { name } });

  if (!foundUser) res.status(409).json({ message: 'Conflict' });

  next();
};

const findUserByEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    await User.findOne({ where: { email } });
  } catch (err) {
    res.status(409).json({ message: 'Conflict' });
  }
  next();
};

module.exports = {
  findUserByName,
  findUserByEmail,
};