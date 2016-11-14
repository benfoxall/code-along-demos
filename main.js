//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {ctx} from 'draw.js'
import {scale, rotate} from 'math.js'

const drawPoint = p => ctx.fillRect(p.e(1)-2, p.e(2)-2, 4, 4)

const points = [
  [-10,-10],
  [-10,+10],
  [+10,+10],
  [+10,-10]
].map(v => $V(v))

points
  .map(p => scale(2).multiply(p))
  .map(p => rotate(Math.PI/4).multiply(p))
  .forEach(drawPoint)
