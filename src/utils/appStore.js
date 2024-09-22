import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from "./gptSearchSlice";
import configReducer from "./configSlice";
import movieDetailReducer from "./movieDetailSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptsearch: gptSearchReducer,
    config: configReducer,
    moviedetails: movieDetailReducer,
  },
});

export default appStore;
