// type void = sem retorno

function retornar(...args: string[]): void {
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    console.log(element);
  }
  console.log(args);
}

retornar('gustavo', 'lúcio', 'maradona', 'messi');

const nome2 = {
  nome: 'Gustavo',
  sobrenome: 'Kurek',

  juntarNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

nome2.juntarNome();
