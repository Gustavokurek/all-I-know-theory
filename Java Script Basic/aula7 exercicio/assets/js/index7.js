let num1= prompt('digite sua nota no primeiro bimestre')
let num2= prompt('digite sua nota no segundo bimestre')
let num3= prompt('digite sua nota no terceiro bimestre')
let num4= prompt('digite sua nota no quarto bimestre')

let soma= Number(num1) + Number(num2) + Number(num3) + Number(num4)
let media= soma / 4

alert(`a nota total foi de ${soma}`)
alert(`a media foi de ${media}`)