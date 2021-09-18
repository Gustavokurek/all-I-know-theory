function Produtos(nome, preço){
    this.nome=nome;
    this.preço=preço;
};

Produtos.prototype.aumenta= function(valor){
    return this.preço = this.preço + this.preço*(valor/100) 
};
Produtos.prototype.diminui= function(valor){
    return this.preço =this.preço - this.preço*(valor/100)
};

const bola=new Produtos('bola', 100);
bola.aumenta(10)
console.log(bola)

const bolsa={
    nome: 'bolsa',
    preço:500
};

Object.setPrototypeOf(bolsa, Produtos.prototype);
console.log(bolsa.diminui(50));
console.log(bolsa)

const camisa=Object.create(Produtos.prototype, {
    preço: {
        enumerable: true,
        value: 100,
        writable: true,
        configurable: false
    },
});

camisa.nome='Camisa'

camisa.diminui(20)
console.log(camisa)