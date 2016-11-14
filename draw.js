const canvas = document.createElement('canvas')
export const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

let ratio, w, h

const size = _ => {
  ratio = window.devicePixelRatio || 1

  w = canvas.width = window.innerWidth * ratio
  h = canvas.height = window.innerHeight * ratio

  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`
  ctx.translate(canvas.width/2,canvas.height/2)
  ctx.scale(ratio,ratio)
}
size()

window.addEventListener('resize', size)

export const clear = () => {
  ctx.clearRect(-w/2,-h/2,w,h)
}


export function loop(fn){
  requestAnimationFrame(function wrapped(t){
    clear()
    requestAnimationFrame(wrapped)
    fn(t)
  })
}


export const drawEdges = (edges, transform) => {
  ctx.beginPath()
  edges
  .map(e => e.map(p => transform.multiply(p)))
  .forEach( ([a,b]) => {
    ctx.moveTo(a.e(1), a.e(2))
    ctx.lineTo(b.e(1), b.e(2))
  })
  ctx.stroke()
}
