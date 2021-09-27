const request = obj=>{
    return new Promise((resolve, reject)=>{
    const xhr= new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send();


    xhr.addEventListener('load', ()=>{
        if (xhr.status >= 200 && xhr.status <300) {
            resolve(xhr.responseText)
         } else{
            reject(xhr.statusText)
        }
     });  
    })  
};

document.addEventListener('click', e=>{
    const el=e.target
    const tag= el.tagName.toLowerCase()

    if(tag==='a'){
        e.preventDefault();
        carregaPag(el);
    }
})

async function carregaPag(el){
const href=el.getAttribute('href')

const objconfig={
    method: 'Get',
    url: href,
};

try{
    const response= await request(objconfig);
    carregaresultado(response)
} catch(e){
    console.log(e)
  }

}

function carregaresultado(response){
    const resultado= document.querySelector('.resultado')
    resultado.innerHTML=response
}