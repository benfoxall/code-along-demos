//+https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js

import {loop, drawEdges} from 'draw.js'
import {scale, rotate} from 'math.js'

const points = [
  [-10,-10,+10],
  [-10,+10,+10],
  [+10,+10,+10],
  [+10,-10,+10],

  [-10,-10,-10],
  [-10,+10,-10],
  [+10,+10,-10],
  [+10,-10,-10]
].map(v => $V(v))

const [p1, p2, p3, p4, p5, p6, p7, p8] = points
const edges = [
  [p1, p2], [p2, p3], [p3, p4], [p4, p1],
  [p5, p6], [p6, p7], [p7, p8], [p8, p5],
  [p1, p5], [p2, p6], [p3, p7], [p4, p8]
]

loop( time => {
  const t = scale(2).x(rotate(time/3000))

  drawEdges(edges, t)

})
