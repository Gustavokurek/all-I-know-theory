export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private _cpf: string,
    private idade: number,
  ) {
    // chamando o setter direto
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('Setter chamando');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('Getter chamando');
    return this._cpf;
  }
}

const pessoa = new Pessoa('Gustavo', 'Kurek', '145611064580', 50);
pessoa.cpf = '13435698457';

console.log(pessoa.cpf);
console.log(pessoa);
