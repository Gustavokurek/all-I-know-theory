let Cpf='611.697.600-07';
let CpfReal=Cpf.replace(/\D/g, '')
const cpfArray= Array.from(CpfReal)
const cpfParaValidar=[...cpfArray]
cpfParaValidar.splice(9,2)
let contador11=11
let contador10=10

const MultiSoma=(Array)=>Array.reduce((ac,valor)=>{
    if(cpfParaValidar.length===9){
    ac.push(Number(valor)*contador10);
    contador10--;
    return ac
}

    else{
    ac.push(Number(valor)*contador11);
    contador11--;
    return ac
    };
   
},[]).reduce((ac, valor)=> ac+=valor);

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







