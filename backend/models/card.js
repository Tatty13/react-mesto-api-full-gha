const mongoose = require('mongoose');

const { urlPattern } = require('../utils/constants');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя карточки не получено'],
    minlength: [2, 'Длина имени не должна быть короче двух символов'],
    maxlength: [30, 'Длина имени не должна превышать 30 символов'],
  },
  link: {
    type: String,
    required: [true, 'Ссылка на картинку не получена'],
    validate: {
      validator(value) {
        return urlPattern.test(value);
      },
      message: 'Ссылка не валидна',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Пользователь не указан'],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
