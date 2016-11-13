import {play, analyser} from 'audio.js'
import {onSubmit} from 'form.js'

onSubmit( play )

const canvas = document.createElement('canvas')
canvas.style.position = 'static'
canvas.style.display = 'block'
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')
ctx.translate(0, canvas.height/2)
