import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPolpularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addMovies,
  addTrailer,
  addPolpularMovies,
  addTopMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
