let Cpf='052-857-289-64';
let CpfReal=Cpf.replace(/\D/g, '')
const cpfArray= Array.from(CpfReal)
const cpfParaValidar=[...cpfArray]
cpfParaValidar.splice(9,2)


const MultiSoma=function(CpfParcial){
    const cpfArray=[...CpfParcial]
    let contagem=cpfArray.length + 1;;
    const total= cpfArray.reduce((ac,valor)=>{
    ac.push(Number(valor)*contagem);
    contagem--;
    return ac;
   
},[]).reduce((ac, valor)=> ac+=valor);
 return total
}

const desfragmentar=(numero)=> 11 - numero%11 < 9 ? 11 - numero%11 : 0;
const juntar=(numero)=> cpfParaValidar.push(String(numero)); 

const resultadoSoma1=MultiSoma(cpfParaValidar);
const numeroUm=desfragmentar(resultadoSoma1);
juntar(numeroUm);

const resultadoSoma2=MultiSoma(cpfParaValidar);
const numeroDois=desfragmentar(resultadoSoma2);
juntar(numeroDois);


const resultadoValidação=(cpfOriginal, cpfParaValidar)=>  cpfParaValidar.join()===cpfOriginal.join() ? 'CPF Válido' : 'CPF Inválido';
console.log(resultadoValidação(cpfParaValidar,cpfArray));







