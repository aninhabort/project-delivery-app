require('dotenv').config();

const { registerSchema } = require('./schema/schema');

const validateUserRegister = async (req, res, next) => {
  const newUserData = req.body;
  const user = registerSchema.validate(newUserData);

  if (user.error) {
    const { message } = user.error.details[0];
    return res.status(400).json({ message });
  }

  // console.log(newUserData);
  console.log(registerSchema.validate(newUserData).error);
  next();
};

module.exports = {
  validateUserRegister,
};