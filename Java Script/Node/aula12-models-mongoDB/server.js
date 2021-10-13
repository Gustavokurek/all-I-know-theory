//  import do dotenv 
require('dotenv').config();

const express= require("express");
const app=express();
const mongoose=require('mongoose');

// usando dotenv para não mostrar nossa url que contem nossos dados de acesso
mongoose.connect(process.env.connectionString) // isso retorna uma promisse
.then(()=>{
    // emitindo sinal para que o servidor só comecer a rodar dps da bd carregar
    console.log('conectei pohaaaaaaaaa')
    app.emit('Pronto')
})
.catch(e=> console.log(e))

const routes= require('./routes')
const path= require('path')
// importanto middleware
const {middlewareGlobal}=require("./src/middlewares/middleware")


app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve( __dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// usando middleware fazendo com que ele passe por cada requisição*
app.use(middlewareGlobal)
app.use(routes);

// ouvindo sinal para só depois executar o servidor
app.on('Pronto', ()=>{app.listen(3000, ()=>{
    console.log('http://localhost:3000')
    console.log('servidor executado!!')
}) });




