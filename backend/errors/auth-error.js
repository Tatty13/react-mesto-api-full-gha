const CustomError = require('./custom-error');
const { UNAUTHORIZED_401 } = require('../utils/constants');

class AuthError extends CustomError {
  constructor(message) {
    super(message, UNAUTHORIZED_401, 'AuthError');
  }
}

module.exports = AuthError;
