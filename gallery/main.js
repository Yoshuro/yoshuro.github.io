'use strict'

function togglePanel() {
    this.classList.toggle('open')
}

function toggleActive(e) {
    // browser inconsistency => flex || flex-grow
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
}

function init() {
    const panels = document.querySelectorAll('.panel')

    panels.forEach(panel => {
        panel.addEventListener('click', togglePanel)
        panel.addEventListener('transitionend', toggleActive)
    })
}

document.addEventListener('DOMContentLoaded', init)
