import Sidebar from "../components/Sidebar";

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
    </div>
  );
}
