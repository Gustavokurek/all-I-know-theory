// for in--> lê indices e chaves de objetos

const Frutas=['maca', 'limão', 'laranja', 'kiwi', 'pera']

for(let Index in Frutas){
    console.log(Frutas[Index],`Index nº ${Index}`)

}

const Pessoas={
    nome: 'Gustavo',
    sobrenome: 'Kurek',
    idade: 20
};

for(let chave in Pessoas){
    console.log(chave, Pessoas[chave])
}