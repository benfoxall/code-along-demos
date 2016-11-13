const audioCtx = new (window.AudioContext || window.webkitAudioContext)

const osc = audioCtx.createOscillator()
osc.frequency.value = 440
