const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(11).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  role: Joi.string().min(5),
});

module.exports = {
  registerSchema,
};