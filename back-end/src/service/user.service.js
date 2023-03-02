const { User } = require('../database/models');

const registerUser = async (name, email, password) => User.create({ name, email, password });

module.exports = { registerUser };