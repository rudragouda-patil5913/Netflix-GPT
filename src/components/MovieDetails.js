import React, { useState } from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import useMovieDetailsHook from "../hooks/useMovieDetailsHook";
import { useDispatch } from "react-redux";
import { removeMovieDetails } from "../utils/movieDetailSlice";
import useTeaserTrailer from "../hooks/useTeaserTrailers";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import VideoPlayer from "./VideoPlayer";

const MovieDetails = () => {
  const { id } = useParams();
  const details = useSelector((store) => store.moviedetails.details);
  const types = useSelector((store) => store.moviedetails.types);
  const teaser = useSelector((store) => store.moviedetails.teaser);
  const trailer = useSelector((store) => store.moviedetails.trailer);

  const [playTrailer, setPlayTrailer] = useState(false);

  const dispatch = useDispatch();
  useMovieDetailsHook(id);
  useTeaserTrailer(id);

  if (!details) return;
  if (!types) return;
  if (!teaser) return;
  if (!trailer) return;

  const playVideoTrailer = () => {
    console.log(playTrailer);
    setPlayTrailer(!playTrailer);
  };

  return (
    <div>
      <div className="absolute w-full h-full bg-black ">
        <Header />
        <div className=" mt-[40%] md:mt-[8%] px-8 ">
          <Link to="/browse">
            <button
              className="bg-slate-300 bg-transparent border border-white text-white hover:bg-white hover:text-black m-2 p-2 font-bold text-xl rounded-xl"
              onClick={() => {
                dispatch(removeMovieDetails());
              }}>
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:mx-4 bg-black md:w-screen md-bg-black">
          <div className="md:w-6/12">
            <img
              src={IMG_CDN_URL + details.backdrop_path}
              alt="movie_pic"
              className="h-90 md:h-full w-full"
            />
          </div>
          <div className="md:w-4/12">
            <h1 className="text-white font-bold text-2xl m-4">
              {details.original_title}
            </h1>
            <p className="text-white font-bold text-lg m-4">
              {details.overview}
            </p>
            {details.genres && (
              <h1 className="text-white font-bold text-2xl mt-4 ml-4">
                {"Genres"}
              </h1>
            )}
            {details.genres &&
              details.genres.map((genre) => {
                return (
                  <button
                    className="bg-slate-200 m-4 p-2 font-bold rounded-lg"
                    key={genre.id}>
                    {genre.name}
                  </button>
                );
              })}
          </div>
        </div>
        <div className="mt-4 bg-black">
          {playTrailer && <VideoPlayer movieId={trailer.key} />}
        </div>
        <div className="bg-black">
          {trailer && (
            <button
              className="bg-slate-200 m-4 p-2 font-bold rounded-lg"
              onClick={() => playVideoTrailer()}>
              {playTrailer ? "Stop Playing" : "Play Trailer"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
