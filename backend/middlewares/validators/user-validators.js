const { celebrate, Joi } = require('celebrate');

const { urlPattern } = require('../../utils/constants');

const validateUserId = celebrate({
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
});

const validateUserCredential = celebrate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(urlPattern),
  }),
});

const validateUserInfo = celebrate({
  body: Joi.object({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

const validateUserAvatar = celebrate({
  body: Joi.object({
    avatar: Joi.string().pattern(urlPattern).required(),
  }),
});

module.exports = {
  validateUserId,
  validateUserCredential,
  validateUserInfo,
  validateUserAvatar,
};
