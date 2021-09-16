// retorne a soma dos dobros de todos os pares

const numeros=[15,156,25,89,45,6,58,45,12,69,87,55,88,24,56]

const resultado=numeros.filter(v=> v%2===0).map(v=> v*2).reduce((ac, v)=> ac+ v) 
// 
// console.log(resultado)



