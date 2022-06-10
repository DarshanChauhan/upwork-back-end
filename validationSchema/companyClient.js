const Joi = require("@hapi/joi");

const companyClient = Joi.object({
  companyName: Joi.required(),
  companyLocation: Joi.required(),
});

module.exports = {
  companyClient,
};
