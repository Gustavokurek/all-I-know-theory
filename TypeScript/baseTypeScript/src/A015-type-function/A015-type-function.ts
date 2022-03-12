type mapStringCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackFn: mapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    newArray.push(callbackFn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const resultado = mapString(abc, (item) => item.toLowerCase());

console.log(resultado);
