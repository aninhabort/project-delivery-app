const { Sale } = require('../database/models');


const getSellerOrders = async (sellerId) => Sale.findAll({ where: { sellerId } });

const getOrderDetails = async (orderId) => Sale.findOne({ where: { orderId }});

const modifyOrderStatus = async (status, orderId) => Sale.update(
    { status },
    { where: { orderId }});

module.exports = { 
    getSellerOrders,
    getOrderDetails,
    modifyOrderStatus,
 };
