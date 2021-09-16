// map sempre retorna um array, com a mesma quantidade de elementos, não altera o array, mas altera os elementos

const numeros=[15,156,25,89,45,6,58,45,12,69,87]
const NumerosDobrados=numeros.map(valor=> valor * 2 )

//  console.log(NumerosDobrados)

const pessoas=[
    {nome: 'Gustavo', idade: 20 },
    {nome: 'Guilherme', idade: 14 },
    {nome: 'Alicia', idade: 7 },
    {nome: 'Eliana', idade: 38 },
    {nome: 'Matheus', idade: 21 }
]

// retorna uma string com o nome da pessoa

const nomeDasPessoas=pessoas.map(obj=> obj.nome)
console.log(nomeDasPessoas)


// remover chave nome e retornar ou retornar apenas um objeto com a idade:


 const Idades=pessoas.map(obj=> ({idade: obj.idade}));
//     const Idades=pessoas.map(obj=> {
//     const obj1={...obj}
//     delete obj1.nome;
//     return obj1
// })


//  console.log(Idades)
//  console.log(pessoas)

// adicionar chave id dentro do obj

const addChave=pessoas.map((obj, indice)=>{
    const obj1={...obj}
    obj1.id= indice;
    return obj1;

})

// console.log(addChave)
// console.log(pessoas)



