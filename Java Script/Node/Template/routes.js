const express = require('express');
const route= express.Router();
const homeController=require('./src/controllers/homeController')

// importando middleware
const {middleware}=require('./src/middlewares/middleware')

route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)    




module.exports=route;
