function Produto(Produto, preço, estoque){

Object.defineProperty(this, 'Produto', {
    enumerable: true, // se pode ser retornado
    value: Produto, // valor 
    writable: true, // pode ser alterado
    configurable: false, // pode ser reconfigurado ou excluido
})

Object.defineProperties(this, {
    preço:{
        enumerable: true,
        value: preço,
        writable: false,
        configurable:false

    },
    estoque:{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable:false

    }
})

}



const Produto1= new Produto('camiseta', 50, 30);
Produto1.Produto='Short' // alterará se writable tiver true
delete Produto1.estoque // só ira excluir se o configurable tiver true
console.log(Produto1)