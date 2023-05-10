const bcrypt = require('bcryptjs');

/**
 * @param {String} password
 * @returns {Promise<String>} hash
 */
const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

/**
 * @param {String} password
 * @param {String} hash
 * @returns {Promise<Boolean>}
 */
const checkPassword = async (password, hash) => {
  const isIdentic = await bcrypt.compare(password, hash);
  return isIdentic;
};

module.exports = {
  generateHash,
  checkPassword,
};
