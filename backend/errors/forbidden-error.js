const { FORBIDDEN_403 } = require('../utils/constants');
const CustomError = require('./custom-error');

class ForbiddenError extends CustomError {
  constructor(message) {
    super(message, FORBIDDEN_403, ForbiddenError);
  }
}

module.exports = ForbiddenError;
