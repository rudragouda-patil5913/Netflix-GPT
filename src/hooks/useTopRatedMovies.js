import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTopMovies(data.results));
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
