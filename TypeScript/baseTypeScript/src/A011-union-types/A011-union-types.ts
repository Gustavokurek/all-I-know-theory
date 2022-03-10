// union types, é quando vc permite uma variável a possibilidade de ter outro tipo, mas sem união

function addAndConcat(a: number | string, b: number | string): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(addAndConcat('56', 45));
console.log(addAndConcat('56', '45'));
console.log(addAndConcat(56, 45));
console.log(addAndConcat(89, '45'));
