// type
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

type PessoaCompleta = TipoPessoa & TipoNomeCompleto;

// interface
interface InterfacePessoa2 {
  nome: string;
  sobrenome: string;
  idade: number;
}

interface InterfaceNomeCompleto {
  nomeCompleto(): string;
}

interface PessoaCompleta2 extends InterfacePessoa2, InterfaceNomeCompleto {}

export class Pessoa implements PessoaCompleta2 {
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
