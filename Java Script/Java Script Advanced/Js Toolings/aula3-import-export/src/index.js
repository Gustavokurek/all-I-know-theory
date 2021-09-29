// import com o nome das coisas 
// usar "as" para renomear tanto na importação quanto exportação para prevenir possiveis conflitos


// importando tudo diretamente já, ira vir tudo dentro de um objeto
import * as meumodulo from './modulo1'

// imporatando padrão/ pegara somente a default 
import qualquer from './modulo1'

// imporatando padrão mais alguma coisa, nomeando o padrão sem chaves 
import qualquer, {nome, sobrenome, Pessoa } from './modulo1'

// impotação por cada nome exportado 
import { nome as nome2, sobrenome as sobrenome2, Pessoa, soma,  } from "./modulo1";
const nome='lucas';



