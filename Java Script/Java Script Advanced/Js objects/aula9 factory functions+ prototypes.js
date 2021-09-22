
// jeito 1:

function criaPessoa(nome, sobrenome){
    const prototypePessoas={
        fala(){
            console.log(`${this.nome} esta falando`)
        },
        coma(){
            console.log(`${this.nome} esta comendo`)
        },
        durma(){
            console.log(`${this.nome} esta durmindo`)
        },
    }
    return Object.create(prototypePessoas, {
        nome: {value:nome},
        sobrenome:{value:sobrenome}
    })
}

const p1=criaPessoa('gustavo', 'Kurek')
console.log(p1)




// jeito 2 mixing: composição

const objFala={
    fala(){
            console.log(`${this.nome} esta falando`)
        },
};

const objCome={
        coma(){
            console.log(`${this.nome} esta comendo`)
        },
};

const objdorme={
        durma(){
            console.log(`${this.nome} esta durmindo`)
        },       
};

const prototypePessoas={...objFala, ...objdorme, ...objCome}

function criaPessoa2(nome, sobrenome){

    return Object.create(prototypePessoas, {
        nome: {value:nome},
        sobrenome:{value:sobrenome}
    })
}

const p12=criaPessoa2('guilherme', 'matheus')
console.log(p12)