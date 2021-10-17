exports.paginaInicial=(req, res, next)=>{
    res.render('index', {
        // dados que serão utilizados pelo ejs
        titulo: "Titulo Da <span style='color: red'>pagina</span>",
        numeros: [1,2,3,4,5,6,7]
    }) // renderizando o html/ejs
    next() // permitindo a continuida da função
};

exports.trataPost=(req, res, next)=>{
    res.send(req.body)

}

