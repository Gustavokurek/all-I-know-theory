exports.paginaInicial=(req, res, next)=>{
    res.render('index') // renderizando o html/ejs
    next() // permitindo a continuida da função
};

exports.trataPost=(req, res, next)=>{
    res.send(req.body)

}

