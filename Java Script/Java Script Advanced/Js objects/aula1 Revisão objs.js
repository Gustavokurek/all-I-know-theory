// obejos 

// objs literais
const pessos={
 /* chave */   nome: 'Gustavo',
 /* chave */   Sobrenome: 'Kurek'
}

// acessando
const chave='nome'
// console.log(pessos.nome); /*ou*/ console.log(pessos[chave])

// construtor de obj

const pessoa1= new Object()
pessoa1.nome= 'Luiz';            // add chaves funciona em obj literal tbm
pessoa1.Sobrenome= 'Kurek';
pessoa1.idade=20;
pessoa1.falaNome= function(){
    return `${this.nome}`;
};

pessoa1.getDataDeNasc=function(){
    const data=new Date()
    return data.getFullYear()-this.idade;
     
}

// delete pessoa1.Sobrenome deletando uma chave 



// for em chaves 
for (let chave in pessoa1){
    // console.log(chave)
    // console.log(pessoa1[chave])
};

// criando obj através de função
// Factory functions/ Constructor Functions/ classes


// factory functions
function Criapessoa(Nome, Sobrenome){
    return{
        Nome, 
        Sobrenome, 
        get NomeCompleto(){ //get methodo se comporta como atributo
            return `${this.Nome} ${this.Sobrenome}`
        }

    };
};

const p1=Criapessoa('Gustavo', 'Kurek')
// console.log(p1.NomeCompleto)


// constructor Functions
function Pessoa(nome, sobrenome){ // usar Nome da função em M
    this.nome=nome; //usar this e = para selecionar
    this.sobrenome=sobrenome;
 
    // Object.freeze(this) // não permite alteração em nenhum objeto criado com esse molde
}

const p2= new Pessoa('Alicia', 'Albuquerque') // usar new para usar função construtora
p2.nome= 'gustavo'; 
Object.freeze(p2) // não permite alterção depois disso
console.log(typeof p2)






















