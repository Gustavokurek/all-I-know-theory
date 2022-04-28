// type guards
// if ( in )
// instanceof
// tipo literal dentro do type

type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};

type Animal = {
  tipo: 'animal';
  cor: string;
};

type PessoaouAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
  tipo: 'pessoa' = 'pessoa';
}

function mostraNome(obj: PessoaouAnimal): void {
  // refinando tipos
  // if ( in ) perguntando se existe aquela chave dentro do arg
  //if ('nome' in obj) return console.log(obj.nome);

  // se o obj vier de uma instancia de ALuno, se ele foi Criado pela class Aluno
  //if (obj instanceof Aluno) return console.log(obj.nome);

  //criando um tipo dentro do objeto antes para depois selecionar o certo
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(obj.cor);
  }
}

mostraNome({ tipo: 'animal', cor: 'beje' });
