import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // Early return

  const mainMovie = movies[0];
  return (
    <div className="flex flex-col align-middle w-screen md:-mt-2">
      <VideoTitle {...mainMovie} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
