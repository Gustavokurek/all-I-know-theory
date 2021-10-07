const express= require("express");
const app=express();

// CRUD -> CREATE, READ, Update, Delete
        // POST     get   put      deletar 

       // htpp://meusite.com/ => GET = entrague a pagina /
       // htpp://meusite.com/sobre => GET = entrague a pagina /sobre
       // htpp://meusite.com/mapas => GET = entrague a pagina /mapas


app.get('/helloWorld', (req, res)=>{
    res.send('HELLO World')
});

app.get('/sobre', (req, res)=>{
    res.send('tchubiraunanuaua')
});

app.get('/', (req, res)=>{
    res.send(
        `<form action="/" method="POST">
            nome: <input type='text', name= "nome" >
            <button> enviar </button>
            </form>
        `
    )
});

app.post("/", (req, res)=>{
    res.send('formulário recebido my darlin ')
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
    console.log('servidor executando??????')
});


//Ativar WSL2 no Windows - 
// https://youtu.be/05YN8F8ajBcConfigurar 
//ZSH e Oh My ZSH no Windows - https://youtu.be/y-w-gamp4U0