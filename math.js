export const scale = s => $M([
  [s, 0, 0],
  [0, s, 0],
  [0, 0, s]
])

export const rotateX = theta => $M([
  [1,                0,               0],
  [0, Math.cos(theta), -Math.sin(theta)],
  [0, Math.sin(theta),  Math.cos(theta)],
])

export const rotateY = theta => $M([
  [Math.cos(theta), 0, -Math.sin(theta)],
  [0,               1,                0],
  [Math.sin(theta), 0,  Math.cos(theta)],
])

export const rotateZ = theta => $M([
  [Math.cos(theta), -Math.sin(theta), 0],
  [Math.sin(theta),  Math.cos(theta), 0],
  [0,                0,               1],
])

const pM = $M([
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0.005,0.995]
])

export const perspective = v => {
  const v4 = pM.x($V(v.elements.concat(1)))

  return v4.x(v4.e(4))
}
