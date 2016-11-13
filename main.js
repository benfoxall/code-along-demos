import {play, analyser} from 'audio.js'
import {onSubmit} from 'form.js'

onSubmit( play )

const canvas = document.createElement('canvas')
canvas.style.position = 'static'
canvas.style.display = 'block'
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
ctx.translate(0, canvas.height/2)

const drawWave = data => {
  ctx.clearRect(0,-canvas.height/2, canvas.width, canvas.height)
  ctx.beginPath()
  for(var i = 0; i < data.length; i++) {
    ctx.lineTo(
      (canvas.width/data.length*i),
      (data[i]*10)
    )
  }
  ctx.stroke()
}
