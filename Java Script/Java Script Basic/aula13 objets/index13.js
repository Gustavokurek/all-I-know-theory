// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade,};  }

// const pessoa1= criaPessoa("gustavo", "kurek", 20)   

// console.log(pessoa1)

const pessoa1= {
    nome: "gustavo",
    sobrenome: "Kurek",
    idade: 21,

    fala(){ 
        console.log( `olá meu nome é ${this.nome} ${this.sobrenome} tenho ${this.idade} anos`)
    },

    incrementaIdade( ) {
        this.idade++

    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()