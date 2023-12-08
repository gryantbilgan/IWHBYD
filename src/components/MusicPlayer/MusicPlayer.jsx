import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function MusicPlayer() {
  const audioPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4">
      <div className="max-w-screen-md mx-auto">
        <button
          onClick={handleTogglePlay}
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
        <ReactPlayer
          ref={audioPlayerRef}
          url="/music/halo-theme.mp3"
          playing={isPlaying}
          loop={true}
          volume={0.1}
          controls={false}
          muted={false}
          className={`mt-4 ${isPlaying ? "block" : "hidden"}`}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
    </div>
  );
}
