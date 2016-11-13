const audioCtx = new (window.AudioContext || window.webkitAudioContext)

const play = frequency => {

  const osc = audioCtx.createOscillator()
  osc.frequency.value = frequency

  osc.start()
  osc.stop(audioCtx.currentTime + .5)

  osc.connect(audioCtx.destination)

}
