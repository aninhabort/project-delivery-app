require('dotenv').config();

const { registerSchema } = require('./schema/schema');

const validateUserRegister = async (req, res, next) => {
  const newUserData = req.body;

  try {
    registerSchema.validate(newUserData);
  } catch (err) {
    const { message } = err.details[0];
    res.status(400).json({ message });
  }
  next();
};

module.exports = {
  validateUserRegister,
};