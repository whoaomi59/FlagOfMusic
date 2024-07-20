import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";

export default function TrackMusic() {
  return (
    <div className="musics">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button class="p-3 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none">
          <BackwardIcon className="w-5" />
        </button>
        <button className="p-4 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none mx-4">
          <PauseCircleIcon className="w-7" />
        </button>
        <button class="p-3 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none">
          <ForwardIcon className="w-5" />
        </button>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `122%` }}></div>
        </div>{" "}
        <div className="volumen">
          <SpeakerXMarkIcon className="w-6" />
          <input
            type="range"
            className="w-full"
            min="0"
            max="100"
            id="myRange"
          />
          <SpeakerWaveIcon className="w-6" />
        </div>
      </div>
    </div>
  );
}
