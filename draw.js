const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

export const ctx = canvas.getContext('2d')
ctx.translate(canvas.width/2,canvas.height/2)

ctx.rotate(1)
