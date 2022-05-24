const array: Array<number> = [1, 223, 5, 46, 4, 56];
console.log(array);

async function async() {
  return 1;
}

async function myAsync(): Promise<number> {
  return new Promise((resolve) => {
    resolve(1);
  });
}

myAsync().then((r) => console.log(r));
async().then((result) => console.log(result));
