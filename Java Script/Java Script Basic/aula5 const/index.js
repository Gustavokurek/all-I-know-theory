// mesmas regras do let 

// diferença para let, é que const não pode ser alterada permanece sempre com o mesmo valor, 
// e precisa sempre ser iniciada
// diferentemente de let que pode ter o valor alterado, e não precisa ser iniciada

const num1= 18;
const num2= 0;
const cont= num1 + num2;
const contX2= cont * 2

console.log(cont)
console.log(contX2)

let num3= 20
let num4= 16
num3 = num3+num4
num3 = num3 * 3        // não é possivel mudar o valor de uma const assim
num3 = num3/cont

console.log(num3)

 

