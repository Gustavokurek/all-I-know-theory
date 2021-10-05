const nome= 'gustavo'
const sobrenome= 'Kurek'

const falanome=()=> nome + '' + sobrenome;

class Pessoa{
    constructor(nome){
        this.nome=nome;
    }
}

// maneiras exportar 

module.exports.nome=nome
module.exports.sobrenome=sobrenome
module.exports.falanome=falanome;

// usando o atalho
exports.Pessoa=Pessoa;
exports.nome=nome;
exports.sobrenome=sobrenome;
exports.falanome=falanome;
this.qualquer= 'qulaquer'

// sobrescrevendo, só pode usar escrevendo module, sobrescrevendo com uma nova chave
module.exports={
    nome, sobrenome, Pessoa
}
