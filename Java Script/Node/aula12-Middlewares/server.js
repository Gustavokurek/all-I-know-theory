const express= require("express");
const app=express();
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


app.listen(3000, ()=>{
    console.log('http://localhost:3000')
    console.log('servidor executado!!')
});


