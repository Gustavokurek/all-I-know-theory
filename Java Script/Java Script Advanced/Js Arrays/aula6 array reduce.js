// reduce altera o tamanho do array, tem um acumulador e sempre retorna o valor acumulado

const numeros=[15,156,25,89,45,6,58,45,12,69,87]


const soma=numeros.reduce((a,v)=> a+v)

console.log(soma)

const somaPares=numeros.reduce((a,v)=>{
if(v%2===0) a+=v
return a 
},0)

// console.log(somaPares)





// usando com função de filter

const pares=numeros.reduce((a,v)=>{
    if(v%2!==0) a.push(v)
    return a

},[])

// console.log(pares)


// usando com função de map

const dobrados=numeros.reduce((a,v)=>{
    a.push(v*2)
    return a
},[])

// console.log(dobrados);



const pessoas=[
    {nome: 'Gustavo', idade: 20 },
    {nome: 'Guilherme', idade: 14 },
    {nome: 'Alicia', idade: 7 },
    {nome: 'Eliana', idade: 38 },
    {nome: 'Matheus', idade: 21 }
]

const MaisVeia=pessoas.reduce((a,v)=>{
 if (a.idade>v.idade) return a
 return v
})

// console.log(MaisVeia)