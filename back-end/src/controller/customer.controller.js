require('dotenv').config();

const CustomerService = require('../service/customer.service');

const getAll = async (req, res) => {
    const getAllProducts = await CustomerService.getAll();
    return res.status(200).json(getAllProducts);
};
// 

module.exports = { getAll };
