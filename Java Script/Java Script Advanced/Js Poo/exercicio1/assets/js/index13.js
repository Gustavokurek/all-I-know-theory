class ValidarForm{
    constructor(){
        this.form=document.querySelector('.form')
        this.eventos()
    }

    eventos(){
        this.form.addEventListener('submit', e=>{
            this.handleSend(e);
        })
}

    handleSend(e){
        e.preventDefault();
        const checaCampos= this.checaCampos();
        const checaSenha= this.checaSenha()

        if (checaCampos && checaSenha){
            alert('Formulário enviado')
            this.form.submit();
        }


    }

    checaSenha(){
        let valid=true;
        this.senha=this.form.querySelector('.senha')
        this.repetirsenha=this.form.querySelector('.confirme')

        if(this.senha.value !== this.repetirsenha.value){
            valid=false
            this.lançaErro(this.senha, 'senhas precisam ser Iguais')
            this.lançaErro(this.repetirsenha, 'senhas precisam ser Iguais')
        }

        return valid

    }

    checaCampos(){
        let valid= true;

        for(let errorText of this.form.querySelectorAll('.check-erro')){
            errorText.remove();
        }

        for(const inputs of this.form.querySelectorAll('.valid')){
            const campo=inputs;
            const label=campo.previousElementSibling.innerText
            
            if(!campo.value){
                valid=false;
                this.lançaErro(campo, `Campo ${label} não pode ficar em branco`)
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo.value)){
                    valid=false
                    this.lançaErro(campo, ` ${label} Inválido`)
                }
            }            
            
            if(campo.classList.contains('nickname')){
                if(!this.validaNick(campo)){
                    valid=false
                }
            }

        }

        return valid;
    }

    validaNick(nickname){
        const nick= nickname.value
        let valid= true;
        if(nick.length < 3 || nick.length > 12){
            valid=false;
            this.lançaErro(nickname, "Nickname deve ter entre 3 e 12 caracteres")
        }        
        
        if(!nick.match(/^[a-zA-Z0-9]+$/g)){
            valid=false;
            this.lançaErro(nickname, "Nickname deve conter apenas letras e numeros")
        }

        return valid
    }

    validaCpf(cpf){
        let valid= true
        const CPF= new ValidadorCpf(cpf);
        if (!CPF.Validador()){
            valid=false;
        } 
        return valid

    }

    lançaErro(campo, msg){
        const div= document.createElement('div');
        div.innerText=msg;
        div.setAttribute('class', 'check-erro')
        campo.insertAdjacentElement('afterend', div )
        
    }






}


const form= new ValidarForm;