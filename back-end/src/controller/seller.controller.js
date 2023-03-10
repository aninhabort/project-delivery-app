require('dotenv').config();

const SellerService = require('../service/seller.service');
const userService = require('../service/user.service');

const getSellerOrders = async (req, res) => {
    const { id: sellerId } = req.headers;
    const getOrders = await SellerService.getSellerOrders(sellerId);
    res.status(201).json(getOrders);
};

const getOrderDetails = async (req, res) => {
    const orderDetails = await SellerService.getOrderDetails(req.headers.id);
    const saleProduct = await SellerService.getSaleProduct(orderDetails.id);
    const getSellerName = await userService.getUser(orderDetails.sellerId);
    const productResult = await Promise.all(saleProduct
        .map((product) => SellerService.getProductByID(product.productId)));
    const obj = productResult.map((product) => (
        {
            sellerName: getSellerName.name,
            productId: product.id,
            productName: product.name,
            productPrice: product.price,
            saleDate: orderDetails.saleDate,
            status: orderDetails.status,
            totalPrice: orderDetails.totalPrice,
            quantity: saleProduct.filter((sale) => sale.productId === product.id)[0].quantity,
        }));
    res.status(201).json(obj);
};

const modifyOrderStatus = async (req, res) => {
    const { status } = req.headers;
    // const { id } = req.params;
    // const updateStatus = await SellerService.modifyOrderStatus(status, id);
    res.status(201).json(status);
};

module.exports = {
    getSellerOrders,
    getOrderDetails,
    modifyOrderStatus,
 };