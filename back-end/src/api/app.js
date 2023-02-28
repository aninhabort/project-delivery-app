const express = require('express');

const LoginRouter = require('../routes/login.router');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login',  LoginRouter);

module.exports = app;
