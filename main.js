const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
ctx.translate(canvas.width/2,canvas.height/2)

const drawPoint = p => ctx.fillRect(p[0]-2, p[1]-2, 4, 4)

/* * * * */

const points = [
  [-10,-10],
  [-10,+10],
  [+10,+10],
  [+10,-10]
]

points
  .forEach(drawPoint)
