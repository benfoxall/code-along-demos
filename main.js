const audioCtx = new (window.AudioContext || window.webkitAudioContext)

const osc = audioCtx.createOscillator()
osc.frequency.value = 440

osc.start()
osc.stop(audioCtx.currentTime + .5)

osc.connect(audioCtx.destination)
