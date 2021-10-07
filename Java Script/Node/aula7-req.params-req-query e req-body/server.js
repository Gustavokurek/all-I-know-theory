const express= require("express");
const app=express();


// exemplo:   params
// gmail.com/213154654?campanha=google.ads&jogo=got
                //usar '?' quando for iniciar uma queryStrings,& quando precisar add mais


// permitindo req.body guardar informções
app.use(express.urlencoded({extended:true}))                

app.get('/', (req, res)=>{
    res.send(
        `<form action="/" method="POST">
            nome: <input type='text', name= "nome" >
            idade: <input type='text', name= "idade" >
            <button> enviar formulário</button>
            </form>
        `
    )
});

// acessando parametros
app.get("/testes/:ID?/:ID2?", (req, res)=>{
    console.log(req.params)
    // acessando querry string 
    console.log(req.query)
    res.send(req.query)
});

app.post("/", (req, res)=>{
    console.log(req.body)                    // nome vem de name no input   
    res.send(`formulário recebido ${req.body.nome}  ${req.body.idade}`)
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
    console.log('servidor executado!!')
});


