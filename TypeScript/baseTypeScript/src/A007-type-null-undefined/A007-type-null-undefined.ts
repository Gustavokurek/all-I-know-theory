//undefined usar mais para checagem ex:

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 20);

export function CreatePerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// usar quando vc quiser retornar um não valor, ou para quando vc não conseguir o valor  e não quiser q retorne um erro

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (squareOfTwo === null) {
  console.log('conta inválida');
} else {
  console.log(squareOfTwo, squareOfTwo - 56);
}
