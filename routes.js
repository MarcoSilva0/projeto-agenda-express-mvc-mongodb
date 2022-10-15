const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//Rotas da home
route.get('/', homeController.index);

//Rotas do Login
route.get('/login', loginController.index);


//Exportação de todas as rotas
module.exports = route;