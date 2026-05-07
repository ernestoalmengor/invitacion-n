import React, { useRef, useState, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0.5;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}
    >
      <audio ref={audioRef} loop>
        <source src="/music/fondo.mp3" type="audio/mpeg" />
      </audio>
      <div
        onClick={togglePlay}
        style={{
          width: "55px",
          height: "55px",
          background: "var(--primary)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.3s",
        }}
      >
        <i
          className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}
          style={{ color: "white", fontSize: "1.5rem" }}
        ></i>
      </div>
    </div>
  );
};

export default MusicPlayer;
