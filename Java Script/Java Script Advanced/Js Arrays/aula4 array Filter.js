// filter sempre retorna um array, com a mesma quantidade de elementos ou menos

const numeros=[15,156,25,89,45,6,58,45,12,69,87]
const numerosFiltrados=numeros.filter(valor=> valor%5===0);
// console.log(numerosFiltrados)

const pessoas=[
    {nome: 'Gustavo', idade: 20, },
    {nome: 'Guilherme', idade: 14, },
    {nome: 'Alicia', idade: 7, },
    {nome: 'Eliana', idade: 38, },
    {nome: 'Matheus', idade: 21, }
]

// busca em numero de letras

const numeroDeLetras=pessoas.filter(obj=> obj.nome.length>7)
// console.log(numeroDeLetras)

// busca em idade

const Idades=pessoas.filter(obj=> obj.idade<17)
// console.log(Idades)

// busca pela ultima letra

const ultimaLetra=pessoas.filter(obj=> obj.nome.endsWith('a') || obj.nome.endsWith('o'));
console.log(ultimaLetra)



