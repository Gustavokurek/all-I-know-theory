let Cpf='134.311.089-60';
let CpfReal=Cpf.replace(/\D/g, '')
const cpfArray= Array.from(CpfReal)
const cpfArrayCopy=[...cpfArray]
let contador11=11
let contador10=10

const CpfCut= cpfArrayCopy.splice(9,2)

const numMultiplicados=cpfArrayCopy.reduce((ac,valor)=>{
    if(cpfArrayCopy.length===9){
    ac.push(valor*contador10);
    contador10--;
    return ac}

    else{
    ac.push(valor*contador11);
    contador11--;
    return ac
    }
   
},[]);

const somaNumerosMultplicados=numMultiplicados.reduce((ac, valor)=> ac+valor)

const numeroUm=11-(somaNumerosMultplicados%11)>9 ?0 : 11-(somaNumerosMultplicados%11);
cpfArrayCopy.push(String(numeroUm))
console.log(numeroUm)

//====================================================

const numMultiplicados2=cpfArrayCopy.reduce((ac,valor)=>{
    if(cpfArrayCopy.length===9){
        ac.push(valor*contador10);
        contador10--;
        return ac}
        
        else{
            ac.push(valor*contador11);
            contador11--;
            return ac
        }
        
    },[]);
    
    const somaNumerosMultplicados2=numMultiplicados2.reduce((ac, valor)=> ac+valor)
    const numeroDois=11-(somaNumerosMultplicados2%11)>9 ?0 : 11-(somaNumerosMultplicados2%11);
    
    console.log(numeroDois)
    cpfArrayCopy.push(String(numeroDois))
    
    console.log(cpfArray)
    console.log(cpfArrayCopy)

    const resultado= cpfArray.join() === cpfArrayCopy.join() ? 'Cpf Válido': 'Cpf Inválido';
       
    console.log(resultado)




