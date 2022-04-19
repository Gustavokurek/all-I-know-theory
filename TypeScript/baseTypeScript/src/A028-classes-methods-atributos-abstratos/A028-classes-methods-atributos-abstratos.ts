export abstract class Personagem {
  // class abstract não é concreta então não posso instanciar ela, somente
  // posso extender ela para uma nova classe que será uma classe concreta

  protected abstract emoji: string;
  // atributo abstract é um atributo que vai ser único e requerido em cada
  // classe concreta construído da super classe abstract

  constructor(
    protected nome: string,
    protected forçaDeAtaque: number,
    protected vida: number,
  ) {}

  protected abstract bordão(): void;
  // method abstract é um method que precisa ser sem corpo e retornar void
  // pq ele vai ser único e requerido em cada classe concreta construído da super classe abstract

  atacar(personagem: Personagem): void {
    console.log(this.emoji + this.nome + ' está Atacando ');
    this.bordão();
    personagem.tirarVida(this.forçaDeAtaque);
  }

  tirarVida(forçaDeAtaque: number): void {
    if (this.vida > 0) {
      this.vida -= forçaDeAtaque;
      console.log(
        this.emoji + this.nome + ' está sofrendo Ataque, vida em ' + this.vida,
      );
    } else console.log(this.nome + ' está morto ');
  }
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD} ';
  protected bordão(): void {
    console.log(this.emoji + 'Sinta o poder da minha espada criatura ridícula');
  }
}
export class Mago extends Personagem {
  protected emoji = '\u{1F9D9} ';

  protected bordão(): void {
    console.log(this.emoji + 'pirapum dilum vire merda');
  }
}

const guerreira = new Guerreira('Guerreira', 250, 1000);
const mago = new Mago('Mago', 250, 1000);

guerreira.atacar(mago);
guerreira.atacar(mago);
guerreira.atacar(mago);
mago.atacar(guerreira);
mago.atacar(guerreira);
mago.atacar(guerreira);
