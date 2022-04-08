export class Pessoa {
  static CpfPadrão = '000.000.000-69';
  static idadePadrão = 0;
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
    public idade: number,
  ) {}

  static falaOI(): void {
    console.log('oiiiiiiii');
  }

  // tudo que for estático seja método ou atributo eu não instancio a classe
  // mas chamo ela dentro de Pessoa como se pessoa fosse o obj
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.CpfPadrão, Pessoa.idadePadrão);
  }
}

const pessoa = new Pessoa('Gustavo', 'Kurek', '145611064580', 50);
pessoa.cpf = '13435698457';
// métodos estáticos para usar a gente não precisa instanciar a classe
//
Pessoa.falaOI();
const pessoa2 = Pessoa.criaPessoa('gustavo', 'kurek');

console.log(pessoa.cpf);
console.log(pessoa2.cpf);
console.log(pessoa);
console.log(pessoa2);
