export class Calc {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  mult(n: number): this {
    this.number *= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalc extends Calc {}
const calc = new SubCalc(32);

// permite chamadas em corrente
console.log(calc.add(5).mult(5));
console.log(calc);
