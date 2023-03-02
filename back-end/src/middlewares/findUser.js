const UsersModel = require('../database/models/users');

const findUserByName = async (req, res, next) => {
  const { name, email, password } = req.body;
  const foundUser = await UsersModel.findOne({ where: { name } });

  if (!foundUser) res.status(409).json({ message: 'Conflict' });

  console.log(email, password);
  next();
};

const findUserByEmail = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    await UsersModel.findOne({ where: { email } });
  } catch (err) {
    res.status(409).json({ message: 'Conflict' });
  }
  console.log(password, name);
  next();
};

module.exports = {
  findUserByName,
  findUserByEmail,
};