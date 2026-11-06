import React, { useCallback, useEffect, useRef, useState } from "react";
import { LEAD_IN_SECONDS, playNote, playVoices, wakeAudio } from "../sound";
import SongList from "./SongList";

// One octave of white keys. Every C is blue, every D lavender, and so on, so a
// pitch keeps its color across the keyboard.
const OCTAVE = [
  { name: "C", semitone: 0, color: "blue", sharp: true },
  { name: "D", semitone: 2, color: "lavender", sharp: true },
  { name: "E", semitone: 4, color: "mint" },
  { name: "F", semitone: 5, color: "peach", sharp: true },
  { name: "G", semitone: 7, color: "blue", sharp: true },
  { name: "A", semitone: 9, color: "lavender", sharp: true },
  { name: "B", semitone: 11, color: "pink" },
];

const MIDDLE_C = 60;
const TOP_OF_CORE = 76;

// The usual "musical typing" layout: home row for white keys, row above for black.
const TYPING_KEYS = {
  a: 60, w: 61, s: 62, e: 63, d: 64, f: 65, t: 66,
  g: 67, y: 68, h: 69, u: 70, j: 71, k: 72,
};

// Three octaves from C3. Styles hide the outer tiers on narrower screens, so
// phones keep C4 to E5, where most of the preset melodies sit.
function tierOf(midi) {
  if (midi < MIDDLE_C) return "wide";
  return midi > TOP_OF_CORE ? "medium" : "core";
}

function buildKeyboard() {
  const keys = [];
  for (let octave = 3; octave <= 5; octave += 1) {
    OCTAVE.forEach((note) => {
      const midi = 12 * (octave + 1) + note.semitone;
      keys.push({
        midi,
        color: note.color,
        label: `${note.name}${octave}`,
        tier: tierOf(midi),
        sharp: note.sharp ? { midi: midi + 1, label: `${note.name} sharp ${octave}` } : null,
      });
    });
  }
  keys.push({ midi: 84, color: "blue", label: "C6", tier: "medium", sharp: null });
  return keys;
}

const KEYBOARD = buildKeyboard();
const TAP_RELEASE_MS = 170;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Black keys borrow the color of the white key to their left.
const NOTE_COLORS = {};
KEYBOARD.forEach(({ midi, color, sharp }) => {
  NOTE_COLORS[midi] = color;
  if (sharp) NOTE_COLORS[sharp.midi] = color;
});

