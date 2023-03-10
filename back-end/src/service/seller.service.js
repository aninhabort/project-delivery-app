const { Sale, Product, SaleProduct } = require('../database/models');

const getSellerOrders = async (sellerId) => Sale.findAll({ where: { sellerId } });

const getOrderDetails = async (id) => Sale.findOne({ where: { id } });

const getSaleProduct = async (saleId) => SaleProduct.findAll({ where: { saleId } });

const getProductByID = async (id) => Product.findOne({ where: { id } });

const modifyOrderStatus = async (status, orderId) => Sale.update(
    { status },
    { where: { orderId } },
);

module.exports = { 
    getSellerOrders,
    getOrderDetails,
    modifyOrderStatus,
    getProductByID,
    getSaleProduct,
 };
