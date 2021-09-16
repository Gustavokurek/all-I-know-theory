/*      ARRAYS
.lenglth att para ver quantidade de elmentos   
 delete remove sem alterar o indice           
.pop() remove do final  
.push() adiciona no final    
.shift() remove no começo  alterando o inidce
.unshift add no começo  alterando o indicee
.slice() recorta 
.split() traforma string em array 
.join() array em string

*/

// Fundamentos:   array utilizam valor por referencia quando o valor de um array e jogado para um outro array, se algum deles for alterado, o outro tbm será: para copiar só usando o valor usar [...]
//: ex:

const valores=[1,2,3];
const valoresCopy=valores;
const valoresSemCopy=[...valores];

// valores[2]=454 // mudando o valor do array principal

// console.log(valores, valoresCopy) // muda o valor nos dois

// console.log(valoresSemCopy) // não muda o valor inicial 


// forma diferente de criar um array
// const nomes= new Array('Gustavo' , 'Guilherme', 'Alicia')
const nomes= ['Gustavo' , 'Guilherme', 'Alicia'];
nomes.push('Matheus');
nomes.unshift('Eliane');
delete nomes[2];
// console.log(nomes);
//console.log(nomes.slice(1, -2));
const names= 'gustavo guilher marcio hugo felipe paulo fabi lucas';
const arraynames=names.split(' ');
// console.log(arraynames);
const stringnames= arraynames.join(' ');
// console.log(stringnames);