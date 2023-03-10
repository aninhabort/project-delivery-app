const { Product, Sale, SaleProduct } = require('../database/models');

const getAll = async () => Product.findAll();

const getOne = async (id) => Product.findOne({ where: { id } });

const checkout = async (shoppingData) => Sale.create(shoppingData);

const createSaleProduct = async ({ saleId, productId, quantity }) => SaleProduct
.create({ saleId, productId, quantity });

const getCustomerOrders = async (userId) => Sale.findAll({ where: { userId } });

const getOrder = async (saleId) => SaleProduct.findAll({ where: { saleId } })

const modifyOrderStatus = async (status, orderId) => Sale.update(
  { status: 'Entregue' },
  { where: { orderId } },
);

module.exports = { 
  getAll,
  getOne,
  checkout,
  createSaleProduct,
  getCustomerOrders,
  modifyOrderStatus,
  getOrder,
 };
