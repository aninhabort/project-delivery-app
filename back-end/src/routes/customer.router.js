const Router = require('express');
const CustomerController = require('../controller/customer.controller');

const { verifyToken } = require('../middlewares/auth/jwt');

const router = Router();

router.get('/products', CustomerController.getAll);

router.get('/products/:id', CustomerController.getOne);

router.post('/checkout',
    verifyToken,
    CustomerController.checkout);

module.exports = router;
