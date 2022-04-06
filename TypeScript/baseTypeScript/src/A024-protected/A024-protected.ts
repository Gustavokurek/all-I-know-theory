export class Empresas {
  // usar protected quando eu quiser que algum dado possa ser extend para uma classe filha
  protected readonly colaboradores: Colaboradores[] = [];
  public readonly nome: string;
  private readonly CNPJ: string;

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

class Fake extends Empresas {
  constructor() {
    super('FAke', '13213215d46d4678');
  }

  popColaborador(): Colaboradores | null {
    // só consigo acessar algum atributo da classe pai se esse atributo for public ou protected
    const colaboradorPopado = this.colaboradores.pop();
    if (colaboradorPopado) return colaboradorPopado;
    return null;
  }
}

class Colaboradores {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Fake();
const colaborador = new Colaboradores('Guilherme', 'Del Toro');
const colaborador2 = new Colaboradores('Martin', 'Scorsese');
empresa1.addColaborador(colaborador);
empresa1.addColaborador(colaborador2);
// structural all type
empresa1.addColaborador({ nome: 'Quentin', sobrenome: 'Tarantino' });

const popado = empresa1.popColaborador();
console.log(popado);
