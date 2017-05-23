function handleSubmit(evt) {
  // anuluj wysłanie formularza
  evt.preventDefault()

  // zakończ jeśli już zostało raz skończone
  const submitBtn = document.querySelector('.form__submit')
  if (submitBtn.classList.contains('form__submit--done')) return

  const form = document.querySelector('.form')
  const submitIcon = document.querySelector('.form__submit-icon')

  // wyczysc wszystkie pola formularza
  form.reset()

  submitBtn.classList.add('form__submit--loading')

  // symulacja wysylania formularza
  setTimeout(() => {
    submitBtn.classList.remove('form__submit--loading')
    submitBtn.classList.add('form__submit--done')
    submitIcon.textContent = 'check'
  }, 1500)
}

export default () => {
  document
    .querySelector('.form__submit')
    .addEventListener('click', handleSubmit)
}
