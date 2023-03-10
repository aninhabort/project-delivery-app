require('dotenv').config();

const SellerService = require('../service/seller.service');

const getSellerOrders = async (req, res) => {
    const { id: sellerId } = req.headers;
    const getOrders = await SellerService.getSellerOrders(sellerId);
    res.status(201).json(getOrders);
};

const getOrderDetails = async (req, res) => {
    const { id } = req.headers;
    const orderDetails = await SellerService.getOrderDetails(id);
    const saleProduct = await SellerService.getSaleProduct(orderDetails.id);
    const productResult = await Promise.all(saleProduct
        .map((product) => SellerService.getProductByID(product.productId)));
    const obj = productResult.map((product) => (
        {
            productId: product.id,
            productName: product.name,
            productPrice: product.price,
            saleDate: orderDetails.saleDate,
            status: orderDetails.status,
            totalPrice: orderDetails.totalPrice,
        }
    ));
    console.log(obj);
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