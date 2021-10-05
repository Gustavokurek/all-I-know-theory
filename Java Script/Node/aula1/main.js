// exportando tudo de uma vez só

const mod1= require('./moduloNode')
console.log(mod1)

console.log(mod1.falanome())

// exportando só alguma coisa em especificp

const falanome=require('./moduloNode').falanome;
console.log(falanome())

// // ou

 const mod1= require('./moduloNode')
 const falaNOme= mod1.falanome;

 // destruturing
 
 const {nome, sobrenome, falanome, Pessoa} = require('./moduloNode')
 const Gu=new Pessoa('Gustavo')
 console.log(Gu)
 console.log(nome, falanome())

 const path= require('path')
 const axios= require('axios')

 axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
 .then(response=> console.log(response))
 