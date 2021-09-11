
    function SomeMoment(){
        let data= new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}; 

const data= setInterval(function(){
    console.log(SomeMoment())
}, 1000)

setTimeout(function(){
    clearInterval(data)
}, 5000)


