// esportando somente uma coisa no modulo exports, tipo default no modulos de es6
// module.exports= (x,y)=>{
//     return x*y
// };

module.exports= class CriaCachorro{
    constructor(nome){
        this.nome=nome
    }

    latir(){
       return `${this.nome} está fazendo auauauauau`
    }
}

