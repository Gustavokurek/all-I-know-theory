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

async function exe() {
    try{
        const wait1= await wait('Fase 1', rand(1,3));
        console.log(wait1)
        const wait2= await wait('Fase 2', rand(2,5));
        console.log(wait2)
        const wait3= await wait('Fase 3', rand(1,5));
        console.log(wait3)
        const wait4= await wait('Fase 4', rand(2,4));
        console.log(wait4)
    } catch(e){
        console.log(e)

    }
    
}

exe();
// pendind
// fullfilled
// resolved