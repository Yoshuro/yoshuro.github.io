// import wszystkich funkcji
import router from './lib/router'
import form from './lib/form'
import nav from './lib/nav'
import draw from './lib/draw'

import styles from '../styles/style.styl'

function init() {
  router()
  form()
  nav()
  draw()

  // jeśli przeglądarka obsługuje service workera - zarejestruj go
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
  }
}

document.addEventListener('DOMContentLoaded', init)
