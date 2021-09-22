const Pessoas=[
    {id: 4, nome:'Gutsvao'},
    {id: 3, nome:'Guilherme'},
    {id: 2, nome:'julia'},
    {id: 1, nome:'lica'}
]

const novaspessoas={};

// for ( const {id, nome} of Pessoas){
//     novaspessoas[id]= {id, nome};
// }

// for(const Pessoa of Pessoas){
//     const {id}=Pessoa;
//    novaspessoas[id]={...Pessoa};
// }



const novaspessoas1=new Map();
for ( const {id, nome} of Pessoas){
    novaspessoas1.set(id, {id, nome});
}
             // chaves                       //. keys/ .values
for (const [id1, {id, nome}] of novaspessoas1){
    // console.log(id1, id, nome)
}

// novaspessoas1.delete(2);

// console.log(novaspessoas1)






