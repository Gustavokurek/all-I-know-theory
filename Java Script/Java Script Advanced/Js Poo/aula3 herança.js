class Dispositivo{
    constructor(nome){
        this.nome=nome;
        this.ligado=false;
    };
    ligar(){
        if(this.ligado){
            console.log('dispositivo ja ligado');
            return
        } 
        this.ligado=true;
    }

    desligar(){
        if(!this.ligado){
            console.log('dispositivo ja desligado');
            return
        } 
        this.ligado=false;
    }
};

class SmartPgone extends Dispositivo{
    constructor(nome, marca, modelo){
        super(nome);
        this.modelo=modelo;
        this.marca=marca;
    };

    ligar(){
        console.log('ligar not run')
    };

    telefonar(){
        console.log('you dont have credite');
    };
}

const s1=new SmartPgone('galaxy', 'Samsung', 's21');
console.log(s1)


class tablet extends Dispositivo{
    constructor (nome, tamanhoTela){
        super(nome);
        this.tamanhoTela=tamanhoTela;
    };
};

const t1= new tablet('samsung Tab S7', '20`');
t1.ligar()
console.log(t1)




