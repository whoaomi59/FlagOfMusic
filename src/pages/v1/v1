// src/App.js
import React, { useState, useEffect } from "react";
import YouTubePlayer from "./components/YouTubePlayer";
import "./App.css";
import {
  BackwardIcon,
  ForwardIcon,
  MusicalNoteIcon,
  RadioIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

const KEY = "AIzaSyBpiMLwFIt0tCEtFXU5L_gQkiaReQNy5GI";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  console.log("🚀 ~ App ~ currentVideoIndex:", currentVideoIndex);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        searchQuery
      )}&maxResults=50&key=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          const videoData = data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title, // Añade el título de la canción
            img: item.snippet.thumbnails.default.url,
          }));
          setPlaylist(videoData); // Ahora es un array de objetos con id y title
          setSearchQuery(""); // Limpia el campo de búsqueda
          setShowResults(true);
        }
      })
      .catch((error) => console.error("Error fetching video info:", error));
  };

  useEffect(() => {
    if (playlist.length > 0 && playlist[currentVideoIndex]) {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${playlist[currentVideoIndex].id}&key=${KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.items.length > 0) {
            setVideoInfo(data.items[0]);
          }
        })
        .catch((error) => console.error("Error fetching video info:", error));
    }
  }, [playlist, currentVideoIndex]);

  const SiguientePlay = () => {
    if (currentVideoIndex < playlist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const AnterioPlay = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const CambiarPlay = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="App">
      <header className="App-header p-6">
        <div class="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Introduce el nombre de la canción"
            class="w-full outline-none bg-white pl-4 text-sm"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] px-6 py-8 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <div class="flex flex-wrap items-center gap-4">
              <h3 class="text-xl font-bold flex-1 text-gray-800">Resultados</h3>
            </div>
            {showResults && (
              <div class="mt-8 space-y-4">
                {playlist.map((item, index) => (
                  <div
                    key={index}
                    class="flex flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4"
                  >
                    <img src={item.img} class="w-10 h-10 rounded-full" />{" "}
                    <div class="ml-4 flex-1">
                      {index === currentVideoIndex ? (
                        <p class="text-sm text-blue-600 font-semibold">
                          {item.title} (Reproduciendo...)
                        </p>
                      ) : (
                        <p class="text-sm text-gray-800 font-semibold">
                          {item.title}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setCurrentVideoIndex(index)}
                      type="button"
                      class="px-5 py-2.5 flex items-center text-sm tracking-wider outline-none bg-blue-100 rounded"
                    >
                      <RadioIcon className="w-4 text-blue-700" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-gray-100">
            {videoInfo && (
              <div class=" p-4 flex justify-center items-center">
                <div class="bg-white p-8 rounded-lg shadow-md w-100">
                  <img
                    src={videoInfo.snippet.thumbnails.default.url}
                    alt={videoInfo.snippet.title}
                    class="w-70 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
                  />
                  <h2 class="text-xl font-semibold text-center">
                    {videoInfo.snippet.title}
                  </h2>
                  <p class="text-gray-600 text-sm text-center">
                    Vistas: {videoInfo.statistics.viewCount}
                  </p>
                  <div className="">
                    {playlist.length > 0 && (
                      <YouTubePlayer
                        videoId={playlist[currentVideoIndex].id}
                        onEnd={SiguientePlay}
                        currentVideoIndex={currentVideoIndex}
                        AnterioPlay={AnterioPlay}
                        SiguientePlay={SiguientePlay}
                        playlist={playlist}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="p-6">
              <h3>Lista de Reproducción</h3>
              <ul>
                {playlist.map((data, index) => (
                  <li key={index}>
                    {index === currentVideoIndex ? (
                      <strong>{data.title} (Reproduciendo)</strong>
                    ) : (
                      <span>{data.title}</span>
                    )}
                    <button
                      type="button"
                      class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
                      onClick={() => CambiarPlay(index)}
                    >
                      <MusicalNoteIcon className="w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
