// exportando logo na criação já 
export const nome= 'Gustavo'
export const sobrenome='Kurek'

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome=nome,
        this.sobrenome=sobrenome;
    };
    
    fala(){
        console.log(this.nome,  this.sobrenome)
    }
    
}

// importando alguma coisa com default : se eu não especificar mais nada só ira retortar ela na importação, só pode existir um default por modulo
export default (x,y)=>{
    return x*y
}

export function soma(a, b){
    return a+b

}

// exportando com com chave com o nome das parada, exportando cada coisa que vc querer: se quiser exportar um const com defalt usar "as default"
// export {nome, sobrenome, Pessoa, soma}
