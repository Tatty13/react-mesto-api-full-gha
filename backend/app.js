require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const router = require('./routes');
const { PORT, BD_URL, limiter } = require('./utils/config');
const handleError = require('./middlewares/handleError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(BD_URL, {
  useNewUrlParser: true,
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);
app.use(router);
app.use(errorLogger);

/**
 * @todo remove line: router.use(errors())
 * @todo use custom handleError middleware function to catch Joi errors
 */
app.use(errors()); // add line to pass github tests
app.use(handleError);

app.listen(PORT, () => {});
