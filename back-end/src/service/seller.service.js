const { Sale } = require('../database/models');


const getSellerOrders = async (sellerId) => Sale.findAll({ where: { sellerId } });

const getOrderDetails = async (orderId) => Sale.findOne({ where: { orderId }});

const orderStatus = async (status, orderId) => Sale.update(
    { status },
    { where: { orderId }});

module.exports = { 
    getSellerOrders,
    getOrderDetails,
 };
