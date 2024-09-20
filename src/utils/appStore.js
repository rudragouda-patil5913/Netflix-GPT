import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptSearchReducer from "./gptSearchSlice";


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptsearch: gptSearchReducer,
  },
});


export default appStore;