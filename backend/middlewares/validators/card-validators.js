const { celebrate, Joi } = require('celebrate');

const { urlPattern } = require('../../utils/constants');

const validateCardData = celebrate({
  body: Joi.object({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().pattern(urlPattern).required(),
  }),
});

const validateCardId = celebrate({
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  validateCardData,
  validateCardId,
};
