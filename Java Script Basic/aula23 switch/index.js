function textDia(diaDaSemana) {
    let diaDaSemanaText;
    switch (diaDaSemana){
    case 0: diaDaSemanaText="domingo"; return diaDaSemanaText;
    case 1: diaDaSemanaText="segunda";return diaDaSemanaText;
    case 2: diaDaSemanaText="terça"; return diaDaSemanaText;
    case 3: diaDaSemanaText="quarta"; return diaDaSemanaText;
    case 4: diaDaSemanaText="quinta"; return diaDaSemanaText;
    case 5: diaDaSemanaText="sexta"; return diaDaSemanaText;
    case 6: diaDaSemanaText="sabado"; return diaDaSemanaText;
}

}


const data= new Date(`2010-10-29 00:00`);
const diaDaSemana= data.getDay();
const diaDeComer=textDia(diaDaSemana)





// switch (diaDaSemana){
//     case 0: diaDaSemanaText="domingo"; break;
//     case 1: diaDaSemanaText="segunda"; break;
//     case 2: diaDaSemanaText="terça"; break;
//     case 3: diaDaSemanaText="quarta"; break;
//     case 4: diaDaSemanaText="quinta"; break;
//     case 5: diaDaSemanaText="sexta"; break;
//     case 6: diaDaSemanaText="sabado"; break;
// }




// if (diaDaSemana === 0){
//      diaDaSemanaText="domingo";
// } else if(diaDaSemana === 1) {
//      diaDaSemanaText="segunda";
// }else if(diaDaSemana === 2) {
//      diaDaSemanaText="terça";
// }else if(diaDaSemana === 3) {
//      diaDaSemanaText="quarta";
// }else if(diaDaSemana === 4) {
//      diaDaSemanaText="quinta";
// }else if(diaDaSemana === 5) {
//      diaDaSemanaText="sexta";
// }else if(diaDaSemana === 6) {
//      diaDaSemanaText="sabado";
// } else  diaDaSemanaText=""


console.log(diaDaSemana)
console.log(diaDeComer)



