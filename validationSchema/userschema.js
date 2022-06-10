const Joi = require("@hapi/joi");

const userSchema = Joi.object({
  username: Joi.string().min(3).max(12).lowercase().required(),
  email: Joi.string().email().min(5).max(50).lowercase().required(),
  password: Joi.string().required(),
  userType: Joi.required().valid("client", "employee"),
});

module.exports = {
  userSchema,
};
