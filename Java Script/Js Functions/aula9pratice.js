function rand(min=1000, max=3000){
    const num= Math.random() * (max-min) + min;
    return 1000
}

function* Fs(){
yield (callback)=>{ setTimeout( ()=>{ console.log('primeira coisa que presisa ser executada'); if(callback) callback()},  rand() );};
yield (callback)=>{ setTimeout( ()=>{ console.log('Segunda coisa que presisa ser executada'); if(callback) callback()},  rand() );};
yield (callback)=>{ setTimeout( ()=>{ console.log('terceira coisa que presisa ser executada'); if(callback) callback()},  rand() );};
yield (callback)=>{ setTimeout( ()=>{ console.log('quarta coisa que presisa ser executada'); if(callback) callback()},  rand() );}; 
yield (callback)=>{ setTimeout( ()=>{ console.log('quinta coisa que presisa ser executada'); if(callback) callback()},  rand() );};
};

const fs= Fs();

const callback1=()=> fs.next().value(callback2);
const callback2=()=> fs.next().value(callback3);
const callback3=()=> fs.next().value(callback4);
const callback4=()=> fs.next().value();


fs.next().value(callback1);


