function Conta(ag, conta, saldo){
    this.agência= ag;
    this.conta=conta;
    this.saldo=saldo;
};

Conta.prototype.sacar=function(valor){
    if(valor>this.saldo){
    return console.log(`Saldo Insuficiente: Saldo= RS: ${this.saldo}`);};
    this.saldo-=valor;
    console.log('Saque Efetuado');
    return this.Versaldo();
    
};

Conta.prototype.depositar=function(valor){
    this.saldo= this.saldo+valor;
    console.log('deposito Efetuado');
    return this.Versaldo();
};

Conta.prototype.Versaldo=function(){
   return console.log(`ag/c ${this.agência} / ${this.conta} | Saldo: RS:${this.saldo}`)
};



function ContaCorrente(ag,conta,saldo,limite){
    Conta.call(this,ag,conta,saldo);
    this.limite=limite;
}

 ContaCorrente.prototype=Object.create(Conta.prototype);
 ContaCorrente.prototype.constructor = ContaCorrente;

 ContaCorrente.prototype.sacar=function(valor){
    if(valor>this.saldo+this.limite){
    return console.log(`Saldo Insuficiente: Saldo= RS: ${this.saldo}`);
    };
    this.saldo-=valor;
    return console.log('Saque Efetuado');
};

const ContaCorrente1= new ContaCorrente(1234, 005244, 0, 300);
ContaCorrente1.depositar(20)
ContaCorrente1.sacar(220)
ContaCorrente1.Versaldo()


function ContaPoupança(ag,conta,saldo){
    Conta.call(this,ag,conta,saldo);
}

ContaPoupança.prototype=Object.create(Conta.prototype);
ContaPoupança.prototype.constructor=ContaPoupança;

const ContaPoupança1=new ContaPoupança(1234, 4567, 0);
ContaPoupança1.depositar(100)
ContaPoupança1.sacar(200)





