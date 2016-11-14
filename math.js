export const scale = s => $M([
  [s, 0],
  [0, s]
])

export const rotate = theta => $M([
  [Math.cos(theta), -Math.sin(theta)],
  [Math.sin(theta), Math.cos(theta)],
])
