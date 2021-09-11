//Isso funciona:

// Contexto superior (qualquer nível)
const nome = 'Luiz';
 
{
  console.log(nome);
}
//Isso funciona:

{
  // Mesmo contexto
  const nome = 'Luiz';
  console.log(nome);
}

//Isso NÃO funciona porque a variável foi declarada em um contexto diferente de onde estou chamando ela (fora das chaves)

// Contextos diferentes
{
  const nome = 'Luiz';
}
console.log(nome);