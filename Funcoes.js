const alunosB = [ {
    nome: 'Karine', //ou " "
    nota: 9.8
    },
{
    nome: 'Rodrigo',
    nota: 10
 },
 {
    nome: 'Carla',
    nota: 6
 },
  {
    nome: 'Kaka',
    nota: 0
   } ]

const alunosA = [ {
    nome: 'Ana', //ou " "
    nota: 9
    },
{
    nome: 'Bianca',
    nota: 5
 },
 {
    nome: 'Rodrigo',
    nota: 4
 },
  {
    nome: 'PH',
    nota: 0
   },
   {
    nome: 'Paola',
    nota: 5
 }, ]

//function calculodamedia(alunos) {
 //   return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
  //  }

function calculodamedia(alunos){
    let soma = 0;
    for(let i=0; i<alunos.length; i++){
        soma = soma + alunos[i]. nota
    }
    const media = soma/alunos.length
   return media 
}

const media1= calculodamedia(alunosB)
const media2= calculodamedia(alunosA)

function enviaMensagem(media) {
  if (media>5){
      console.log(`A nota foi de ${media}. Parabéns`)
  } else {
       console.log('A média foi menor que 5')
  }
  }

 enviaMensagem(media1)
 enviaMensagem(media2)
