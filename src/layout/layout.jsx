import Sidebar from "../components/Sidebar";
import PLayList from "../pages/play_List";
import Page404 from "./404";

export default function Layout({
  showResults,
  playlist,
  currentVideoIndex,
  setCurrentVideoIndex,
}) {
  return (
    <div className="w-full h-full text-white relative">
      <Sidebar
        showResults={showResults}
        playlist={playlist}
        currentVideoIndex={currentVideoIndex}
        setCurrentVideoIndex={setCurrentVideoIndex}
      />
      <div className="text-white md:pl-[370px] pl-5 px-5 py-5 flex flex-col w-full gap-5">
        <div
          className="w-full rounded-xl md:h-[calc(100vh-140px)] h-auto flex flex-col items-center gap-5 px-5 md:py-5 pb-20 pt-5"
          style={{
            overflowY: "scroll",
            background: "#000000a8",
          }}
        >
          {" "}
          {playlist.length > 0 ? (
            <div className="w-full flex flex-col gap-8">
              <div
                className="w-full relative bg-cover bg-center rounded-xl md:h-[200px] h-[100px]"
                style={{ backgroundImage: `url('/img/banner2.png')` }}
              />
              <PLayList
                showResults={showResults}
                playlist={playlist}
                currentVideoIndex={currentVideoIndex}
                setCurrentVideoIndex={setCurrentVideoIndex}
              />
            </div>
          ) : (
            <div
              className="w-full relative bg-cover bg-center rounded-xl md:h-[200px] h-[100px]"
              style={{ backgroundImage: `url('/img/banner2.png')` }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
