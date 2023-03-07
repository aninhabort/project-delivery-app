const { Product, Sale } = require('../database/models');

const getAll = async () => Product.findAll();

// pega um produto apenas (conectar com a função de adicionar ao carrinho)

const getOne = async (id) => Product.findOne({ where: { id } });

const checkout = async (shoppingData) => Sale.create(shoppingData);

module.exports = { 
  getAll,
  getOne,
  checkout,
 };
