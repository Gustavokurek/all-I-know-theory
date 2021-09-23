class Pessoas{
    constructor(Nome, Sobrenome){    // onde colocar os parametros
        this.Nome=Nome;
        this.Sobrenome=Sobrenome;
    }

    falar(){
        console.log(`${this.Nome} está falando`)
    };

    comer(){
        console.log(`${this.Nome} está comendo`)
    };

    criando(){
        console.log(`${this.Nome} está criando`)
    };

};



function Pessoas2(nome, Sobrenome){
    this.nome=nome;
    this.Sobrenome=Sobrenome;
    
};

Pessoas2.prototype.falar=function(){
    console.log(`${this.nome}`)
}

const p1=new Pessoas('gustavo', "Kurek");
const p2=new Pessoas2('gustavo', "Kurek");
console.log(p1)
console.log(p2)