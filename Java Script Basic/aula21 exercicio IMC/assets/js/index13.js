function imcCalcular () {

    const form= document.querySelector(".form")
    const resultado= document.querySelector(".resultado")

    function eventoform (evento) {
        evento.preventDefault();

        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")
        const IMC= peso.value/altura.value**2

    
        if (IMC<18.5) {
          resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está abaixo do peso </p>`
        } else if (IMC>=18.5 && IMC <24.9) {
            resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está no peso ideal </p>`
        } else if (IMC>=24.9 && IMC <29.9) {
            resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está com sobrepeso </p>`
        } else if (IMC>=29.9 && IMC <34.9) {
            resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está com obesidade grau 1" </p>`
        } else if (IMC>=34.9 && IMC <39.9) {
            resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está com obesidade grau 2 </p>`
        } else if (IMC>=40) {
            resultado.innerHTML= ` <p> Seu IMC é ${IMC.toFixed(2)} Você está com obesidade grau 3, VOCÊ vai morrer </p>`
        } 
 };


    form.addEventListener("submit", eventoform);


}

imcCalcular()