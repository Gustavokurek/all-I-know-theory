import geraSenha from "./geradores";


const button= document.querySelector('.button')
const quantidade=document.querySelector('.qtd-Caracteres')
const resultado= document.querySelector('.resultado')
const addNumeros= document.querySelector('.add-Num')
const addMaiusculo= document.querySelector('.add-Maiusculas')
const addMinusculo= document.querySelector('.add-Minusculas')
const addsimbolos= document.querySelector('.add-Simbolos')


export default function formGeradores(){
    button.addEventListener('click', e=>{
        if(!quantidade.value || quantidade.value==='0') return inserirResultado("ADICIONE ALGUMA QUANTIDADE", false)
        if(!quantidade.value || Number(quantidade.value)> 50) return inserirResultado(" VALOR ACIMA DA QUANTIDADE MAXÍMA", false)
        if(addNumeros.checked===false && addMaiusculo.checked===false && addMinusculo.checked===false && addsimbolos.checked===false) return inserirResultado("ADICIONE ALGUMA OPÇÃO", false)
        const senhaGerada=gera()
        inserirResultado(senhaGerada, true)
    })
    
    function gera(){
    const Senha=geraSenha(quantidade.value, addNumeros.checked, addMaiusculo.checked, addMinusculo.checked, addsimbolos.checked )
        return Senha
}

    function inserirResultado(senha, valid){
        if(!valid){
            resultado.setAttribute('class', 'error');
          return resultado.innerHTML=senha;
        } else{
        resultado.setAttribute('class', 'resultado');
         return resultado.innerHTML=senha;
        }

    }

    

}