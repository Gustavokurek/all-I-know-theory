// não tipa com {} ou object, deixar inferir auto, ou tipa cada key dele

const continentesPaíses: {
  Europa: string[];
  SulAmericano: string[];
  //deixar opcional
  Oceania?: string[];
  // deixar em aberto para adicionar novas keys no obj
  // utilizar valor unknown como tipo
  [key: string]: unknown;
} = {
  Europa: ['França', 'Alemanha'],
  SulAmericano: ['Brasil', 'Argentina'],
};

continentesPaíses.Oceania = ['Austrália', 'nova Zelândia'];
continentesPaíses.Asia = ['japão', 'China'];
console.log(continentesPaíses);
