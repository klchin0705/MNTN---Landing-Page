const start = document.querySelector('.fixed-right ul li a:first-child')

start.addEventListener('click', function () {
  scrollTo(0, 0)
})

const fixed_left = document.querySelector('.fixed-left')

document.addEventListener('scroll', function () {
  if (window.scrollY >= 600) {
      fixed_left.style.opacity = 0
  } else {
      fixed_left.style.opacity = 1
    }
})

const sections = [
  document.querySelector('#start'),
  document.querySelector('#content-01'),
  document.querySelector('#content-02'),
  document.querySelector('#content-03')
]

const nav = document.querySelector('.navigation')

const items = document.querySelectorAll('.fixed-right li')
const items_a = document.querySelectorAll('.fixed-right li a')

function debounce(fn, delay) {
  let t = null
  return function () {
    clearTimeout(t)
    t = setTimeout(() => {
      fn()
    }, delay)
  }
}

const deb = debounce(indicator, 1)
window.onscroll = deb

function indicator() {
  // console.log('hi')
  
    let index = 0

  sections.forEach((sec, i) => {
    if (window.scrollY >= sec.offsetTop - 200) {   
      index = i
    }
  })

  nav.style.top = `${items[index].offsetTop}px`

  items_a.forEach(link => link.classList.remove('active'))
  items_a[index].classList.add('active')
}

const phone_btn = document.querySelector('.phone-right')
const phone_menu = document.querySelector('.menu-phone')
const nav_bar = document.querySelector('.nav')

phone_btn.addEventListener('click', function () {
  phone_menu.classList.toggle('active')
  nav_bar.classList.toggle('active')
  document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 840) {
    phone_menu.classList.remove('active')
    nav_bar.classList.remove('active')
    this.document.body.style.overflow = ''
  }
})