let num1 = 0.7; // number
let num2 = 1.1; // number

 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 += num2
num1 += num2
num1 += num2



num1 = Number(num1.toFixed(2)); //identificar o numero como inteiro corretamente
 console.log(num1.toFixed(2));
 console.log(Number.isInteger(num1));


console.log(num1.toString() + num2); //tranforma numero em string e como é uma soma faz uma contenteçaõ
num1 = num1.toString(); //tranforma um numero em string e muda a variavel global para string tbm
 console.log(num1.toString(2));
console.log(num1.toFixed(2)); //limita o numero de casas após a virgula para o desejaado 
console.log(Number.isInteger(num1)); //pergunta se é um numero inteiro


math 

let num1= 1.49;

console.log(!!(100 / 0));

 let num2 = Math.floor(num1); //arredonda o numereo para baixo
let num2 = Math.ceil(num1); //arredonda o numero para cima 
 let num2 = Math.round(num1); //arredonda o numero para o mais perto
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //em uma sequência de numeros identica o maior 
 console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //em uma sequência de numeros identica o menor
 const aleatorio = Math.round(Math.random() * (10 - 5) + 5) 
const aleatorio= Math.random() //gera um numero elatorio menor que 0
console.log(aleatorio.toFixed(2))