// Turns "Eb5" into 75, the number the keyboard and the synth use for that pitch.
function noteToMidi(note) {
  const [, letter, accidental, octave] = note.match(/^([A-G])([b#]?)(\d)$/);
  const { semitone } = OCTAVE.find(({ name }) => name === letter);
  const shift = { "#": 1, b: -1, "": 0 }[accidental];
  return 12 * (Number(octave) + 1) + semitone + shift;
}

// Turns a preset's measures into one entry per slot, with null for a held slot.
function parseVoice(measures) {
  const slots = measures.join(" ").split(" ");
  return slots.map((slot) => (slot === "-" ? null : noteToMidi(slot)));
}

function Piano() {
  const [held, setHeld] = useState(() => new Set());
  const [floating, setFloating] = useState([]);
  const [playing, setPlaying] = useState(null);
  const root = useRef(null);
  const visible = useRef(true);
  const dragNote = useRef(null);
  const floatId = useRef(0);
  const stopSong = useRef(null);
  const latestRequest = useRef(0);

  const showNote = useCallback((midi) => {
    setHeld((notes) => new Set(notes).add(midi));

    // Each note sends a note head drifting up the page.
    const key = root.current.querySelector(`[data-midi="${midi}"]`);
    const { left, width } = key.getBoundingClientRect();
    if (!width || reducedMotion.matches) return;
    floatId.current += 1;
    const note = {
      id: floatId.current,
      x: left + width / 2,
      drift: floatId.current % 2 ? 26 : -26,
      color: NOTE_COLORS[midi],
    };
    setFloating((notes) => [...notes, note]);
  }, []);

  const press = useCallback(
    (midi) => {
      playNote(midi);
      showNote(midi);
    },
    [showNote]
  );

  const release = useCallback((midi) => {
    setHeld((notes) => {
      const next = new Set(notes);
      next.delete(midi);
      return next;
    });
  }, []);

  const tap = useCallback(
    (midi) => {
      press(midi);
      window.setTimeout(() => release(midi), TAP_RELEASE_MS);
    },
    [press, release]
  );

  // The sound is queued up front, and timers move the keys along with it.
  // Slots are eighth notes, so two fit in each beat unless a preset says otherwise.
  const playSong = (song) => {
    const voices = [song.measures, song.bass].filter(Boolean).map(parseVoice);
    const slots = Math.max(...voices.map((notes) => notes.length));
    const seconds = 60 / song.bpm / (song.slotsPerBeat || 2);
    const gap = seconds * 1000;
    const leadIn = LEAD_IN_SECONDS * 1000;
    const stopAudio = playVoices(voices, seconds);

    const timers = [];
    voices.forEach((notes) => {
      notes.forEach((midi, index) => {
        if (midi === null) return;
        let length = 1;
        while (notes[index + length] === null) length += 1;
        timers.push(window.setTimeout(() => showNote(midi), leadIn + index * gap));
        timers.push(window.setTimeout(() => release(midi), leadIn + (index + length - 0.2) * gap));
      });
    });
    const finish = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      stopSong.current = null;
      setPlaying(null);
    };
    timers.push(window.setTimeout(finish, leadIn + slots * gap));

    stopSong.current = () => {
      stopAudio();
      finish();
      setHeld(new Set());
    };
    setPlaying({ title: song.title, seconds: slots * seconds });
  };

  // Only the latest press counts, in case another comes while the audio wakes up.
  const toggleSong = (song) => {
    const wasPlaying = playing && playing.title === song.title;
    if (stopSong.current) stopSong.current();
    latestRequest.current += 1;
    const request = latestRequest.current;
    if (wasPlaying) return;
    wakeAudio().then(() => {
      if (request === latestRequest.current) playSong(song);
    });
  };

  const noteAt = (event) => {
    const midi = event.target.dataset && event.target.dataset.midi;
    return midi ? Number(midi) : null;
  };

  // Mouse and pen play on press and can glide across the keys.
  // Touch plays on lift, so swiping the page from the keyboard stays silent.
  const onPointerDown = (event) => {
    const midi = noteAt(event);
    if (midi === null || event.pointerType === "touch") return;
    event.preventDefault();
    dragNote.current = midi;
    press(midi);
  };

  const onPointerOver = (event) => {
    const midi = noteAt(event);
    if (dragNote.current === null || midi === null || midi === dragNote.current) return;
    release(dragNote.current);
    dragNote.current = midi;
    press(midi);
  };

  const onPointerUp = (event) => {
    const midi = noteAt(event);
    if (event.pointerType === "touch" && midi !== null) tap(midi);
  };

  // The keys stay out of the tab order, since typing plays them without focus.
  // Screen readers can still activate one, which arrives as a click with no pointer.
  const onClick = (event) => {
    const midi = noteAt(event);
    if (event.detail === 0 && midi !== null) tap(midi);
  };

  useEffect(() => {
    const stopDrag = () => {
      if (dragNote.current === null) return;
      release(dragNote.current);
      dragNote.current = null;
    };
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
    return () => {
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
    };
  }, [release]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const midi = TYPING_KEYS[event.key.toLowerCase()];
      const modified = event.metaKey || event.ctrlKey || event.altKey;
      if (midi && visible.current && !event.repeat && !modified) press(midi);
    };
    const onKeyUp = (event) => {
      const midi = TYPING_KEYS[event.key.toLowerCase()];
      if (midi) release(midi);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [press, release]);

  // Typing only plays while the keyboard is on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="piano" ref={root}>
      <div className="piano__bar">
        <SongList playing={playing} onToggle={toggleSong} />
        <p className="piano__hint">
          <span className="piano__hint-mouse">These keys work. Click, drag, or type A to K.</span>
          <span className="piano__hint-touch">These keys work. Tap one.</span>
        </p>
      </div>
      <div className="piano__notes" aria-hidden="true">
        {floating.map(({ id, x, drift, color }) => (
          <span
            className="note"
            key={id}
            style={{ left: x, "--drift": `${drift}px`, "--c": `var(--${color})` }}
            onAnimationEnd={() => setFloating((notes) => notes.filter((note) => note.id !== id))}
          />
        ))}
      </div>
      <div
        className="piano__keys"
        role="group"
        aria-label="Playable piano keyboard"
        onPointerDown={onPointerDown}
        onPointerOver={onPointerOver}
        onPointerUp={onPointerUp}
        onClick={onClick}
      >
        {KEYBOARD.map((key, index) => (
          <div
            className="piano__slot"
            data-tier={key.tier}
            key={key.midi}
            style={{ "--n": index }}
          >
            <button
              type="button"
              className={`key key--white${held.has(key.midi) ? " is-down" : ""}`}
              style={{ "--c": `var(--${key.color})` }}
              data-midi={key.midi}
              aria-label={key.label}
              tabIndex={-1}
            />
            {key.sharp && (
              <button
                type="button"
                className={`key key--black${held.has(key.sharp.midi) ? " is-down" : ""}`}
                data-midi={key.sharp.midi}
                aria-label={key.sharp.label}
                tabIndex={-1}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Piano;
