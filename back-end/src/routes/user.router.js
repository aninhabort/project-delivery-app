const Router = require('express');

const UserController = require('../controller/user.controller');

const { findUserByName, findUserByEmail } = require('../middlewares/findUser');
const { validateUserRegister } = require('../middlewares/validateUser');

const router = Router();

router.post(
  '/',
  findUserByName,
  findUserByEmail,
  validateUserRegister,
  UserController.registerUser);

module.exports = router;