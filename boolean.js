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
    nome: 'Ana', 
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

 function Marcarcomoreprovado(aluno){
    aluno.reprovado = false
    if (aluno.nota<5){
    aluno.reprovado = true
    } 
}

 function enviaMensagemAlunoReprovado(aluno){
     if(aluno.reprovado){
         console.log(`O Aluno ${aluno.nome} foi reprovado!`)
     }
 }

 function alunoReprovado(alunos){
     for (let aluno of alunos){
         Marcarcomoreprovado(aluno),
         enviaMensagemAlunoReprovado(aluno)
     }
 }
 

 alunoReprovado(alunosB)
 alunoReprovado(alunosA)
