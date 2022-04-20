type TipoPessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

// quando usar types alias utilizar implements
// types servem basicamente para informar atributos que terá dentro da classe
// não é possível alterar de public
export class Pessoa implements TipoPessoa, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Gustavo', 'Kurek', 21);

console.log(pessoa1.nomeCompleto());
