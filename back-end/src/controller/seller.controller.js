require('dotenv').config();

const SellerService = require('../service/seller.service');

const getSellerOrders = async (req, res) => {
    const { id: sellerId } = req.headers;
    const getOrders = await SellerService.getSellerOrders(sellerId);
    res.status(201).json(getOrders);
};

const getOrderDetails = async (req, res) => {
    const { orderId } = req.headers;
    const getOrderDetails = await SellerService.getOrderDetails(orderId);
    res.status(201).json(getOrderDetails);
}

module.exports = {
    getSellerOrders,
    getOrderDetails,
 };