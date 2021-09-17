function Produto(Produto, preço, estoque){
    this.Produto=Produto;
    this.preço=preço;

    let estoquePrivado=estoque

 Object.defineProperty(this, 'estoque', {
    enumerable: true, // se pode ser retornado
    get: function(){
        return estoquePrivado
    },
    set: function(valor){
        if (typeof valor !== 'number'){
            throw new TypeError('Estoque precisa ser um Numero')
        }
        estoquePrivado=valor;

    },

    configurable: false, // pode ser reconfigurado ou excluido
})

};



// const Produto1= new Produto('camiseta', 50, 30);
// Produto1.estoque= 'lalala' ;
// console.log(Produto1.estoque)


function criaPessoa(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            if (typeof valor !== 'string'){
                throw TypeError ('valor precisa ser uma string')
            }
            nome=valor;

        }
    }
}

const pessoa=criaPessoa('Luiz');
pessoa.nome='gustavo';
console.log(pessoa.nome)


