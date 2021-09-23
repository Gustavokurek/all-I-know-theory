const _velocidade=Symbol('Velocidade');

class Carros{
    constructor(nome){
        this.nome=nome;
        this[_velocidade]=0;
    }

    get velocidade(){
        return this[_velocidade];
    }    
    set velocidade(valor){
        if(typeof valor !== "number") return    
        if(valor>100 || valor<0) return    
        return this[_velocidade]=valor;
    }

     acelerar(){
        if (this[_velocidade]>=100) return;
        this[_velocidade]++;
    }    
     freiar(){
        if (this[_velocidade]<0) return;
        this[_velocidade]++;
    }
};

const Carro1=new Carros('fusca');

for (let index = 0; index < 102; index++) {
Carro1.acelerar();
}

Carro1.velocidade=50;
console.log(Carro1.velocidade)











////
class Pessoas{
    constructor(nome, sobrenome){
        this.nome=nome;
        this.sobrenome=sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;

    }

    set nomeCompleto(valor){
        let nomes=valor.split(' ')
        this.nome=nomes.shift()
        this.sobrenome=nomes.join(' ');

    }
}

const p1= new Pessoas('gustavo', "kurek");
p1.nomeCompleto='gustavo Kurek ferreira'
console.log(p1.sobrenome)
