// type tuple
// é um array só que meio restrito

//ex:
// fica restrito a add do modo normal
const dadosPessoa: [string, number] = ['Gustavo', 21];
// dadosPessoa[2] = 65; não vai add, mas pop e push funcionam
const dadosPessoa1: [string, number] = ['Gustavo', 21];
// posso alterar o conteúdo a não que use como readonly
dadosPessoa1[0] = 'lucas';

const dadosPessoa2: readonly [string, number] = ['Gustavo', 21];
// fica imutável
// dadosPessoa2[0] = 'lucas';

const dadosPessoa3: [string, number, string?] = ['Gustavo', 21];
// deixando como opcional
dadosPessoa3[2] = 'Daniel';

const dadosPessoa4: [string, number, ...string[]] = ['Gustavo', 21];
// deixando aberto como se fosse um array
dadosPessoa4[3] = 'lucas';

console.log(dadosPessoa);
console.log(dadosPessoa1);
console.log(dadosPessoa2);
console.log(dadosPessoa3);
console.log(dadosPessoa4);
