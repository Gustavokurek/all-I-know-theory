// function factory & constructor both return objects

function Pessoa(nome, sobrenome, idade){
 // informções internas da função
    const id=00000;
    const metodoInterno=()=>{

    }
    
 // informação publica   
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.idade=idade;

    this.motodoExterno=()=>{
        console.log(`${this.nome}: disse isso`)
    };


}

const p1= new Pessoa('Gustavo', 'Kurek', "20")
p1.motodoExterno();

