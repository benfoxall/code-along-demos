//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {ctx, loop} from 'draw.js'
import {scale, rotate} from 'math.js'

const drawPoint = p => ctx.fillRect(p.e(1)-2, p.e(2)-2, 4, 4)

const drawEdge = ([a,b]) => {
  ctx.beginPath()
  ctx.moveTo(a.e(1), a.e(2))
  ctx.lineTo(b.e(1), b.e(2))
  ctx.stroke()
}

const points = [
  [-10,-10],
  [-10,+10],
  [+10,+10],
  [+10,-10]
].map(v => $V(v))

const [p1, p2, p3, p4] = points
const edges = [[p1, p2], [p2, p3], [p3, p4], [p4, p1]]

loop( time => {
  const t = scale(2).x(rotate(time/3000))

  points
    .map(p => t.multiply(p))
    .forEach(drawPoint)
})
