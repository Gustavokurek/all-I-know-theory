// quando vc não souber o tipo de algo que virá, usar generics
// que o js vai inferir na hora q tudo chegar

type FilterCallback<U> = {
  (value: U, index?: number, array?: U[]): boolean;
};

export function Filter<T>(
  array: T[],
  callbackfunction: FilterCallback<T>,
): T[] {
  const novoArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackfunction(element)) {
      novoArray.push(element);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5];

const valor = Filter(array, (value) => value > 2);
console.log(valor);
