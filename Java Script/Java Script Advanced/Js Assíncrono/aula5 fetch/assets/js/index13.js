document.addEventListener('click', e=>{
    const el=e.target
    const tag= el.tagName.toLowerCase()

    if(tag==='a'){
        e.preventDefault();
        carregaPag(el);
    }
})

async function carregaPag(el){

    try{
        const href=el.getAttribute('href')
        const response= await fetch(href)
        if (response.status !== 200) throw new Error('ERRROR'); 
        const html= await response.text();

        carregaresultado(html)
    }catch(e){
        console.log(e)
    }

}



function carregaresultado(response){
    const resultado= document.querySelector('.resultado')
    resultado.innerHTML=response
}


 