// type array
// array<tipo> || tipo[]

//ex:

export function multiplicaNúmeros(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}
export function concatenarString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function uppercase(...args: string[]): string[] {
  return args.map((ValorQueVouAlterar) =>
    ValorQueVouAlterar.toLocaleUpperCase(),
  );
}

const result = multiplicaNúmeros(5, 4, 5);
const result1 = concatenarString('5', 'lulip', 'lalalal');
const result2 = uppercase('5', 'lulip', 'lalalal');

console.log(result);
console.log(result1);
console.log(result2);
