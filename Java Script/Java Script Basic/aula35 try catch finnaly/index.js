
    function dataSomeMoment(data){
    if(data && !(data instanceof Date)){
    throw new TypeError('é necessario o envio de uma data valida')
    }

    if(!data){
        data=new Date();
    };
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,

    })
    
}; 



try{ // executará quando não haver erros
const hora= dataSomeMoment();
const hora2= new Date('12-12-1980 22:10:12');
console.log(hora)
console.log(dataSomeMoment(hora2))
console.log(dataSomeMoment(45))
} catch(e) { // irá caprturar e será executado quando haver erros
    console.log("burro errou")
    // console.log(e)
}
finally{
    console.log(' finally: sempre sou mostrado');} // irá executar sempre