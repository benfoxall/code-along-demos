//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {ctx} from 'draw.js'

const drawPoint = p => ctx.fillRect(p.e(1)-2, p.e(2)-2, 4, 4)

const scale = s => $M([
  [s, 0],
  [0, s]
])

const rotate = theta => $M([
  [Math.cos(theta), -Math.sin(theta)],
  [Math.sin(theta), Math.cos(theta)],
])

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
