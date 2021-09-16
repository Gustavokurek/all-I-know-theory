function Calculator(){
    this.display=document.querySelector('.display');

    this.start=()=>{
        this.clickBtn();
        this.clickBtnEnter();
    }

    this.clickBtn=()=>{
        document.addEventListener('click', (e)=>{
            const el=e.target;

            if(el.classList.contains('btn-num')){
                this.BtnForDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
                this.Btnclear()
            }
            if(el.classList.contains('btn-del')){
                this.BtnDel()
            }
            if(el.classList.contains('btn-eq')){
                this.BtnForEq(this.display.value)
            }

            this.display.focus();
            
        })
    };

    this.clickBtnEnter=()=>{
        document.addEventListener('keyup', (e)=>{
            if(e.keyCode===13){
                this.BtnForEq(this.display.value);
            }
        })
    };


    this.BtnForDisplay=(valor)=>this.display.value+=valor;
    this.Btnclear=()=>this.display.value='';
    this.BtnDel=()=> this.display.value= this.display.value.slice(0, -1);
    
    this.BtnForEq=(conta)=>{
        try{
        conta=eval(conta)
        if (Number.isNaN(conta) || typeof conta !== 'number') {
        alert('Conta inválida');
        return;
        } 
        
        this.display.value=conta

        } catch(e){
            alert('conta inválida')
            return;
        }
    }

}

const calc= new Calculator;
calc.start();