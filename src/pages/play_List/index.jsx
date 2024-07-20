import { MinusCircleIcon } from "@heroicons/react/24/outline";

export default function PLayList({
  showResults,
  playlist,
  currentVideoIndex,
  setCurrentVideoIndex,
}) {
  return (
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
      {" "}
      {showResults && (
        <>
          {playlist.map((item, index) => (
            <>
              {index === currentVideoIndex ? (
                <div>
                  <img
                    src={item.img}
                    class="w-32 h-32 rounded-full inline-block"
                  />

                  <div class="py-4">
                    <h4 class="text-gray-700 text-base font-bold">
                      {item.title}
                    </h4>
                    <div class="space-x-4 mt-4">
                      <button
                        onClick={() => setCurrentVideoIndex(index)}
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-700 hover:bg-gray-200"
                      >
                        <MinusCircleIcon class="h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src={item.img}
                    class="w-32 h-32 rounded-full inline-block"
                  />

                  <div class="py-4">
                    <h4 class="text-gray-200 text-base font-bold">
                      {item.title}
                    </h4>
                    <div class="space-x-4 mt-4">
                      <button
                        onClick={() => setCurrentVideoIndex(index)}
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-700 hover:bg-gray-200"
                      >
                        <MinusCircleIcon class="h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </>
      )}
    </div>
  );
}
