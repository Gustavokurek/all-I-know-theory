export class Empresas {
  // duas formas de instanciar
  // longa
  // posso instanciar direto sem o constructor
  private readonly colaboradores: Colaboradores[] = [];

  // com o constructor
  public readonly nome: string;
  protected readonly CNPJ: string;

  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }

  // method para poder acessar uma informação private
  addColaborador(colaborador: Colaboradores): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaboradores {
  // modo rápido, faz tudo direto
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresas('Gustavo', '4654687464321');
const colaborador = new Colaboradores('Guilherme', 'del Toro');
const colaborador2 = new Colaboradores('Guilherme', 'del Toro');
empresa1.addColaborador(colaborador);
empresa1.addColaborador(colaborador2);
// structural all type
empresa1.addColaborador({ nome: 'lupo', sobrenome: 'Kursk' });
// acessando o nome que é uma informação public ou seja não precisa de um method para usa-la
console.log(empresa1.nome);
// acessando private
console.log(empresa1.mostrarColaboradores());
