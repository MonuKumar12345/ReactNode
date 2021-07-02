const express = require('express');
const route = express();
const controller = require('./../controller/controller');

route.post('/api/register',controller.register);
route.post('/api/login',controller.login);

module.exports = route;