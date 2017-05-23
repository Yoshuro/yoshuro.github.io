export const loadImages = () => {
  const images = [...document.querySelectorAll('.gallery__image')]
  const file = images[0].getAttribute('data-src').split('/').pop()
  const src = images[0].src.split('/').pop()

  // funkcja już została wcześniej wykonana
  if (file === src) return

  // zamień każdemu zdjeciu w galerii źrodło z placeholdera na normalne
  images.forEach((image) => {
    image.src = image.getAttribute('data-src')
  })
}
