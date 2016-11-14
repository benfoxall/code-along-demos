//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {ctx} from 'draw.js'

const drawPoint = p => ctx.fillRect(p.e(1)-2, p.e(2)-2, 4, 4)

const points = [
  [-10,-10],
  [-10,+10],
  [+10,+10],
  [+10,-10]
].map(v => $V(v))

points
  .forEach(drawPoint)
