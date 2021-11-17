const express = require('express');
const route= express.Router();

const homeController=require('./src/controllers/homeController')
const contatoController=require('./src/controllers/contato.controller')
route.get('/', homeController.paginaInicial)
route.post('/', homeController.retorno)
route.get('/contato', contatoController.informaçõesContato)


module.exports=route;
