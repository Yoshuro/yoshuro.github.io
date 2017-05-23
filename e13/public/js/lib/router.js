import { loadImages } from './gallery'

export default () => {
  const links = [...document.querySelectorAll('.nav__link')]
  const sections = [...document.querySelectorAll('section')]
  const title = document.querySelector('.nav__title')

  let currentPage = 'home'

  function removeAnimation() {
    this.classList.remove('slidein')
    this.removeEventListener('animationend', removeAnimation)
  }

  function handleClick() {
    const target = this.getAttribute('data-target')

    // wykop jeśli wybierze obecnie otwartą stronę
    if (target === currentPage) return

    // zaktualizuj zmienną i tytuł
    currentPage = target
    title.textContent = this.textContent

    // dodaj klasę aktywnemu linkowi
    links.forEach((link) => {
      link.classList.remove('nav__link--active')
      if (link.getAttribute('data-target') === target) {
        link.classList.add('nav__link--active')
      }
    })

    // schowaj nie potrzebne sekcje i pokaż odpowiednią
    sections.forEach((section) => {
      section.classList.add('hidden')
      if (section.id === target) {
        section.classList.remove('hidden')
        section.classList.add('slidein')
        section.addEventListener('animationend', removeAnimation)

        // załaduj zdjęcie do galerii
        if (target === 'gallery') {
          loadImages()
        }
      }
    })
  }

  links.forEach(link =>
    link.addEventListener('click', handleClick))
}
