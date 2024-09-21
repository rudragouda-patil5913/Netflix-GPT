import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster_url, movieId }) => {
 
  return (
    <div className="w-40 m-2">
      <img className="w-40" src={IMG_CDN_URL + poster_url} alt="poster" />
    </div>
  );
};

export default MovieCard;
