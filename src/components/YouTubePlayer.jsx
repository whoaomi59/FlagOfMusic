import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";
import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";

const YouTubePlayer = ({
  videoId,
  onPlay,
  onPause,
  onEnd,
  currentVideoIndex,
  AnterioPlay,
  SiguientePlay,
  playlist,
}) => {
  const playerRef = useRef(null);
  const [valVol, setVlue] = useState("");
  const [status, setStatus] = useState(true);
  const [progress, setProgress] = useState(0);
  console.log("🚀 ~ YouTubePlayer ~ progress:", progress);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const duration = playerRef.current.getDuration();
        const currentTime = playerRef.current.getCurrentTime();
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
      }
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      if (onPlay) onPlay();
      setStatus(true);
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
      if (onPause) onPause();
      setStatus(false);
    }
  };

  const handleVolumeChange = (e) => {
    if (playerRef.current) {
      playerRef.current.setVolume(e.target.value);
      setVlue(e.target.value);
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />
      <div className="volumen">
        <SpeakerXMarkIcon className="w-6" />
        <input
          type="range"
          className="w-full"
          min="0"
          max="100"
          onChange={handleVolumeChange}
          id="myRange"
        />
        <SpeakerWaveIcon className="w-6" />
      </div>
      <div className="flexx p-2">
        {currentVideoIndex > 0 && (
          <button
            class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={AnterioPlay}
          >
            <BackwardIcon className="w-5" />
          </button>
        )}
        {status ? (
          <button
            className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4"
            onClick={handlePause}
          >
            <PauseCircleIcon className="w-7" />
          </button>
        ) : (
          <button
            className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4"
            onClick={handlePlay}
          >
            <PlayIcon className="w-7" />
          </button>
        )}
        {currentVideoIndex < playlist.length - 1 && (
          <button
            class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={SiguientePlay}
          >
            <ForwardIcon className="w-5" />
          </button>
        )}
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>{" "}
      </div>{" "}
      <div class="flex justify-between mt-2 text-sm text-gray-600">
        <span>1:57</span>
        <span>3:53</span>
      </div>
    </div>
  );
};

export default YouTubePlayer;
