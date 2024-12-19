import { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import Music from "../../../assets/music/Minus.mp3";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(Music)); // Ensure the path matches your file

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{ isMuted, isPlaying, startMusic, toggleMute, audioRef }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

MusicPlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
