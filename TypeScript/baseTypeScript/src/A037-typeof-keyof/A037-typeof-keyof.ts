const cores = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

// pega a inferência do obj e transforma em tipo
type CoresObj = typeof cores;
// pega as somente as chaves de um Tipo e faz um outro tipo
type ChavesCores = keyof CoresObj;

export function traduzCores(cor: ChavesCores, objCores: CoresObj): string {
  return objCores[cor];
}

console.log(traduzCores('verde', cores));
