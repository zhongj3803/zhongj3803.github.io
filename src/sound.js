// A small synthesized piano, so the site doesn't need to load any audio files.
// The audio context is created on the first note because browsers only allow
// sound after the visitor has interacted with the page.

let context = null;
let output = null;

const HEADROOM = 4;

// A short gap before a melody starts, so its first note isn't scheduled late.
export const LEAD_IN_SECONDS = 0.05;

// A soft clipper, so big chords round off instead of distorting while quiet
// notes pass through unchanged. A compressor would dull the very first note,
// because it starts up with its gain still recovering.
function softClipCurve() {
  const curve = new Float32Array(1024);
  for (let i = 0; i < curve.length; i += 1) {
    const input = (i / (curve.length - 1)) * 2 - 1;
    curve[i] = Math.tanh(input * HEADROOM);
  }
  return curve;
}

function getContext() {
  if (!context) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;

    context = new AudioContext();
    output = context.createGain();

    // A quiet echo gives the dry tone a sense of room.
    const echo = context.createDelay(1);
    const feedback = context.createGain();
    const wet = context.createGain();
    const mix = context.createGain();
    const clipper = context.createWaveShaper();
    echo.delayTime.value = 0.19;
    feedback.gain.value = 0.26;
    wet.gain.value = 0.14;
    mix.gain.value = 1 / HEADROOM;
    clipper.curve = softClipCurve();

    output.connect(mix);
    output.connect(echo);
    echo.connect(feedback);
    feedback.connect(echo);
    echo.connect(wet);
    wet.connect(mix);
    mix.connect(clipper);
    clipper.connect(context.destination);
  }

  if (context.state === "suspended") context.resume();
  return context;
}

// Each note is a stack of sine waves. As on a real piano, the upper harmonics
// fade first, which is what makes the tone go from bright to round.
const HARMONICS = [
  { ratio: 1, level: 1, decay: 2.6 },
  { ratio: 2, level: 0.4, decay: 1.5 },
  { ratio: 3, level: 0.14, decay: 0.8 },
  { ratio: 4, level: 0.06, decay: 0.45 },
];

export function midiToFrequency(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function strike(audio, midi, time, destination) {
  const frequency = midiToFrequency(midi);
  // Higher notes ring for less time.
  const ring = 1.3 - (midi - 48) / 60;

  HARMONICS.forEach(({ ratio, level, decay }) => {
    const oscillator = audio.createOscillator();
    const envelope = audio.createGain();
    const end = time + decay * ring;

    oscillator.frequency.value = frequency * ratio;
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(0.2 * level, time + 0.008);
    envelope.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(envelope);
    envelope.connect(destination);
    oscillator.start(time);
    oscillator.stop(end + 0.02);
  });
}

export function playNote(midi) {
  const audio = getContext();
  if (audio) strike(audio, midi, audio.currentTime, output);
}

// Resolves once the audio clock is running. A new context takes a moment to
// start, and anything timed before then would run ahead of the sound.
export function wakeAudio() {
  const audio = getContext();
  return audio ? audio.resume() : Promise.resolve();
}

// Queues a whole song on the audio clock, which keeps the rhythm exact even if
// the page is busy. Each voice is a list of notes, and a null in one is a step
// with no new note. Returns a function that fades the song out.
export function playVoices(voices, secondsPerNote) {
  const audio = getContext();
  if (!audio) return () => {};

  const song = audio.createGain();
  const start = audio.currentTime + LEAD_IN_SECONDS;
  song.connect(output);
  voices.forEach((notes) => {
    notes.forEach((midi, index) => {
      if (midi !== null) strike(audio, midi, start + index * secondsPerNote, song);
    });
  });

  return () => song.gain.setTargetAtTime(0, audio.currentTime, 0.04);
}
