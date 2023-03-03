const Router = require('express');

const UserController = require('../controller/user.controller');

const { findUserByName, findUserByEmail } = require('../middlewares/findUser');
const { validateUserRegister } = require('../middlewares/validateUser');

const router = Router();

router.post(
  '/',
  validateUserRegister,
  UserController.registerUser,
  findUserByName,
  findUserByEmail,
);

module.exports = router;