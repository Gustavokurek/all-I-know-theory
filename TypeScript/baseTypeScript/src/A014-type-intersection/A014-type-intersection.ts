// intersection type é como se fosse o union types só que como and &
// faz a intersecção de algo ou obriga algo a ter tudo como se fosse um operador msm

//ex:

type Idade = { Idade: number };
type Nome = { Nome: string };
type Casado = { Casado: boolean };

type pessoa = Idade & Nome & Casado;

const persona: pessoa = { Nome: 'Gustavo', Idade: 22, Casado: true };
console.log(persona);

// interseção
type AB = 'A' | 'B';
type CA = 'C' | 'A';
// AS é o que têm em AB e CA
type AS = AB & CA;

console.log();
