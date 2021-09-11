// arguments mostra todos dos paramentros na função
function seila(){
let total=0
for(let argument of arguments){
    total+=argument;
} return console.log(total)
}

// seila(1,1,1,12,3,12,31,231,23,231321,1,21,2)

function soma(a,b=12, c){
    console.log(a+b+c)
}

// soma(1, undefined ,55)

function infosObj({nome, idade, hobby}){ 
    console.log(`${nome}, tenho ${idade} anos, meu hobby é ${hobby}`)
}
const infos={ 
    nome: "Gustavo Kurek", idade: 20, hobby: 'procrastinar'}

// infosObjS(infoss)

function infosArray([nome, idade, hobby='dormir']){
        console.log(`${nome}, tenho ${idade} anos, meu hobby é ${hobby}`)

} 

const infos2=['gustavo', 20, 'ler']
// infosArray(infos2)

function somador(operador, acumulador, ...numeros){
for (numeros of numeros){
    if (operador==="+") acumulador+=numeros
    if (operador==="-") acumulador-=numeros
    if (operador==="*") acumulador*=numeros
    if (operador==="/") acumulador/=numeros
} console.log(acumulador)
    
}

// somador('/', 1, 1,1,1,1,1,1000,1,1)

// usando ... rest como se fossem arguments em arrow que não aceita arguments
const arrow=(...args)=>{
    console.log(args)
}

// arrow(1,2,3,12,2,123,123,5,465,465,4,465,46,54,65)