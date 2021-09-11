  function Timer(){

  function returnSeconds(second){
    const data= new Date(second*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'UTC'
    })}


 function insertSeconds(){
    crono= setInterval( function(){
    second++,
    timer.innerHTML=  returnSeconds(second)}, 
    1000)
 }



const conteiner= document.querySelector('.conteiner');
const timer= document.querySelector('.timer');
const iniciar= document.querySelector('.iniciar');
const pausar= document.querySelector('.pausar');
let second=0;
let crono;



 document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('iniciar')) {
    clearInterval(crono);
    insertSeconds();
    iniciar.innerHTML='Cronometrando';
    pausar.innerHTML='Pausar';
    timer.classList.remove('pausado');
    iniciar.classList.add('buttonStyleClick');
    pausar.classList.remove('buttonStyleClick');

    }   
    
    if (el.classList.contains('pausar')) {
    clearInterval(crono)
    iniciar.innerHTML="Retomar"
    pausar.innerHTML="Pausado"
    timer.classList.add('pausado');
    pausar.classList.add('buttonStyleClick');
    iniciar.classList.remove('buttonStyleClick');

    }   
    
    if (el.classList.contains('zerar')) {
    clearInterval(crono)
    timer.classList.remove('pausado');
    timer.innerHTML='00:00:00'
    second=0;
    iniciar.innerHTML="Iniciar"
    pausar.innerHTML='Pausar';
    iniciar.classList.remove('buttonStyleClick');
    pausar.classList.remove('buttonStyleClick');

    }
    
 })

 }

 Timer()
