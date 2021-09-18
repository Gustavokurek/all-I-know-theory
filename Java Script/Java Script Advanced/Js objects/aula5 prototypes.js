function Pessoa(Nome, Sobrenome){
this.nome=Nome;
this.Sobrenome=Sobrenome;

Pessoa.prototype.NomeCompleto=function(){
    return `${this.nome} ${this.Sobrenome}`
};

}

const Pessoa1=new Pessoa('gustavo', 'kurek')
const Pessoa2=new Pessoa('guilherme', 'kurek')
const Pessoa3=new Pessoa('Matheus', 'kurek')
console.dir(Pessoa1)
console.dir(Pessoa2)
console.dir(Pessoa3)
