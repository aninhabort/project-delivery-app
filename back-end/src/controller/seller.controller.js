require('dotenv').config();

const SellerService = require('../service/seller.service');

const getSellerOrders = async (req, res) => {
    const { id: sellerId } = req.headers;
    const getOrders = await SellerService.getSellerOrders(sellerId);
    res.status(201).json(getOrders);
};

const getOrderDetails = async (req, res) => {
    const { orderId } = req.headers;
    const orderDetails = await SellerService.getOrderDetails(orderId);
    res.status(201).json(orderDetails);
};

const modifyOrderStatus = async (req, res) => {
    const { status, orderId } = req.headers;
    const updateStatus = await SellerService.modifyOrderStatus(status, orderId);
    res.status(201).json(updateStatus);
};

module.exports = {
    getSellerOrders,
    getOrderDetails,
    modifyOrderStatus,
 };