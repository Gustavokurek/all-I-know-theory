const numero = Number(prompt("digite um numero"))
const numeroTitulo= document.getElementById('numero-titulo');
const texto= document.getElementById('text');

numeroTitulo.innerHTML= numero;
texto.innerHTML= `
<P> Raiz quadrada do numero ${numero**0.5} </p>
<P> o numero é inteiro ${Number.isInteger(numero)} </p>
<P> o numero é NaN ${Number.isNaN(numero)} </p>
<P> o numero arredondado para cima ${Math.ceil(numero)} </p>
<P> o numero arredondado para baixo ${Math.floor(numero)} </p>
<P> o numero arredondado para o numero mais perto ${Math.round(numero)} </p>
<P> o numero com duas casas decimais ${(numero.toFixed(2))} </p>
`