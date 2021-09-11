function soma(x,y){
    if(typeof x !== 'number' || typeof y!== 'number'){
    throw new TypeError('X e Y precisam ser numeros')
    }
    return x+y
};



try{
console.log(soma(1,8));
console.log(soma('1',90));
} catch(erro) {
    console.log(erro)
    console.log("burro errou")
}