'use strict'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let isDrawing = false
let direction = true
let lastX = 0
let lastY = 0
let hue = 0

const line = (x,y) => {
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(x, y)
    ctx.stroke()
}

function init() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 30

    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
        ;[lastX, lastY] = [e.offsetX, e.offsetY]
    })
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)
}

function draw(e) {
    if(!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    line(e.offsetX, e.offsetY)
    ;[lastX, lastY] = [e.offsetX, e.offsetY]
    hue++

    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if(direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }

}

document.addEventListener('DOMContentLoaded', init)
