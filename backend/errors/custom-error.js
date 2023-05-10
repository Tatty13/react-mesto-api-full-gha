class CustomError extends Error {
  /**
   * @param {String} message - error message
   * @param {Number} code - error code
   * @param {String} name - error name
   */
  constructor(message, code, name) {
    super(message);
    this.statusCode = code;
    this.name = name;
  }
}

module.exports = CustomError;
