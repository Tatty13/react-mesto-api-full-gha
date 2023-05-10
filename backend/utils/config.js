const rateLimit = require('express-rate-limit');

const {
  PORT = 3000,
  BD_URL = 'mongodb://127.0.0.1:27017/mestodb',
  JWT_SECRET = '8e141d9f4d0c469ab5b5f922c1b100ea',
} = process.env;

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
});

module.exports = {
  PORT,
  BD_URL,
  JWT_SECRET,
  limiter,
};
