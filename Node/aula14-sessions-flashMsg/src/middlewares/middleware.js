// mddls recebem next como parametro tbm, se não terminam

exports.middleware= (req, res, next)=>{
    // parametros passam como se fosse corrente até o termino do comando
    next() // usado para dar continuidade num possivel próxima função 
    }
    

    exports.middlewareGlobal=(req, res, next)=>{
        console.log('passando ...  passando')
        // pegando informação para tratar alguma coisa
        if(req.body.nome){
            console.log('tem uma nome aqui mano' + `${req.body.nome} que nomão hein parabens patrão` )
        }
        next()
    }