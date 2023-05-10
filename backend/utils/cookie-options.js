const cookieTokenOpt = {
  httpOnly: true,
  sameSite: true,
  maxAge: 3600000 * 24 * 7,
};

module.exports = {
  cookieTokenOpt,
};
