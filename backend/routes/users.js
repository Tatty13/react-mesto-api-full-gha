const usersRouter = require('express').Router();
const {
  getUsers, getUserById, getUser, updateUser, updateAvatar,
} = require('../controllers/users');

const { validateUserId, validateUserInfo, validateUserAvatar } = require('../middlewares/validators/user-validators');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getUser);
usersRouter.get('/:id', validateUserId, getUserById);
usersRouter.patch('/me', validateUserInfo, updateUser);
usersRouter.patch('/me/avatar', validateUserAvatar, updateAvatar);

module.exports = usersRouter;
