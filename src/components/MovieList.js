import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div>
      <h1 className="mx-16 font-bold text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide mx-16 ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_url={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
