type obterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: obterChave = (objeto, chave) => objeto[chave];

const animal = {
  nome: 'dog',
  raça: 'pitbull',
  idade: 10,
};

const chave = obterChave(animal, 'idade');

console.log(chave);
