require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'senha';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '30d',
};

const generateToken = (user) => jwt.sign({ data: user }, secret, jwtConfig);

const verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { 
  generateToken, 
  verifyToken,
};