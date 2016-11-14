export const scale = s => $M([
  [s, 0, 0],
  [0, s, 0],
  [0, 0, s]
])

export const rotate = theta => $M([
  [Math.cos(theta), -Math.sin(theta), 0],
  [Math.sin(theta),  Math.cos(theta), 0],
  [0,                0,               1],
])
