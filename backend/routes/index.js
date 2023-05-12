const router = require('express').Router();

const usersRouter = require('./users');
const cardsRouter = require('./cards');

const handleUnknownRoute = require('../controllers/notFound');
const auth = require('../middlewares/auth');
const { validateUserCredential } = require('../middlewares/validators/user-validators');

const { login, createUser, logout } = require('../controllers/users');

/* ----------- crash-test -------------*/
router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
/*-------------------------------------*/

router.post('/signin', validateUserCredential, login);
router.post('/signup', validateUserCredential, createUser);
router.post('/signout', auth, logout);

router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);
router.use('*', auth, handleUnknownRoute);

module.exports = router;
