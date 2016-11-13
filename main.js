import {play} from 'audio.js'

const freq = document.createElement('input')
freq.type = 'number'
freq.value = 440
document.body.appendChild(freq)

const start = document.createElement('button')
start.innerText = 'play'
document.body.appendChild(start)

const onSubmit = (fn) => {
  start.addEventListener('click', e =>
    fn(freq.value)
  )
}

onSubmit( f => play(f) )
