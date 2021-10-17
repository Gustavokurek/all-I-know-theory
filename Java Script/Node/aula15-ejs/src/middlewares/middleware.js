// mddls recebem next como parametro tbm, se não terminam

exports.middleware= (req, res, next)=>{
    // parametros passam como se fosse corrente até o termino do comando
    next() // usado para dar continuidade num possivel próxima função 
    }
    

    exports.middlewareGlobal=(req, res, next)=>{
        res.locals.VariavelLocal= 'passo por tudo bebe'
        next()
    }