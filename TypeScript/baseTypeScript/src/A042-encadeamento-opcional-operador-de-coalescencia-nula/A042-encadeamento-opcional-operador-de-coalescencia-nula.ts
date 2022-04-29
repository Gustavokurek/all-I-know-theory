type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc: Documento = {
  titulo: 'O Título',
  texto: 'loren ipsun',
};

// encadeamento opcional
// se existir a possibilidade da chave do objeto ser nulo ou undefined,
// usar um sinal de interrogação antes para parar nele
// antes de chamar qualquer coisa
console.log(doc.data?.toDateString());

// operador de coalescência  nula
// se o operador a esquerda de "??" for null ou undefined
// vai executar o que estiver a direita dele
console.log(doc.data?.toDateString() ?? 'ixe deu ruin');
