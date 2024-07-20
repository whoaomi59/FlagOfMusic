import React, { useState, useEffect } from "react";
import YouTubePlayer from "./components/YouTubePlayer";
import "./App.css";

import Appbar from "./components/Menu_Navigate";

import Layout from "./layout/layout";

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
    <div className="min-h-screen text-white">
      <Appbar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <Layout
        showResults={showResults}
        playlist={playlist}
        currentVideoIndex={currentVideoIndex}
        setCurrentVideoIndex={setCurrentVideoIndex}
      />

      <main>
        {videoInfo && (
          <div /* class=" p-4 flex justify-center items-center" */>
            {/*               <div class="bg-gray-800 p-8 rounded-lg shadow-md w-100">
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
              </div> */}
            {playlist.length > 0 && (
              <YouTubePlayer
                img={videoInfo.snippet.thumbnails.default.url}
                videoId={playlist[currentVideoIndex].id}
                onEnd={SiguientePlay}
                currentVideoIndex={currentVideoIndex}
                AnterioPlay={AnterioPlay}
                SiguientePlay={SiguientePlay}
                playlist={playlist}
              />
            )}
          </div>
        )}
        <div class="flex flex-wrap items-center gap-4 ">
          <h1 class="text-4xl font-extrabold text-gray-500 mb-12">
            Resultados
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
