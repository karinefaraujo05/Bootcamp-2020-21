
const objeto = {

  propriedade: [
    { 
        nome: "C++",
        especialidade: "Desktop"
        },
    { 
        nome: "JavaScript",
        especialidade: "Web/Mobile"
        },
    {
        nome: 'Python',
        especialidade: 'Data Science'
        } 
]
    };

const usuario = {
  nome: "Carlos",
  idade: 32
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${objeto.propriedade[0].nome} 
com especialidade em ${objeto.propriedade[0].especialidade}`)