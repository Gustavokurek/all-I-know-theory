const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const conteudo= document.querySelector('.conteiner')
const div=document.createElement('div')

for(let i=0; i<elementos.length; i++) //ou for(let i in elementos)
{
    let {tag, texto}=elementos[i];
    let criaE=document.createElement(tag)
    criaE.innerHTML/* ou InnerText*/ =texto
    let CriaT=document.createTextNode(texto)
    criaE.appendChild(CriaT)
    div.appendChild(criaE)
    
}

conteudo.appendChild(div)