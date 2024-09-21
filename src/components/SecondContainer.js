import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black w-screen absolute mt-[55%]  z-30">
        <div className="-mt-52">
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MovieList title="Popular Videos" movies={movies?.popularMovies} />
          <MovieList title="Top Rated Movies" movies={movies?.topMovies} />
          <MovieList title="UpcomingMovies" movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondContainer;
