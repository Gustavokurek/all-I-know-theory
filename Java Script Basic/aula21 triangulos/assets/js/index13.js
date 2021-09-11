const form=document.querySelector(".form")

form.addEventListener("submit", function(e)
{e.preventDefault()
    console.log("evento previnido")
    inputLado1=e.target.querySelector(".lado1");
    inputLado2=e.target.querySelector(".lado2");
    inputLado3=e.target.querySelector(".lado3");

    const lado1=Number(inputLado1.value);
    const lado2=Number(inputLado2.value);
    const lado3=Number(inputLado3.value);

    console.log(lado1, lado2, lado3)

    if(!lado1){
        return setResultado("Lado 1 inválido", false)
    }
    if(!lado2){
        return setResultado("Lado 2 inválido", false)
    }
    if(!lado3){
        return setResultado("Lado 3 inválido", false)
    }

    if(lado1+lado2<lado3 || lado1+lado3<lado2 || lado2+lado3<lado1){
        return setResultado("Isso não é um triângulo", false)
    }

const étriangulo=éUmTriangulo(lado1, lado2, lado3);
const Classificação= classificação(lado1, lado2, lado3);

const msg= `${étriangulo} </br> ${Classificação}`;

setResultado(msg, true)
    

})

function criaP () {
    const p = document.createElement(`p`);
    return p;
}

function setResultado(msg, isValid) {
    const resultado=document.querySelector(".resultado");
    resultado.innerHTML= ` `;
    const p = criaP();
    
       if (isValid) {
         p.classList.add('paragrafo-resultado')
        }else {
         p.classList.add('bad') 
        }

    p.innerHTML= msg;
    resultado.appendChild(p)
}

function éUmTriangulo(lado1, lado2, lado3) {
    if(lado1+lado2>=lado3 && lado1+lado3>=lado2 && lado2+lado3>=lado1){
         const étriangulo=("Isso é um triângulo")
         return étriangulo
    } 
}

function classificação(lado1, lado2, lado3){
    if (lado1===lado2 && lado2===lado3) {
        const classificação= ("É um triângulo equilátero")   
        return classificação
    } 
    else if (lado1!==lado2 && lado2!==lado3 && lado1!==lado3){
        const classificação= ("É um triângulo escaleno")
        return classificação
        }
    else if (lado1===lado2 || lado2===lado3 || lado3===lado1) {
        const classificação= ("É um triângulo isósceles")
        return classificação
    }


};