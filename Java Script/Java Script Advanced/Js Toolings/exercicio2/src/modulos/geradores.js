const rand=(min, max)=> Math.round(Math.random() * (max-min) + min);
const geraNumeros=()=> String.fromCharCode(rand(48, 58));
const geraMaiusculas=()=> String.fromCharCode(rand(65, 91));
const geraMinusculas=()=> String.fromCharCode(rand(97, 123));
const simbolos= '!@#$%¨&*()_-+=§`´{[ª^~}]º:;?/'; 
const geraSimbolos=()=> simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, Numeros, Maiusculas, Minusculas, Simbolos){
    const senha= []
    qtd=Number(qtd);


    for (let index = 0; index < qtd; index++) {
        Numeros && senha.push(geraNumeros()),
        Maiusculas && senha.push(geraMaiusculas()),
        Minusculas && senha.push(geraMinusculas()),
        Simbolos && senha.push(geraSimbolos())
    }

    const senhaAleatoria= senha.join('').split('').sort(function(){return 0.5-Math.random()}).join('')
    return senhaAleatoria.slice(0,qtd)

}

