// quando vc tiver que dar ctz em algum tipo, quando vc for mexer com dom por ex

// pode ser null
// const body = document.querySelector('body');
// body.style.color = 'red';

// opções recomendadas
//checar se não é nulo
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// type assertion
// usar como ctz
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.color = 'blue';

// não recomendado
// non-null-assertion não permite que algo seja nulo
const body4 = document.querySelector('body')!;
body4.style.color = 'blue';

// usar type assertion para mudar o type para algo que não tenha sentido
const body3 = document.querySelector('body') as unknown as number;
body3.toFixed;
