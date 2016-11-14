const ratio = window.devicePixelRatio || 1
const canvas = document.createElement('canvas')
const w = canvas.width = window.innerWidth * ratio
const h = canvas.height = window.innerHeight * ratio

canvas.style.width = `${window.innerWidth}px`
canvas.style.height = `${window.innerHeight}px`
document.body.appendChild(canvas)

export const ctx = canvas.getContext('2d')
ctx.translate(canvas.width/2,canvas.height/2)
ctx.scale(ratio,ratio)

ctx.rotate(1)
