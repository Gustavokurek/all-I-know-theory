const express = require('express');
const route= express.Router();

const homeController=require('./src/controllers/homeController')
route.get('/', homeController.paginaInicial)
route.get('/1', homeController.paginaInicial)


module.exports=route;
