function rand(min, max){
    min*=1000;
    max*=1000;
    return Math.round(Math.random()* (max-min) + min)
};

function  wait(msg, tempo) {
    return new Promise((resolve, reject)=>{
        if(tempo>3000) return reject('tempo excedente');
        
        setTimeout(()=>{
            resolve(msg)
        }, tempo);
    });
    
};

wait('executar primeiro', rand(1,3))
    .then(resposta=>{
        console.log(resposta)
        return wait('executar por segundo', rand(1,5))
    })
    .then(resposta=>{
        console.log(resposta)
        return wait('executar por terceiro', rand(1,5))
    })
    .then(resposta=>{
        console.log(resposta)
        return wait('executar por quarto', rand(1,4))
    })
    .then(resposta=>{
        console.log(resposta)
    })
    .catch(e=>{
        console.log("Error" + ' ' + e)
    })