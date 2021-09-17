// metódos 

// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// spred {...Obj}
// Object.getOwnPropertyDescriptor()
// Object.defineProperty()
// Object.defineProperties()
// Object.freeze()


const Informações= {
    nome: 'Gustavo', 
    Idade: 20,
    sobrenome: 'Kurek'
}
    

// vai retornar um array com as chaves chave
console.log(Object.keys(Informações)) 

// vai retornar um array com o valor de da cada chave
console.log(Object.values(Informações)) 

// retorna um array contendo arrays em que cada um está com cada chave e seu resultado do obj
console.log(Object.entries(Informações)) 

// retorna as propriedades de cada chave
console.log(Object.getOwnPropertyDescriptor(Informações, 'nome')) 
                                         

// retorna ou cria um objeto/ ou ainda muda um obj  com as informações dos objeto seguintes
console.log(Object.assign({}, Informações, {Site: 'google'}, {libs: "Next.js"})) 

// cria uma copia de jeito rápido que não tenha ligação com a refêrencia
const CopiaInfo= {...Informações} 
console.log(CopiaInfo)

// altera as propriedades de uma chave do objeto
Object.defineProperty(Informações, "nome", {
    value: 'Guilherme,'
}) 

// altera a propriedade de varias chaves do objeto
Object.defineProperties(Informações, {
    nome: {
        value: "Gustavo"
    },
    Idade:{
        value:25
    }

}); 
console.log(Informações)

// não permite mais que obj seja alterado de maneira nenhuma;
Object.freeze(Informações) 





 



