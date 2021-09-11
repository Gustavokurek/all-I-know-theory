// const H1=document.querySelector(" section H1")

// function textDia(diaDaSemana) {
//     let diaDaSemanaText;
//     switch (diaDaSemana){
//     case 0: diaDaSemanaText="Domingo"; return diaDaSemanaText;
//     case 1: diaDaSemanaText="Segunda-Feira";return diaDaSemanaText;
//     case 2: diaDaSemanaText="Terça-Feira"; return diaDaSemanaText;
//     case 3: diaDaSemanaText="Quarta-Feira"; return diaDaSemanaText;
//     case 4: diaDaSemanaText="Quinta-Feira"; return diaDaSemanaText;
//     case 5: diaDaSemanaText="Sexta-Feira"; return diaDaSemanaText;
//     case 6: diaDaSemanaText="Sabado"; return diaDaSemanaText;
// } }

// function textMes(mes) {
//     let mesText;
//     switch (mes){
//     case 0: mesText="Janeiro"; return mesText;
//     case 1: mesText="Fevereiro";return mesText;
//     case 2: mesText="Março"; return mesText;
//     case 3: mesText="Abril"; return mesText;
//     case 4: mesText="Maio"; return mesText;
//     case 5: mesText="Junho"; return mesText;
//     case 6: mesText="Julho"; return mesText;
//     case 7: mesText="Agosto"; return mesText;
//     case 8: mesText="Setembro"; return mesText;
//     case 9: mesText="Outubro"; return mesText;
//     case 10: mesText="Novembro"; return mesText;
//     case 11: mesText="Dezembro"; return mesText;
// }


// }
// const data= new Date();
// const diaDaSemanaNumero= data.getDay(data);
// const diaDaSemanaEscrito=textDia(diaDaSemanaNumero)
// const mes= data.getMonth();
// const mesEscrito=textMes(mes)

// H1.innerHTML=`${diaDaSemanaEscrito}, ${data.getDate()} de ${mesEscrito} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}`


// SEGUNDO jEITO

// const H1=document.querySelector(" section H1")

// function textDia(diaDaSemanaa) {
// const diaDaSemana= ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado' ]
// return diaDaSemana[diaDaSemanaa];
// }

// function textMes(mes) { {
// const diaDaSemana= ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho' ,'Agosto', 'Setembro', 'Outubro', 'Novembro', 'dezembro' ]
// return diaDaSemana[mes];
// }

// function zeraL(num) {return num>=10 ? num :`0${num}`}

// }

// const data= new Date();
// const diaDaSemanaNumero= data.getDay(data);
// const diaDaSemanaEscrito=textDia(diaDaSemanaNumero)
// const mes= data.getMonth();
// const mesEscrito=textMes(mes)

// H1.innerHTML=`${diaDaSemanaEscrito}, ${data.getDate()} de ${mesEscrito} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}`

const h1 = document.querySelector('section h1');
 h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())
