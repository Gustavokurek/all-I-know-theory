// retorne a soma dos dobros de todos os pares

const numeros=[15,156,25,89,45,6,58,45,12,55,69,87,88,24,56]

// const resultado=numeros.filter(v=> v%2===0).map(v=> v*2).reduce((ac, v)=> ac+ v) 
const resultadoOficial= 55;
const resultado1=numeros.filter(v=> v===resultadoOficial).map(v=> `${v} Canditado Ganhador`)

 
 //console.log(resultado1)



const pessoas=[
    {Numero:1, nome: 'Gustavo', idade: 20 },
    {Numero:2, nome: 'Guilherme', idade: 14 },
    {Numero:3, nome: 'Alicia', idade: 7 },
    {Numero:4, nome: 'Eliana', idade: 38 },
    {Numero:5, nome: 'Matheus', idade: 21 }
]
 
const resultadoOficial2= 5;

const filtro=(Numero)=>  pessoas.filter(v=> v.Numero===Numero).map(v=> v.nome)


const resultado4=filtro(resultadoOficial2)
console.log(resultado4)