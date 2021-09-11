const nome= 'Gustavo'
const sobrenome='kurek'

const idade= 20
const AnoAtual= 2021
const peso= 80
const altura= 1.80
let IMC;
let nascimento;

nascimento= AnoAtual - idade
IMC= peso/(altura*altura)

// templete strings ${ }

console.log(`ola me chamo ${nome} ${sobrenome} tenho ${idade} anos de idade, nasci no ano de  ${nascimento} tenho ${altura} de altura, ${peso} kgs, e meu indice de massa comporal é  ${IMC}`)