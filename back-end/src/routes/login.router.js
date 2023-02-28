const Router = require('express');
const LoginController = require('../controller/login.controller');

const router = Router();

router.post('/', LoginController.findUserByEmail);

module.exports = router;
