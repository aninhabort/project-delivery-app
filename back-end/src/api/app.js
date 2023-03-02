const express = require('express');
const cors = require('cors');

const LoginRouter = require('../routes/login.router');

var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', LoginRouter);

module.exports = app;
