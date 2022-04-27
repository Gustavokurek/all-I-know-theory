// declaration merging é voce poder criar outra interface com um nome já existente
// que as interfaces iram se juntar
// diferentemente de types que não podem ter o nome de outra já existente

export interface pessoa {
  nome: string;
}

export interface pessoa {
  sobrenome: string;
}

export interface pessoa {
  readonly endereço: readonly string[];
}

export interface pessoa {
  idade?: number;
}

const pessoa1: pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Kurek',
  endereço: ['rua Ivaí'],
  idade: 21,
};

console.log(pessoa1);
