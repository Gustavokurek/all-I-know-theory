// associação é uma ligação entre classes fraca, em que elas não dependem necessariamente uma da outra
export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta) {
      this.ferramenta.escrever();
    } else console.log('o escritor precisa de uma ferramenta para escrever ');
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`escrevendo com ${this.nome} ...`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`digitando com ${this.nome} ...`);
  }
}

const escritor = new Escritor('Shakespeare');
const caneta = new Caneta('bic');
const maquina = new MaquinaEscrever('Pc');

escritor.ferramenta = caneta;
escritor.escrever();
