// const multiplica= require('./mod')
// console.log(multiplica(3,5))

// arquivo pasta atual
console.log(__dirname);
// arquivo file atual
console.log(__filename);

const nana= require('./B/D/E/mod2') // navendo por pastas
const CriaCachorro= require('./mod')

const c1= new CriaCachorro('tobby');
console.log(c1.latir())