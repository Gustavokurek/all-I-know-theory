// unknown é um any mais seguro, quando vc não souber com antecedÊncia alguma variável que vc irá receber, usar unknown, pq quando vc for utiliza-la, ele vai te obrigar a checar o tipo, diferente de any

let x: unknown;
x = 10;
x = '10';
x = '56';

const y = 65;
typeof x === 'number' ? console.log(x + y) : console.log('error');
