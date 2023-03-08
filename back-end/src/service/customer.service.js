const { Product, Sale, SaleProduct } = require('../database/models');

const getAll = async () => Product.findAll();

// pega um produto apenas (conectar com a função de adicionar ao carrinho)

const getOne = async (id) => Product.findOne({ where: { id } });

const checkout = async (shoppingData) => Sale.create(shoppingData);

const createSaleProduct = async ({ saleId, productId, quantity }) => SaleProduct
.create({ saleId, productId, quantity });

const getCustomerOrders = async (userId) => Sale.findAll({ where: { userId } });

module.exports = { 
  getAll,
  getOne,
  checkout,
  createSaleProduct,
  getCustomerOrders,
 };
