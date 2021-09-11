/*

and && E, todas as afirmações precisam ser corretas
or  || ou, apenas umas das afirmações precisam ser corretas


valores que sempre retoprnaram falsy, pelo Js

false
0
null
undefined
NaN
"" '' ``

quando tiver na sentença o operador &&, ele só vai parar se tiver um False, e ele exibirá esse valor, se tiver td ok e tudo for true, ele exibira o último valor

quando tiver na sentença o operador || ele só vai parar se tiver um verdadeiro, 
e ele exibirá esse valor, se for tudo falso ele exibira o ultimo que vai ser o falso ou o verdadeiro

*/

const corUsuario = null;
const corPadrão= corUsuario || 'blue';

console.log(corPadrão)


function Faça() {
    return "seu banananananana"
}

const executoChefe= true ;

console.log( Faça()  &&  executoChefe)

console.log("joao" && 'maria' && "carlos")
