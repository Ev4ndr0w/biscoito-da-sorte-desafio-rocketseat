const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const Tryagain = document.querySelector("#Tryagain")

const lucky = [
  "Eu assumo o comando. Custou caro me construir, façam o dinheiro valer a pena.",
  "Reyna, eu reconheço seu desempenho. O Brimstone me ordenou a isso.",
  "Os humanos se aliaram aos radiantes. Que mundo estranho.",
  "É sua segunda chance Brimstone. Não falharei com você de novo.",
  "Eu sei o que a Skye inimiga se torna. Acabe com ela agora, confie em mim.",
  "A Killjoy chama a tecnologia dela de robôs assassinos. Boa piada, engraçada.",
  "Omen, você é um guerreiro capaz. Ok, isso é tudo.",
  "Alvo Radiante detectado - ah, pera, é o Phoenix. Desculpe, amigo.",
]

fortuneCookie.addEventListener('click', handleTryClick)
Tryagain.addEventListener('click', handleResetClick)

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleTryClick()

  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }

})


function handleTryClick(event) {
  tooglecreen()
  pickluck()
}



function handleResetClick(event) {
  tooglecreen()
}


function pickluck() {
  let valorant = lucky.length
  let randomNumber = Math.floor(Math.random() * valorant)
  screen2.querySelector('h2').innerText = `${lucky[randomNumber]}`
}



function tooglecreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}