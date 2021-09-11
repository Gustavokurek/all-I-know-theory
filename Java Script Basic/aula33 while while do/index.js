let=i=0

// while (i<=100){
//     console.log(i)
//     i++

// }

// do{
//     i+=9
//     console.log(i)

// } while(i<=99)

function random(min, max){
    let Num=Math.random() * (max - min)+ min;
    return Math.round(Num);
}

const min= 1;
const max= 50;


let rand=random(min, max);

 while(rand!==13){
    
    rand= random(min, max)
    console.log(rand)        
   
    
}

console.log('aaaaaaaaaaaaaaaaaa')

do{
    rand=random(min, max)
    console.log(rand)

} while (rand!==21)
