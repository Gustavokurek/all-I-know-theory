const paragrafos=document.querySelector('.paragrafos')
const ps=paragrafos.querySelectorAll('p')

const CssAll=getComputedStyle(document.body)
const colorBKGbody=CssAll.backgroundColor;
console.log(colorBKGbody)


for( let p of ps){
    console.log(p)
    console.log('#######################')
p.style.backgroundColor=colorBKGbody;
p.style.color='#fff';

}