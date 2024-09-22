import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div>
      <h1 className="mx-4 md:mx-16 font-normal text-md md:font-bold md:text-2xl text-white">{title}</h1>
      <div className="mx-4 flex overflow-x-scroll scrollbar-hide md:mx-16 ">
        <div className="flex overflow-y-scroll">
          {movies.map((movie) => (
            <Link to={"/moviedetails/" + movie.id} key={movie.id}>
              <MovieCard poster_url={movie.poster_path} movieId={movie.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
