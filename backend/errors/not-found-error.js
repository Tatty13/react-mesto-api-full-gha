const CustomError = require('./custom-error');
const { NOT_FOUND_404 } = require('../utils/constants');

class NotFoundError extends CustomError {
  /**
   * @param {String} message - error message
   */
  constructor(message) {
    super(message, NOT_FOUND_404, 'NotFoundError');
  }
}

module.exports = NotFoundError;
