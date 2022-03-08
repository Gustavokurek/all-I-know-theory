// never: usar para ocasião em q a função nunca vai retornar nada: ex: loop ou lançar error

export function lançaErro(): never {
  throw new Error('Opa aconteceu um erro');
}

lançaErro();
