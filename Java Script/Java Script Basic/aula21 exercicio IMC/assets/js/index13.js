(function imcCalcular () {

    const form= document.querySelector(".form")
    const resultado= document.querySelector(".resultado")

 
    form.addEventListener("submit", e=> {
        e.preventDefault();

        const Inputpeso = form.querySelector(".peso")
        const Inputaltura = form.querySelector(".altura")
        const peso= Number(Inputpeso.value);
        const altura=Number(Inputaltura.value);

        if (!peso){
        setResultado('Digite um Peso Válido', false);
             return
        }       
         if (!altura){
        setResultado('Digite uma altura Válida', false);
             return
        }
        
        const pessoImc=CalcularImc(peso, altura);
        const nivelImc=levelImc(pessoImc);
        const msg= `Seu IMC é ${pessoImc}, ${nivelImc}`

        setResultado(msg, true)
        
 });


        const CalcularImc= (peso, altura)=> (peso/altura**2).toFixed(2);
        const levelImc=(pessoImc)=>{
            const level=['Você está abaixo do peso','Você está no peso ideal','Você está com sobrepeso','Você está com obesidade grau 1', 'Você está com obesidade grau 2', 'Você está com obesidade grau 3, VOCÊ vai morrer']

            if (pessoImc<18.5) return level[0]  ;          
            if (pessoImc>=18.5 && pessoImc <24.9) return level[1];       
            if (pessoImc>=24.9 && pessoImc <29.9) return level[2];         
            if (pessoImc>=29.9 && pessoImc <34.9) return level[3];         
            if (pessoImc>=34.9 && pessoImc <39.9) return level[4];
            if (pessoImc>=40) return level[5] ;
    };

      const setResultado=(msg, isValid)=>{ 
        resultado.innerText=msg;
         if (isValid) resultado.setAttribute('class', "rigth");
         else  resultado.setAttribute('class', "errado");
         
    }; 


})()

