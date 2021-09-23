class ControleRemoto{
    constructor(tv){
        this.tv=tv;
        this.volume=0;
    }

    // metódos de instância: precisam ser instaânciados para ser executado
    aumentarVolume(){
        this.volume+=1;
    }
    
    diminuirVolume(){
        this.volume+=1;
    }

    // metódos static, só pode ser acessado pela class, sem instância, e como nao é instânciado não obtem nenhuma informa de instância

    static somar(x,y){
        return console.log(x+y);
    }

};

const tv1= new ControleRemoto('lg');
// tv1.somar(5,4) não executa
ControleRemoto.somar(54,6) // executa

console.log(tv1)