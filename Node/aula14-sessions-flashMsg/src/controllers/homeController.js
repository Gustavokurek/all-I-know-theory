exports.paginaInicial=(req, res, next)=>{
    // criando msg que depois da criação quando elas forem logadas, elas deixam de existir
    //req.flash("Info", 'o mundo vai acabar')
    //req.flash("Info2", 'e ela só quer ...')
    //req.flash("Info3", 'Dançar, dançarn dançar')
    // req.session.user={ nome: "Gustavo"} // CRIANDO DADO NA SESSION
    console.log(req.session.user) // dado salvo que fica no cookie, mesmo apagangando ele vai ficar la
    console.log(req.flash("Info"), req.flash("Info2"), req.flash("Info3")) // ACESSANDO MSG QUE SE AUTO DESTRUIRAM DEPOIS DE EXIBIDAS
    res.render('index') // renderizando o html/ejs
    next() // permitindo a continuida da função
};

exports.trataPost=(req, res, next)=>{
    res.send(req.body)

}

