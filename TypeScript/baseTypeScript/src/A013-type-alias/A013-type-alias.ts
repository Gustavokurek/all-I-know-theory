// type alias é vc criar seu próprio tipo, para deixar seu código mais limpo

type Idade = number;
type pessoal = {
  nome: string;
  idade: Idade;
  profissão?: Profissão;
  salário: number;
};

type ProfissõesBoas = 'Jogador' | 'Médico' | 'Politico';
type ProfissõesRuins = 'Pedreiro' | 'empacotador' | 'Peão';
type Profissão = ProfissõesBoas | ProfissõesRuins;

const pessoa: pessoal = {
  idade: 21,
  nome: 'Gustavo',
  salário: 2000_000,
};

const setarProf = (pessoa: pessoal, profissão: Profissão) => {
  return { ...pessoa, profissão: profissão };
};

console.log(setarProf(pessoa, 'Jogador'));
console.log(pessoa);

export default 1;
