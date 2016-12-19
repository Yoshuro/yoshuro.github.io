'use strict'

const clock = (function() {
    function init() {
        this.secondHand = document.querySelector('.second')
        this.minuteHand = document.querySelector('.minute')
        this.hourHand = document.querySelector('.hour')

        this.digital = document.querySelector('.digital-clock')
        this.display = document.querySelector('.display')

        setInterval(setTime.bind(this), 1000)
    }

    function setTime() {
        const now = new Date()

        const second = now.getSeconds()
        const secondDeg = ((second/60)*360) + 90 // offset initial rotate

        const minute = now.getMinutes()
        const minuteDeg = ((minute/60)*360) + 90

        const hour = now.getHours()
        const hourDeg = ((hour/12)*360) + 90

        this.secondHand.style.transform = `rotate(${secondDeg}deg)`
        this.minuteHand.style.transform = `rotate(${minuteDeg}deg)`
        this.hourHand.style.transform = `rotate(${hourDeg}deg)`

        const h = (hour < 10) ? "0" + hour : hour
        const m = (minute < 10) ? "0" + minute : minute
        const s = (second < 10) ? "0" + second : second
        this.display.textContent = `${hour}:${m}:${s}`
        this.body.style.background = `#${h}${m}${s}`
    }

    return {
        init,
        setTime
    }
})()

document.addEventListener('DOMContentLoaded', clock.init)
