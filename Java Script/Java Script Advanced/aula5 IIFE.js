// IIFE immeadiately invoked function express usada para invocar um função imediatamente

const idade=20;
const peso= 80;
const altura=1.80;

(function(idade, peso, altura){

    function falaoi(){
        console.log('oi');
    };
    falaoi();

    console.log(idade, peso, altura);
})(idade, peso , altura);

