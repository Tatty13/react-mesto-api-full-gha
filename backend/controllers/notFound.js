const NotFoundError = require('../errors/not-found-error');

function handleUnknownRoute(req, res, next) {
  next(new NotFoundError('Страница не найдена'));
}

module.exports = handleUnknownRoute;
