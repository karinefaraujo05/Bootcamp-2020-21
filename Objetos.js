const aluno = {
    nome: 'Karine', //ou " "
    nota: 9.8
}

const aluno1 = {
    nome: 'Rodrigo',
    nota: 7
}

const aluno2 = {
    nome: 'KaKa',
    nota: 10
}

const media = (aluno.nota + aluno1.nota + aluno2.nota) / 3

if (media>5){
    console.log(`A nota foi de ${media}. Parabéns`)
} else {
    console.log('A média foi menor que 5')
}

