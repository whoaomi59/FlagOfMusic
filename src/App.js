// src/App.js
import React, { useState, useEffect } from "react";
import YouTubePlayer from "./components/YouTubePlayer";
import "./App.css";
import {
  BackwardIcon,
  ForwardIcon,
  MusicalNoteIcon,
  PauseCircleIcon,
  PauseIcon,
  PlayIcon,
  RadioIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import Page404 from "./layout/404";
import Appbar from "./components/navbar";

const KEY = "AIzaSyBpiMLwFIt0tCEtFXU5L_gQkiaReQNy5GI";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        searchQuery
      )}&maxResults=50&key=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          console.log(data.items);
          const videoData = data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title, // Añade el título de la canción
            img: item.snippet.thumbnails.default.url,
            autor: item.snippet.channelTitle,
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Appbar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      {playlist.length > 0 ? (
        <main className="p-6">
          {videoInfo && (
            <div class=" p-4 flex justify-center items-center">
              <div class="bg-gray-800 p-8 rounded-lg shadow-md w-100">
                <img
                  src={videoInfo.snippet.thumbnails.default.url}
                  alt={videoInfo.snippet.title}
                  class="w-70 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
                />
                <h2 class="text-xl font-semibold text-center p-2">
                  {videoInfo.snippet.title}
                </h2>
                Autor: {videoInfo.snippet.channelTitle}
                <p class="text-gray-300 text-sm text-center p-2">
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
          <div class="flex flex-wrap items-center gap-4 ">
            <h1 class="text-4xl font-extrabold text-gray-500 mb-12">
              Resultados
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        />{" "}
                        {index === currentVideoIndex ? (
                          <h3 className="text-blue-600 font-semibold">
                            {" "}
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
          </div>
        </main>
      ) : (
        <div className="TOP">
          <Page404 />
        </div>
      )}
      <div className="musics">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://i.ytimg.com/vi/9XDGkg0PUZI/default.jpg"
            className="img-track"
          />
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
    </div>
  );
}

export default App;
