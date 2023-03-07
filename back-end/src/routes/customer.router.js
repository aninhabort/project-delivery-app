const Router = require('express');
const CustomerController = require('../controller/customer.controller');

const router = Router();

router.get('/products', CustomerController.getAll);

router.get('/products/:id', CustomerController.getOne);

router.post('/checkout', CustomerController.checkout);


module.exports = router;
