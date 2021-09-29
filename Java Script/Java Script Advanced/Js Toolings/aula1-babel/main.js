// comando para att bundle.js npx babel main.js -o bundle.js --presets=@babel/env
// ou npm  run babel

const nome= 'gustavo';
const pbj= { nome}
const noboObj= [...pbj]

console.log(noboObj)

class Pessoa{
    constructor(nome, sobrenome){
        this.nome= nome;
        this.sobrenome=sobrenome;
    }
}