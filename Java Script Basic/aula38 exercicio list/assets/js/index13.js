const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-tarefa');
const Tarefas=document.querySelector('.tarefas');

function criaLI(){
   const li= document.createElement('li')
   return li
}

inputTarefa.addEventListener('keypress', function(e){
   if (e.keyCode===13){
   if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
}});

function limpaInput(){
   inputTarefa.value='';
   inputTarefa.focus();
}

function criaTarefa(textoInput){
   const li= criaLI()
   li.innerText=textoInput;
   Tarefas.appendChild(li)
   criaBtnApagar(li)
   limpaInput()
   salvarTarefa()

}

function criaBtnApagar(li){
   li.innerText+= " ";
   const botaoApagar=document.createElement('button')
   botaoApagar.innerText='Apagar';
   botaoApagar.setAttribute("class", 'apagar')
   botaoApagar.setAttribute("title", 'apagar essa tarefa')
   li.appendChild(botaoApagar)

}

btnTarefa.addEventListener('click', function(e){
   if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value)

});

document.addEventListener('click', function(e){
   const el=e.target;

   if(el.classList.contains('apagar')){
      el.parentElement.remove();
         salvarTarefa()

   }
});

   function salvarTarefa(){
      const liTarefas= Tarefas.querySelectorAll('li')
      const listaDeTarefas= [];

      for (let tarefa of liTarefas){
         let tarefaTexto=tarefa.innerText;
         tarefaTexto=tarefaTexto.replace('apagar', "").trim();
         listaDeTarefas.push(tarefaTexto);
      }
      const tarefasJSON=JSON.stringify(listaDeTarefas)

      localStorage.setItem('tarefas', tarefasJSON);}   
      
      function addTarefasSalvas(){
         const tarefas=localStorage.getItem('tarefas');
         const listaDeTarefas=JSON.parse(tarefas)
         for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa)
         }
      }
addTarefasSalvas()