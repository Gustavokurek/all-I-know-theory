const express = require('express');
const route= express.Router();
const {paginaInicial, trataPost}=require('./src/controllers/homeController')

// importando middleware
const {middleware}=require('./src/middlewares/middleware')

//usando sem esquecer do parametro next se eu for quiser chamar alguma coisa antes ou depois, independente se for mid ou não
route.get('/', middleware ,paginaInicial)

route.get('/1', middleware, paginaInicial, function (req, res, next){
    // parametro de middlewares passam até encerar o ciclo, posso acessar o parametro de outro middlware ex abaixo
    console.log(req.session.nome) // acessando parametros do middleware inicial 
    next()
    })

route.post('/', trataPost)    




module.exports=route;
