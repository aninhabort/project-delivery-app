const Joi = require('joi');

registerSchema = Joi.object({
  name: Joi.string().max(11).required(),
  email: Joi.string().email().required(),
  password: Joi.string().max(5).required(),
});

module.exports = {
  registerSchema,
}