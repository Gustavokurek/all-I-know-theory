const { async } = require("regenerator-runtime");

function  promisee() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Entrou carai")
            resolve()
        }, 2000);
    })
    
}

export default async function (params) {
    await promisee()
    console.log('acabo porrra')
}