require('dotenv').config();

const CustomerService = require('../service/customer.service');

const getAll = async (_req, res) => {
    const getAllProducts = await CustomerService.getAll();
    return res.status(200).json(getAllProducts);
};

const getOne = async (req, res) => {
    const { id } = req.headers; 
    const getProductToCart = await CustomerService.getOne(id);
    return res.status(200).json(getProductToCart);
};

const checkout = async (req, res) => {
    const shoppingData = req.body;
    const { productList } = shoppingData;
    delete shoppingData.productList;
    const getCheckout = await CustomerService.checkout(shoppingData);
    const orderId = getCheckout.dataValues.id;
    productList.map(
        (newProduct) => CustomerService.createSaleProduct({ ...newProduct, saleId: orderId }),
      );
    return res.status(201).json(orderId);
};

const getCart = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    const getAllProductsCart = await CustomerService.getCart(id);
    // const getAllProductsCart = await CustomerService.getCart();
    return res.status(200).json(getAllProductsCart);
};

module.exports = {
    getAll,
    getOne,
    checkout,
    getCart,
 };
