// enum: tipo para usar quando eu precisar enumerar alguma coisa, se não precisar, não preciso indicar o numero da enumeração, irá começar do 0 em diante, ou podendo enumerar com string tbm
// iniciar com maiúscula

enum Lista {
  casa = 0,
  pc = 'casa',
  note = 1,
  mouse,
}

//console.log(Lista[446545]);
// é um pouco insegura pelo fato de retornar undefined quando não encontra algo dentro de sua estrutura

function encontrar(obj: Lista): void {
  console.log(Lista[obj]);
}

encontrar(465465);
