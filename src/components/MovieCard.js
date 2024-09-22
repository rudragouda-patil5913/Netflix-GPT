import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster_url, movieId }) => {
  return (
    <div className="w-20 md:w-40 m-2">
      <img className="w-20 md:w-40" src={IMG_CDN_URL + poster_url} alt="poster" />
      <button className="w-20 md:w-40 bg-slate-800 opacity-90  text-white text-sm md:text-xl py-2">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
