export default () => {
  const menuBtnText = document.querySelector('.nav__button-text')
  const nav = document.querySelector('.nav')
  const navList = document.querySelector('.nav__list')
  const shade = document.querySelector('.shade')
  let navOpen = false

  nav.addEventListener('click', (evt) => {
    // kliknięty został guzik menu
    if (evt.target.classList.contains('nav__button') ||
        evt.target.classList.contains('nav__button-text')
    ) {
      evt.preventDefault()

      // odwraca obeny stan zmiennej i na jej podstawie dopsowuje klasy
      navOpen = !navOpen
      menuBtnText.textContent = (navOpen) ? 'close' : 'menu'
      navList.classList.toggle('show')

      if (navOpen) {
        shade.classList.remove('hidden')
      } else {
        shade.classList.add('hidden')
      }

    // klieknięta została pozostała część nawigacji
    } else {
      navOpen = false
      menuBtnText.textContent = 'menu'
      navList.classList.remove('show')
      shade.classList.add('hidden')
    }
  })
}
