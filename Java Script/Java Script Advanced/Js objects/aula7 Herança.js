function Produto(nome, preço){
this.nome=nome;
this.preço=preço;
};

Produto.prototype.aumenta=function(aumenta){
    return this.preço+=aumenta;
};
Produto.prototype.diminui=function(diminui){
    return this.preço-=diminui;
};

// aproveitando coisas feitas:
function Camiseta(nome, preço, marca){
    Produto.call(this, nome, preço);
    this.marca=marca;
}
Camiseta.prototype=Object.create(Produto.prototype); // pegando o prototype
Camiseta.prototype.constructor=Camiseta; // definindo o real constructor

const CamisaNike=new Camiseta('modelo 1', 500, 'Nike');
CamisaNike.aumenta(100);
CamisaNike.diminui(200);
console.log(CamisaNike);

function Calça(nome, preço, tamanhho, estoque){
    Produto.call(this, nome, preço);
    this.tamanhho=tamanhho;
    Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function(){
        return estoque;
    },

    set: function(quantidade){
        if (typeof quantidade !== 'number') return; 
        return estoque=quantidade;
    }
   })
};

Calça.prototype=Object.create(Produto.prototype);
Calça.prototype.constructor=Calça;

// alterando a função do prototype recebido, altera só nela
Calça.prototype.aumenta=function(Percentual){
    return this.preço= this.preço+ (this.preço*(Percentual/100));
};
Calça.prototype.diminui=function(Percentual){
    return this.preço= this.preço-  (this.preço*(Percentual/100));
};

const Calça1= new Calça('skinni', 50, 'M', 50);
Calça1.aumenta(100);
Calça1.estoque='120';
console.log(Calça1);

// primeiro o motor do Js procura no prototype dela, depois no protype importado, depois no prototype geral