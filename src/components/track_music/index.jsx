import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";

export default function TrackMusic() {
  return (
    <div className="w-full fixed bottom-0 bg-[#000] h-20 md:py-[44px] py-2 px-5 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <img
          src={"https://i.ytimg.com/vi/GHlN4RKgH0o/maxresdefault.jpg"}
          className="rounded-md w-[65px]"
          alt="music"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 w-full">
          <BackwardIcon width="37px" />
          <PauseCircleIcon width="60px" />
          <ForwardIcon width="37px" />
          <div className="flex items-center w-full gap-2">
            <span className="text-[#b3b3b3] text-[14px] font-medium md:block hidden">
              00:00
            </span>
            <div className="md:w-[950px] w-[110px] bg-[#4d4d4d] rounded-md h-[6px] relative cursor-pointer">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded-md"
                style={{ width: `100%` }}
              ></div>
            </div>
            <span className="text-[#b3b3b3] text-[14px] font-medium md:block hidden">
              100:00
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <SpeakerXMarkIcon className="w-6" />
        <input type="range" min="0" max="100" />
        <SpeakerWaveIcon className="w-6" />
      </div>
    </div>
  );
}
