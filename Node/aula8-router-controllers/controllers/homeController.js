exports.paginaInicial=(req, res)=>{
    res.send(
        `<form action="/" method="POST">
            nome: <input type='text', name= "nome" >
            idade: <input type='text', name= "idade" >
            <button> enviar formulário</button>
            </form>
        `
    )
};

exports.retorno=(req, res)=>{
    res.send("Formulário enviado com sucesso Campeão")
}