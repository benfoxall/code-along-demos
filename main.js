//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {ctx, loop} from 'draw.js'
import {scale, rotate} from 'math.js'

const drawPoint = p => ctx.fillRect(p.e(1)-2, p.e(2)-2, 4, 4)

const points = [
  [-10,-10],
  [-10,+10],
  [+10,+10],
  [+10,-10]
].map(v => $V(v))


loop( t => {
  const s = scale(2)
  const r = rotate(t/3000)

  points
    .map(p => s.multiply(p))
    .map(p => r.multiply(p))
    .forEach(drawPoint)
})
