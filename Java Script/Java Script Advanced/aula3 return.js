// return
// retorna um valor e termina a função

// exemplos return retornando um obj

function criapessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1=criapessoa('gustavo', 'kurek');
// console.log(p1)


// parte mais complexa!!
// retornando função
// exemplos

function falaFrase(começo){
    function falaResto(resto){
        return começo + ' ' + resto
    };
    return falaResto;
}

const fala= falaFrase('hello');
const resto= fala('world');

const fala2=falaFrase('lalalala');
const resto2=fala('land');

// console.log(resto2)


function multiplicador(multiplicador){
    return function(n){
        return multiplicador*n;
    };
}

const duplica=multiplicador(2);
const triplica=multiplicador(3);
const quadriplica=multiplicador(4);

console.log(duplica(12));
console.log(triplica(18));
console.log(quadriplica(2));