import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPolpularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPolpularMovies(data.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
