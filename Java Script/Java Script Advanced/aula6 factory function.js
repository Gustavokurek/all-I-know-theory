// factory functions

function criapessoa(nome, sobrenome, a, p ){
    return {
        nome,
        sobrenome,
        altura:a,
        peso: p,

    get nomecompleto(){
        return `${this.nome} ${this.sobrenome}`
    },

// seter se precisar setar algo de fora     
    set nomecompleto(valor) {
       valor=valor.split(' ');
       this.nome=valor.shift();
       this.sobrenome=valor;
    },

 // getter faz o methodo se comportar como uma variavel
       get imc(){
            const indice= this.peso/(this.altura**2)
            return indice.toFixed(2)
        },

        
    fala(assunto='nada'){
       return `${this.nome} está falando ${assunto}` 
    }


    }

}

const p1= criapessoa('gustavo', 'kurek', 1.83, 78)
const p2= criapessoa('guilherme', 'ferreira', 1.77, 57)
const p3= criapessoa('eliane', 'albuquerque', 1.67, 61)

p2.nomecompleto='Guilherme Kurek'
console.log(p2.nomecompleto)
console.log(p2.imc)

console.log(p1.fala())



  