function  ValidaCpf(Cpf){
let cpfReal1=Cpf;
    Object.defineProperty(this, 'CpfReal',{
        enumerable: true,
        get: function() {
            return cpfReal1;
        },
        set: function(valor){
            return cpfReal1=valor;
        }   
        
  })
}


ValidaCpf.prototype.retornarCpf=function() {
    this.conteiner=document.querySelector('.conteiner');
    document.addEventListener('submit',e =>{
    e.preventDefault();
    this.InputCpf=document.querySelector('.InputCpf');
    this.CpfOriginal=String(this.InputCpf.value); 
    this.CpfReal=this.CpfOriginal.replace(/\D/g, '');
    this.Validação();
    });    
};

ValidaCpf.prototype.Validação=function(){
    if (typeof this.CpfReal==='undefined') return false;
    if(this.CpfReal.length!==11) return false;
    if(this.isSequencia()===this.CpfReal) return false;

    let CpfParcial=this.CpfReal.slice(0,-2);

    const digito1= this.criaDigito(CpfParcial);
    CpfParcial=CpfParcial.concat(digito1);
    const digito2= this.criaDigito(CpfParcial);
    CpfParcial=CpfParcial.concat(digito2);

    if (CpfParcial===this.CpfReal) return alert('CPF válido');
    return  alert('CPF Inválido')
}

ValidaCpf.prototype.criaDigito=function(CpfParcial){
    const cpfArray=Array.from(CpfParcial)
    let contagem=cpfArray.length + 1;
    ;

    const total= cpfArray.reduce((ac,valor)=>{
    if(cpfArray.length===9){
    ac.push(Number(valor)*contagem);
    contagem--;
    return ac
}

    if(cpfArray.length===10){
    ac.push(Number(valor)*contagem);
    contagem--;
    return ac
    };
   
},[]).reduce((ac, valor)=> ac+=valor);

    const digito= 11-(total%11);
    return digito>9 ? String(0) :String(digito);
};

ValidaCpf.prototype.isSequencia=function(){
    return this.CpfReal[0].repeat(this.CpfReal.length)
}


const Cpf= new ValidaCpf();
Cpf.retornarCpf();


