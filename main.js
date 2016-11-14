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
