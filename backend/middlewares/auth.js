const AuthError = require('../errors/auth-error');
const { verifyToken } = require('../utils/token');

function auth(req, _, next) {
  const { token } = req.cookies;

  try {
    if (!token) { throw new AuthError('Требуется авторизация'); }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch (err) {
    next(new AuthError('Передан невалидный токен'));
  }
}

module.exports = auth;
