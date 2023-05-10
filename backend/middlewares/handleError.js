const mongooseError = require('mongoose').Error;
// const { isCelebrateError } = require('celebrate');

const CustomError = require('../errors/custom-error');

const {
  BAD_REQUEST_400,
  CONFLICT_409,
  INTERNAL_SERVER_ERROR_500,
} = require('../utils/constants');

/**
 * @param {Object} err - Error
 * @param {*} req - Request
 * @param {Object} res - Responce
 * @param {Function} next
 * @returns
 */
function handleError(err, req, res, next) {
  // не удаляю, т.к. планирую использовать этот обработчик вместо стандартного errors()
  // if (isCelebrateError(err)) {
  //   const [errData] = err.details.values().next().value.details;
  //   res.status(BAD_REQUEST_400).send({ message: errData.message });
  //   return;
  // }

  if (err instanceof mongooseError.ValidationError) {
    const errMessage = Object.values(err.errors).map((e) => e.message).join('. ');
    const resMessage = { message: errMessage };
    res.status(BAD_REQUEST_400).send(resMessage);
    return;
  }

  if (err instanceof mongooseError.CastError) {
    const errMessage = `"${err.value}" incorrect. ${err.reason.message}`;
    const resMessage = { message: errMessage };
    res.status(BAD_REQUEST_400).send(resMessage);
    return;
  }

  if (err.code === 11000) {
    res.status(CONFLICT_409).send({ message: 'Пользователь с указанным email уже существует' });
    return;
  }

  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ message: err.message });
    return;
  }

  res.status(INTERNAL_SERVER_ERROR_500).send({ message: 'На сервере произошла ошибка' });
  next();
}

module.exports = handleError;
