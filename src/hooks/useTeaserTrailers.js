import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieDetailSlice";

const useTeaserTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchTeaserTrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const data = await response.json();
    const videoTypes = data.results.map((ele) => {
      return ele.type;
    });
    const filterUniqueTypes = [];
    for (let type of videoTypes) {
      if (filterUniqueTypes.indexOf(type) === -1) {
        filterUniqueTypes.push(type);
      }
    }

    const teaser = data.results.filter((video) => {
      return video.type === "Teaser";
    });
    const trailer = data.results.filter((video) => {
      return video.type === "Trailer";
    });
    dispatch(
      addMovieDetails({
        types: filterUniqueTypes,
        teaser: teaser[0],
        trailer: trailer[0],
      })
    );
  };

  useEffect(() => {
    fetchTeaserTrailer();
  }, []);
};

export default useTeaserTrailer;
