type PessoaProtocol<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

interface PessoaProtocol2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const pessoa: PessoaProtocol<string, number> = {
  nome: 'gustavo',
  sobrenome: 'kurek',
  idade: 21,
};
const pessoa1: PessoaProtocol2 = {
  nome: 'gustavo',
  sobrenome: 'kurek',
  idade: 21,
};

console.log(pessoa, pessoa1);
