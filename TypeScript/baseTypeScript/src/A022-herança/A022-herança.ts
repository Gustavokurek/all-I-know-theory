export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly CPF: string,
    protected readonly idade: number,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.CPF;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// polimorfismo
export class Aluno extends Pessoa {
  // herdando todos os atributos e métodos de pessoa e alterando o que precisar
  getNomeCompleto(): string {
    return 'Nome completo do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Nome completo do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gustavo', 'Kurek', '145611064580', 50);
const aluno = new Aluno('Guilherme', 'Kurek', '145611064580', 50);
const cliente = new Cliente('Matheus', 'Kurek', '145611064580', 50);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
