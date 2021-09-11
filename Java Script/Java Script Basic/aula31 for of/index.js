// for off, usar em objetos iteraveis, arrays ou strings
// const palavra= 'Macêdonia'
// for( let valor of palavra){
//     console.log(valor)
// }

// for off, usar em objetos iteraveis, arrays ou strings
// const palavras= ['Macêdonia', 'liberdade', 'macarrão', 'messi']
// for( let valor of palavras){
//     console.log(valor)
// }


function myFunction(n) {
const array=[];
for(let i of String(n)){
array.push(Number(i))
};
return array;
}


console.log(myFunction(105555))