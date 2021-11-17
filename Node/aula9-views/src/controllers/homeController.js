exports.paginaInicial=(req, res)=>{
    res.render('index')
};

exports.retorno=(req, res)=>{
    res.send("Formulário enviado com sucesso Campeão")
}