export default function PLayList({
  showResults,
  playlist,
  currentVideoIndex,
  setCurrentVideoIndex,
}) {
  return (
    <>
      {showResults && (
        <>
          {playlist.map((item, index) => (
            <>
              {index === currentVideoIndex ? (
                <div
                  className="bg-gray-600 rounded-lg p-4 flex flex-col"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt="Album Cover"
                    className="w-full mb-4 rounded-lg"
                  />
                  {index === currentVideoIndex ? (
                    <h3 className="text-blue-600 font-semibold">
                      {item.title} (Reproduciendo...)
                    </h3>
                  ) : (
                    <h3 className="font-semibold">{item.title}</h3>
                  )}
                  <p className="text-sm">Artista, {item.autor}</p>
                  <button
                    type="button"
                    class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-gray-900 text-white rounded hover:bg-blue-600"
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    Reproduciendo......
                  </button>
                </div>
              ) : (
                <div
                  className="bg-gray-800 rounded-lg p-4 flex flex-col"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt="Album Cover"
                    className="w-full mb-4 rounded-lg"
                  />{" "}
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm">Artista, {item.autor}</p>
                  <button
                    type="button"
                    class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-gray-900 text-white rounded hover:bg-blue-600"
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    Reproducir
                  </button>
                </div>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
}
