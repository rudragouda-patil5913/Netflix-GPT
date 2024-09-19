import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useVideoTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
      const filterTrailerVideo = data.results.filter(
        (video) => video.type == "Trailer"
      );
      const trailer = filterTrailerVideo.length
        ? filterTrailerVideo[0]
        : data.results[0];
      dispatch(addTrailer(trailer));
    };

    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useVideoTrailer;