const questionTitle = document.querySelector('#question')
const ball = document.querySelector('#title-ball')
const divAnswer = document.querySelector('.answers')
const modal = document.querySelector('.modal')
let resp1 = document.querySelector('#resp_1')
let resp2 = document.querySelector('#resp_2')
let resp3 = document.querySelector('#resp_3')

const st1 = document.querySelector('.st-1')

const move = () => {
  st1.style.left = '15%'
  st1.style.transform = 'translateX(50%)'
  st1.style.borderRadius = '0px'
}

const move2 = () => {
  st1.style.left = '30%'
  st1.style.transform = 'translateX(100%)'
  st1.style.borderBottomLeftRadius = '0px'
  st1.style.borderBottomRightRadius = '20px'
}

const answers = [
  {
    primeira: {
      qst1: 'O que é mais importante para você?',
      ans1:
        '<div class="answer" onclick="change(2, 1)">Limite de Crédito Alto</div>',
      ans2: '<div class="answer" onclick="change(2, 2)">Sem anuidade</div>',
      ans3: '<div class="answer" onclick="change(2, 3)">Milhas aéreas</div>',
    },
    segunda: {
      qst2: 'Em qual grupo você se encaixa?',
      ans1:
        '<div class="answer" onclick="change(3, 1)">Aposentado / Pensonista / Servidor Público</div>',
      ans2:
        '<div class="answer" onclick="change(3, 2)">Concurseiro / Estudante universitário</div>',
      ans3:
        '<div class="answer" onclick="change(3, 3)">Carteira assinada / Autonomo / Empreendedor</div>',
      ans4:
        '<div class="answer" onclick="change(3,4)">Estou Desempregado</div>',
    },
    terceira: {
      qst3: 'Você está negativado?',
      ans1: '<div class="answer" onclick="change(4, 1)">Sim</div>',
      ans2: '<div class="answer" onclick="change(4, 2)">Não</div>',
    },
  },
]

const change = (question, value) => {
  if (question == 1) {
    questionTitle.innerHTML = answers[0].primeira.qst1
    ball.innerHTML = 1
    divAnswer.innerHTML =
      answers[0].primeira.ans1 +
      answers[0].primeira.ans2 +
      answers[0].primeira.ans3
  } else if (question == 2) {
    resp1.value = value
    move()
    questionTitle.innerHTML = answers[0].segunda.qst2
    ball.innerHTML = 2
    divAnswer.innerHTML =
      answers[0].segunda.ans1 +
      answers[0].segunda.ans2 +
      answers[0].segunda.ans3 +
      answers[0].segunda.ans4
  } else if (question == 3) {
    resp2.value = value
    move2()
    questionTitle.innerHTML = answers[0].terceira.qst3
    ball.innerHTML = 3
    divAnswer.innerHTML = answers[0].terceira.ans1 + answers[0].terceira.ans2
    const lastAnswer = document.querySelectorAll('.answer')
    lastAnswer.forEach((key) => {
      key.addEventListener('click', () => {
        setTimeout(() => {
          modal.classList.toggle('active')
        }, 200)
      })
    })
  } else if (question == 4) {
    resp3.value = value
  }
}

const sendData = () => {
  var link = ''

  if (resp1.value == 1) {
    link = 'https://utua.com.br/cartao-de-credito-nubank/'
  } //Limite Alto
  if (resp1.value == 2) {
    link = 'https://utua.com.br/cartao-de-credito-meu-bmg/'
  } //Sem anuidade
  if (resp1.value == 3) {
    link = 'https://utua.com.br/cartao-de-credito-c6/'
  } //Milhas Aereas
  if (resp2.value == 1 && resp3.value == 1) {
    link = 'https://utua.com.br/cartao-negativado-bmg/'
  } // Negativado
  if (
    (resp2.value == 2 || resp2.value == 3 || resp2.value == 4) &&
    resp3.value == 1
  ) {
    link = 'https://utua.com.br/cartao-negativado-superdigital/'
  }

  window.location.href = link
}

window.onclick = function (event) {
  if (event.target == modal || event.target == modal) {
    modal.classList.toggle('active')
  }
}

change(1)
