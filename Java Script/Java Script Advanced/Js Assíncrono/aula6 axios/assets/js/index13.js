// fetch("pessoas.json")
// .then(resposta=>{
//     return resposta.json()
// })
// .then(json=> carregaresultado(json))

axios('pessoas.json')
.then(json=> carregaresultado(json.data));


function carregaresultado(json){

    const table= document.createElement('table')
    const thead= document.createElement('thead')
        let tableHeaders = [
                'Nome',
                'Idade',
                'Salario'
            ];
        
            let tr= document.createElement('tr')
            thead.appendChild(tr)
            tableHeaders.forEach(header => {
                let scoreHeader = document.createElement('th')
                scoreHeader.innerText = header
                tr.appendChild(scoreHeader)
            })
        table.appendChild(thead)
    for (const pessoa of json){
        const tr=document.createElement('tr')

            
        let td=document.createElement('td')
        td.innerHTML= pessoa.nome;
        tr.appendChild(td)

        td=document.createElement('td')
        td.innerHTML= pessoa.idade;
        tr.appendChild(td)

        td=document.createElement('td')
        td.innerHTML= pessoa.salario;
        tr.appendChild(td)

        let tbody=document.createElement('tbody')
        tbody.appendChild(tr)

        table.appendChild(tbody)

        const resultado= document.querySelector('.resultado')
        resultado.appendChild(table)
    };

};