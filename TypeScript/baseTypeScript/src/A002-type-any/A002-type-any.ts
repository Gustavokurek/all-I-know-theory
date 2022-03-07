// evitar any, pode desencadear erros
// quando tiver any em algo não vai compilar por configuração
// tipa sempre todos os any

function msg(msg: string) {
  return msg;
}

console.log(msg('vc vai vencer'));
