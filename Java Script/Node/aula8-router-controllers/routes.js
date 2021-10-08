const express = require('express');
const route= express.Router();

const homeController=require('./controllers/homeController')
const contatoController=require('./controllers/contato.controller')
route.get('/', homeController.paginaInicial)
route.post('/', homeController.retorno)
route.get('/contato', contatoController.informaçõesContato)


module.exports=route;
console.log(module.exports)