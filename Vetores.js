
const alunos = [ {
    nome: 'Karine', //ou " "
    nota: 9.8
    },
{
    nome: 'Rodrigo',
    nota: 10
 },
  {
    nome: 'Kaka',
    nota: 2
   } ]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if (media>5){
    console.log(`A nota foi de ${media}. Parabéns`)
} else {
    console.log('A média foi menor que 5')
}

console.log(media<5)

const nomedealunos = ['Karine','Rodrigo','Kaka']
console.log(nomedealunos)

console.log(alunos)
