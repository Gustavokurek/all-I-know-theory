import './ValidaCpf'
import ValidaCpf from './ValidaCpf'

export default class GeraCpf{
    rand(min=100000000, max=999999999){
        return String(Math.round(Math.random() * (max-min)+ min ))
    }

    events(){
        document.addEventListener('click', e=>{
            const el=e.target;
            this.removerbotão(el)
        })
    }

    removerbotão(el){
            if(el.classList.contains('button1')){
                let remove = document.querySelector('.button1')
                remove.remove();
                this.GeraNovoCpf();                                 
            }
            
            if( el.classList.contains('novoBotão')){
                for(let remove of document.querySelectorAll('.novoBotão')  ){
                    remove.remove()
                    this.GeraNovoCpf()
                }
            }      
    }

    GeraNovoCpf(){
        const cpfsemDigito=this.rand();
        const cpfDigito=ValidaCpf.criaDigito(cpfsemDigito)
        const cpfDigito2=ValidaCpf.criaDigito(cpfsemDigito+cpfDigito)
        const cpfGerado= cpfsemDigito + cpfDigito + cpfDigito2
        return this.inserirHtml(this.formatar(cpfGerado))
    }
    
    formatar(cpf){
        return (cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.'+ cpf.slice(6, 9) + '-' + cpf.slice(9, 11))
    }
    
    
    inserirHtml(cpf){
        const resultado=document.querySelector('.resultado')
        resultado.innerHTML=cpf
        this.novoBotão(resultado)
    }

    novoBotão(button){
        const novoBotão= document.createElement('button')
        novoBotão.setAttribute('class', 'novoBotão')
        novoBotão.innerHTML='Gerar outro CPF'
        button.insertAdjacentElement('afterend', novoBotão)
    }

}



    
