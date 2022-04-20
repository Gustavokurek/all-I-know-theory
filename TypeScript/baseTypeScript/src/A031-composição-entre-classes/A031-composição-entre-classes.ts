// composição é uma ligação de classe em que a classe existe dentro da outra
// são completamente relacionadas,
// se um não existir o outro consequentemente também não existirá

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerando(): void {
    this.motor.acelerando();
  }

  parando(): void {
    this.motor.parando();
  }
}

export class Motor {
  ligar(): void {
    console.log('ligandoooooooo');
  }

  acelerando(): void {
    console.log('vrummmmmmmmmmmmmm');
  }

  parando(): void {
    console.log('thurummmmmmm');
  }
}

const BMW = new Carro();

BMW.ligar();
