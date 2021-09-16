(function escopo () {
    const form= document.querySelector(".form")
    const resultado= document.querySelector(".resultado")
    const pessoas= []

    form.addEventListener("submit",
    (e)=> {
        e.preventDefault();

        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const idade = form.querySelector(".idade")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")

       
        const addpessoas= {
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        peso: peso.value,
        altura: altura.value,
        };

         pessoas.push(addpessoas)
         console.log(pessoas);

         resultado.innerHTML+= ` <p> NOME: ${nome.value} ${sobrenome.value}, Idade ${idade.value}, peso ${peso.value}, altura ${altura.value} </p>`
        
 } );
})()

