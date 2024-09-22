import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieDetailSlice";

const useMovieDetailsHook = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieDetail = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addMovieDetails({ details: data }));
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
};

export default useMovieDetailsHook;
