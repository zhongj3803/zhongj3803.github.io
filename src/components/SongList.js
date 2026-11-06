import React from "react";
import { TbPlayerPlayFilled, TbPlayerStopFilled } from "react-icons/tb";
import { songs } from "../content";

function SongList({ playing, onToggle }) {
  return (
    <ul className="songs" aria-label="Songs to play on the keyboard">
      {songs.map((song) => {
        const isPlaying = Boolean(playing) && playing.title === song.title;
        const Icon = isPlaying ? TbPlayerStopFilled : TbPlayerPlayFilled;
        return (
          <li key={song.title}>
            <button
              type="button"
              className={`song${isPlaying ? " is-playing" : ""}`}
              style={{
                "--c": `var(--${song.color})`,
                "--length": isPlaying ? `${playing.seconds}s` : undefined,
              }}
              aria-label={`${isPlaying ? "Stop" : "Play"} ${song.title} by ${song.artist}`}
              onClick={() => onToggle(song)}
            >
              <Icon aria-hidden="true" />
              <span className="song__title">{song.title}</span>
              <span className="song__artist">{song.artist}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SongList;
