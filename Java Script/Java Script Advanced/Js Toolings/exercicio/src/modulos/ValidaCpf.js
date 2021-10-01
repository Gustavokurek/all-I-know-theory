export default class ValidadorCpf{
    constructor(cpf){
      Object.defineProperty(this, 'cpf',{
           value:cpf.replace(/\D/g, '')
      })
    }

    Validador(){
        if(typeof this.cpf === 'undefined') return false;
        if(this.cpf.length!==11) return false;
        if(this.isSeq()===this.cpf) return false;
        this.geraDigito();

        return this.cpfRefeito===this.cpf ;
    }

    geraDigito(){          
        let cpfParcial=this.cpf;
        cpfParcial=cpfParcial.slice(0,-2)

        const digito1= this.criaDigito(cpfParcial)
        cpfParcial=cpfParcial.concat(digito1)

         const digito2= this.criaDigito(cpfParcial)
         cpfParcial=cpfParcial.concat(digito2)
         this.cpfRefeito=cpfParcial;
    }

    static criaDigito(cpfParcial){
        const cpfArray=Array.from(cpfParcial)
        let contador= cpfArray.length + 1;

        const total=cpfArray.reduce((acc, valor)=>{
            acc.push(Number(valor)*contador)
            contador--;
            return acc
        },[]).reduce((acc, valor)=>acc+=valor, 0)

        const digito= 11-total % 11;
        return digito>=10 ? String(0) : String(digito)
    };

    isSeq(){
        return this.cpf.charAt(0).repeat(this.cpf.length);
    }
 };


