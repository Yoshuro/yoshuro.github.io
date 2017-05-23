export default () => {
  // kompensacja za padding na sekcji
  const width = window.innerWidth * 0.96
  const height = 9/16 * width

  // nadanie rozmiarów canvasowi
  const canvas = document.querySelector('#draw')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  let isDrawing = false
  let direction = false
  let lastX = 0
  let lastY = 0
  let hue = 0

  // ustawienia linii
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = 30

  // funcja pomocnicza do rysowania linii
  const line = (x, y) => {
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  function draw(e) {
    // rysuj tylko przy wcisniętym przycisku myszy
    if (!isDrawing) return

    // nadaj nowy kolor
    ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`

    // narysuj linię
    line(e.offsetX, e.offsetY)

    // zaktualizuj ostatnie koordynaty
    ;[lastX, lastY] = [e.offsetX, e.offsetY]

    // zmiana rozmiaru linii
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if(direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
  }

  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mousedown', (e) => {
      isDrawing = true
      ;[lastX, lastY] = [e.offsetX, e.offsetY]
  })
  // puszcznie klawisza
  canvas.addEventListener('mouseup', () => isDrawing = false)
  // wyjscie z pola
  canvas.addEventListener('mouseout', () => isDrawing = false)
}
