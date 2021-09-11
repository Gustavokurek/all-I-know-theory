const pessoas={
    nome: 'Gustavo',
    sobrenome: 'Kurek',
    idade: 20,
    Endereco: {
        rua: 'rua Ivai',
        numero: 110
    }
};

const {nome, sobrenome, Endereco:{rua:r}}=pessoas;

console.log(nome, sobrenome, r)