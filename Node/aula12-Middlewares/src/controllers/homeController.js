exports.paginaInicial=(req, res, next)=>{
    res.render('index')
    next() // permitindo a continuida da função
};

exports.trataPost=(req, res, next)=>{
    res.send(req.body)

}

