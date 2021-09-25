function rand(min, max){
    min*=1000;
    max*=1000;
    return Math.round(Math.random()* (max-min) + min)
};

function  wait(msg, tempo) {
    return new Promise((resolve, reject)=>{
        if(tempo>10000 || typeof msg !== 'string') return reject('ERROR');
        
        setTimeout(()=>{
            resolve(msg.toLocaleLowerCase() + ' Promisse' );
            return
        }, tempo);
    });
    
};

const arrayPromiscuo= 
[
    wait('executei 1', rand(1,3)),
    wait('executei 2', rand(1,3)),
    wait('executei 3', rand(1,3)),
    wait('executei 4', rand(1,3)),
    wait('executei 5', rand(8,10)),
    wait('executei 6', rand(1,3)),
    wait('executei 7', rand(1,3)),
    // wait(100, rand(1,3))
]
 
    

// promise all: metodo para só retornar o resultado quando todas as promisses forem compridas
// promise race: corrida de promisses retornar o primeiro resultado de promisse, se houver algum erro, ele o parara na hora

Promise.all(arrayPromiscuo)
Promise.race(arrayPromiscuo)

.then(r=>{
    console.log(r)
})
.catch(e=>{
    console.log(e)
})


// promise.resolve || promise.reject ja mandam executar a promise

function Emcache() {
    let cache= true;
    if (cache){
      return Promise.reject('error')
    } else return wait('pagina carregada', 3000)
    
}

Emcache()
.then(r=>{
    console.log(r)
})
.catch(e=>{
    console.log(e)
})
















