import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
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
