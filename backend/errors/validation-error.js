const CustomError = require('./custom-error');
const { BAD_REQUEST_400 } = require('../utils/constants');

class ValidationError extends CustomError {
  constructor(message) {
    super(message, BAD_REQUEST_400, 'ValidationError');
  }
}

module.exports = ValidationError;
