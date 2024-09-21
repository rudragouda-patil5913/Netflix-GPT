import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovies from "./SearchMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gptsearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptSearch?.gptToggleSearch ? (
        <SearchMovies />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}

      {/* {
      - MainContainer
        - Movie Trailer running background
        - Movie Title on it
      - SecondContainer
        - List of Movies
      } */}
    </div>
  );
};

export default Browse;
