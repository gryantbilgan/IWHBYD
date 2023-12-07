import React, { useRef } from "react";
import ReactPlayer from "react-player";

export default function MusicPlayer() {
  const audioPlayerRef = useRef(null);

  const handlePlay = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.seekTo(0);
      audioPlayerRef.current.getInternalPlayer().play();
      audioPlayerRef.current.unmute();
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>Play Music</button>
      <ReactPlayer
        ref={audioPlayerRef}
        url="/music/halo-theme.mp3"
        playing={false}
        loop={true}
        volume={0.3}
        controls={true}
        muted={true}
      />
    </div>
  );
}
