// literal types: é um tipo que usa com tipo um subtipo de algum tipo ex:

// tipo do x vai ser o subtipo de number, que é o 10
const x = 10 as const;
console.log(x);

const yu = 'Tigre' as const;
console.log(yu);

// usando union types e literal types como enum e deixando código mais seguro, não correndo o risco de ter algum retorno indesejado como 'undefined', como ocorre no enum
function escolha(cor: 'vermelho' | 'rosa' | 'limão'): string {
  return cor.toUpperCase();
}

console.log(escolha('limão'));

const características = {
  nome: 'Gustavo' as const,
  idade: 18,
};

características.nome = 'Gustavo';

export default x;
