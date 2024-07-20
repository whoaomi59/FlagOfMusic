import {
  BookmarkIcon,
  BuildingLibraryIcon,
  HomeIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({
  showResults,
  playlist,
  currentVideoIndex,
  setCurrentVideoIndex,
}) => {
  const sidebarItems = [
    { title: "Home", icon: <HomeIcon class="h-6 w-6" /> },
    { title: "Library", icon: <BuildingLibraryIcon class="h-6 w-6" /> },
  ];
  return (
    <div
      className="md:h-screen h-auto md:w-[350px] w-full bg-[#121212] md:absolute block md:left-0 top-0 p-5 z-30"
      style={{
        overflowY: "scroll",
      }}
    >
      <div className="w-full flex flex-col gap-7 md:px-0 px-3">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-center gap-3 cursor-pointer"
            >
              {item.icon}
              <span className="font-medium text-[#b3b3b3] text-[14.5px]">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <hr className="border-[#b3b3b3] my-7 opacity-30" />
      <div className="w-full flex flex-col gap-7 md:px-0 px-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookmarkIcon class="h-6 w-6 text-gray-500" />
            <span className="font-medium text-[#b3b3b3] text-[14px]">
              Saved Albums
            </span>
          </div>
          <PlusCircleIcon class="h-6 w-6 text-gray-500" />
        </div>
        {showResults && (
          <>
            {playlist.map((item, index) => (
              <>
                {index === currentVideoIndex ? (
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={""}
                        className="rounded-md w-[50px]"
                      />
                      <div className="flex flex-col justify-center items-start gap-1">
                        <span className="font-medium text-blue-500 text-[15px]">
                          {item.title}
                        </span>
                        <span className="font-medium text-blue-500 text-[13px]">
                          12 Likes
                        </span>
                      </div>
                    </div>
                    <button onClick={() => setCurrentVideoIndex(index)}>
                      <MinusCircleIcon class="h-6" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={""}
                        className="rounded-md w-[50px]"
                      />
                      <div className="flex flex-col justify-center items-start gap-1">
                        <span className="font-medium text-[#b3b3b3]  text-[15px]">
                          {item.title}
                        </span>
                        <span className="font-medium text-[#b3b3b3] text-[13px]">
                          12 Likes
                        </span>
                      </div>
                    </div>

                    <button onClick={() => setCurrentVideoIndex(index)}>
                      <MinusCircleIcon class="h-6" />
                    </button>
                  </div>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
