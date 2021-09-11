// const data= new Date(2020, 3, 8, 20) // ano, mes, dia, hora, min, segundo, ms
// console.log(data.toString())

// const data=new Date(1629669366680) // ta em ms, mas pode a data dentro de string ``


// console.log(`dia`, data.getDate());
// console.log(`mes`, data.getMonth()+1); // mês começa do zero
// console.log(`ano`, data.getFullYear());
// console.log(`hora`, data.getHours());
// console.log(`min`, data.getMinutes());
// console.log(`segundo`, data.getSeconds());
// console.log(`ms`, data.getMilliseconds());
// console.log(`dia da semana`, data.getDay()); // dia da semana começa domingo=0 sabado=6
// console.log(Date.now())
// console.log(data.toString())

function zeraL(num) {return num>=10 ? num :`0${num}`}

function formatadata(data) {
    const dia= zeraL(data.getDate());
    const mes=  zeraL(data.getMonth());
    const ano= zeraL(data.getFullYear());
    const hora= zeraL(data.getHours());
    const min= zeraL(data.getMinutes());
    const segundo= zeraL(data.getSeconds());
    return console.log(`${dia}-${mes}-${ano}  ${hora}:${min}:${segundo}`)
}

const data= new Date()
const dataBrasil= formatadata(data)
