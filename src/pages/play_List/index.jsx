import { MinusCircleIcon } from "@heroicons/react/24/outline";

export default function PLayList({
  showResults,
  playlist,
  currentVideoIndex,
  setCurrentVideoIndex,
}) {
  return (
    <div className="w-full flex flex-col md:gap-4 gap-6 px-2">
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold text-[20px]">{"Resultados"}</span>
        <a href="#" className="text-[#1ed760] text-[13.5px] font-medium">
          See More
        </a>
      </div>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:gap-12 max-md:justify-center mt-16">
        {showResults && (
          <>
            {playlist.map((item, index) => (
              <>
                {index === currentVideoIndex ? (
                  <a onClick={() => setCurrentVideoIndex(index)}>
                    <div class="flex gap-6 overflow-hidden cursor-pointer">
                      <div class="w-24 h-24 shrink-0 bg-gray-800 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
                        <img
                          src={item.img}
                          alt="product1"
                          class="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 class="text-base font-bold text-blue-500">
                          {item.title}
                        </h3>
                        <h4 class="text-lg text-gray-600 font-bold mt-2">
                          {item.autor}
                        </h4>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a onClick={() => setCurrentVideoIndex(index)}>
                    <div class="flex gap-6 overflow-hidden cursor-pointer">
                      <div class="w-24 h-24 shrink-0 bg-gray-800 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
                        <img
                          src={item.img}
                          alt="product1"
                          class="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 class="text-base font-bold text-gray-100">
                          {item.title}
                        </h3>
                        <h4 class="text-lg text-gray-600 font-bold mt-2">
                          {item.autor}
                        </h4>
                      </div>
                    </div>
                  </a>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
