// funções de callback podem ser usadas quando vc precisa definir uma ordem para execução de funções
// usando como exemplo um intervalo de tempo para cada função ser terminada


function rand(min=1000, max=3000){
    const num= Math.random() * (max-min) + min;
    return Math.round(num)
}


function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) return callback();

    },rand())
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) return callback();
    },rand())

}

function f3(callback){
    setTimeout(function(){
    console.log('f3')
    if (callback) return callback();
    },rand())

}

function f4(callback){
    setTimeout(function(){
    console.log('f4')
    if (callback) return callback();
    },rand())

}

//callback hell 

// f1(function(){
//     f2(function(){
//         f3(function(){
//             f4(function(){
//                 console.log('helllo world');
//             });
//         });
//     });
// });


f1(callback1)

function callback1(){
    f2(callback2)
}
function callback2(){
    f3(callback3)
}
function callback3(){
    f4(callback4)
}
function callback4(){
    console.log('hello world')
}
