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
    console.log('fazendo maracutaias hahahhaaha');
    // usando super para pegar algo do elemento Pai depois de mexer em algo
    const nomeCompleto = super.getNomeCompleto();
    return nomeCompleto + ' hahahaha';
  }
}
export class Cliente extends Pessoa {
  constructor(
    // não passar modificadores de acesso pq eles vão ser criados no elemento pai
    nome: string,
    sobrenome: string,
    CPF: string,
    idade: number,
    // atributo exclusivo de Cliente
    public readonly sala: number,
  ) {
    // quando eu precisar criar um atributo em algo que ja herda de alguém preciso
    // repassar os dados exigidos pelo elemento pai no super
    super(nome, sobrenome, CPF, idade);
  }
  getNomeCompleto(): string {
    return 'Nome completo do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gustavo', 'Kurek', '145611064580', 50);
const aluno = new Aluno('Guilherme', 'Kurek', '145611064580', 50);
const cliente = new Cliente('Matheus', 'Kurek', '145611064580', 50, 23);

console.log(pessoa);
console.log(aluno.getNomeCompleto());
console.log(cliente);
