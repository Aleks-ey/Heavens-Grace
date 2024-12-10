import { useState, useRef, useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Music from "../assets/music/Minus.mp3";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to start music playback
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
        });
    }
  };

  // Function to toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  // Set up event listeners for user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isPlaying) {
        startMusic();
      }
    };

    // Add event listeners for clicks and touches
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={Music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play Button (only shown initially) */}
      {!isPlaying && (
        <Button
          variant="contained"
          color="primary"
          onClick={startMusic}
          className="bg-main text-white mb-0"
        >
          <PlayArrowIcon />
          Play Music
        </Button>
      )}

      {/* Mute/Unmute Button */}
      {isPlaying && (
        <IconButton
          onClick={toggleMute}
          color="primary"
          className="text-main bg-white p-2 rounded-full shadow-md"
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      )}
    </div>
  );
};

export default MusicPlayer;
