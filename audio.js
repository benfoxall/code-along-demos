const audioCtx = new (window.AudioContext || window.webkitAudioContext)

export const analyser = audioCtx.createAnalyser()
analyser.connect(audioCtx.destination)

export const play = frequency => {

  const osc = audioCtx.createOscillator()
  osc.frequency.value = frequency

  osc.start()
  osc.stop(audioCtx.currentTime + .5)

  osc.connect(analyser)

}
