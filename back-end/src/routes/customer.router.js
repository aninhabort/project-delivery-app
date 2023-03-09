const Router = require('express');
const CustomerController = require('../controller/customer.controller');

const { verifyToken } = require('../middlewares/auth/jwt');

const router = Router();

router.get(
    '/products',
    CustomerController.getAll,
);

router.get(
    '/products/:id',
    CustomerController.getOne,
);

router.post(
    '/checkout',
    verifyToken,
    CustomerController.checkout,
);

router.get(
    '/orders',
    verifyToken,
    CustomerController.getCustumerOrders,
);

router.patch(
    '/orders/:id',
    verifyToken,
    CustomerController.modifyOrderStatus,
);

router.get('/orders/:id',
    CustomerController.getOrder);    

module.exports = router;
