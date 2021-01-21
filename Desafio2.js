const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  //console.log(`${usuarios[0].nome} trabalha com ${usuarios[0].tecnologias}`)
  //console.log(`${usuarios[1].nome} trabalha com ${usuarios[1].tecnologias}`)
  //console.log(`${usuarios[2].nome} trabalha com ${usuarios[2].tecnologias}`)
  for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}
  
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologias of usuario.tecnologias) {
        if (tecnologias == "CSS") return true} 
        return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
        

  


  