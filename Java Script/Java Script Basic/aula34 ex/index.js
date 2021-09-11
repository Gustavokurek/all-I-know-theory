function divisi(num){ 
    if (isNaN(num)===true) return "isso não é um numero";
    if (num%5===0 && num%3===0) return 'fizzbuzz';
    if (num%3===0) return 'fizz';
    if (num%5===0) return 'buzz';
    return num;
};


let i=0;
while(i<=100){
    console.log(i, divisi(i))
    i++
};