const Router = require('express');

const SellerController = require('../controller/seller.controller')

const { verifyToken } = require('../middlewares/auth/jwt');

const router = Router();

router.get('/orders',
    verifyToken,
    SellerController.getSellerOrders);

router.get('/orders/:id',
    verifyToken,
    SellerController.getOrderDetails,
);

module.exports = router;
