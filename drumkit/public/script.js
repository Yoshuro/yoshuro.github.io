'use strict'

const app = (function() {
    function init() {
        const keys = document.querySelectorAll('.key')
        window.addEventListener('keydown', dispatch)

        keys.forEach(key => {
            key.addEventListener('click', dispatch)
            key.addEventListener('transitionend', removeTransition)
        })
    }

    function dispatch(e) {
        let keyCode = e.keyCode
        if(e.type === 'click')
            keyCode = this.getAttribute('data-key')
        const key = document.querySelector(`.key[data-key="${keyCode}"]`)
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`)

        if(!audio) return

        key.classList.add('playing')
        audio.currentTime = 0
        audio.play()
    }

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return
        this.classList.remove('playing')
    }

    return {
        init
    }
})()

document.addEventListener('DOMContentLoaded', app.init)
