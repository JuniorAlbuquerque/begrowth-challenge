let show = true

const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menu.classList.toggle('open', show)
  show = !show
})
