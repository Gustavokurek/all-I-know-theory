function getCalculator(){
    return{
        
        display: document.querySelector('.display'),


    Start(){
    this.clickBtn();
    this.clickEnter();
    },

     clickBtn(){
         document.addEventListener('click', (e)=>{
             const el=e.target;

             if(el.classList.contains('btn-num')){
             this.btnForDisplay(el.innerText)};

             if(el.classList.contains('btn-clear')){
                this.clear();
             }
             if(el.classList.contains('btn-del')){
                this.clearOne();
             }             
             if(el.classList.contains('btn-eq')){
                this.calc();
             }

            this.display.focus();

        
         });
        },
 
     clickEnter(){
         document.addEventListener('keyup', (e)=>{ //usando factory function para o this copntinuar a calculadora e não mudar para document, altetiva no fim da função usar .

             if (e.keyCode===13){
            this.calc();

             };    
         })},



    btnForDisplay(valor){
        this.display.value+=valor;

    },

    clear(){
        this.display.value='';
    },   
    
    clearOne(){
        this.display.value= this.display.value.slice(0, -1);
    },

    calc(){
        let conta=this.display.value;

         try{
             conta=eval(conta);
            if (Number.isNaN(conta) || typeof conta !== 'number') {
            alert('Conta inválida');
            return;
            }
             this.display.value=String(conta);
         } catch(e){
             alert('conta inválida')

         }
    },

    
}}

const calculator=getCalculator()
calculator.Start();