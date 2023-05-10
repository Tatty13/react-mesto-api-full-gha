const mongoose = require('mongoose');
const validator = require('validator');

const { findUserByCredentials } = require('../utils');
const { urlPattern } = require('../utils/constants');

mongoose.set('toObject', { useProjection: true });
mongoose.set('toJSON', { useProjection: true });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: [2, 'Длина имени не должна быть короче двух символов'],
    maxlength: [30, 'Длина имени не должна превышать 30 символов'],
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlength: [2, 'Длина описания не должна быть короче двух символов'],
    maxlength: [30, 'Длина описания не должна превышать 30 символов'],
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator(value) {
        return urlPattern.test(value);
      },
      message: 'Ссылка не валидна',
    },
  },
  email: {
    type: String,
    required: [true, 'email не указан'],
    unique: [true, 'Пользователь с указанным email уже существует'],
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: 'Некорректный email или пароль',
    },
  },
  password: {
    type: String,
    required: [true, 'Пароль не указан'],
    select: false,
  },
});

userSchema.statics = { findUserByCredentials };

module.exports = mongoose.model('user', userSchema);
