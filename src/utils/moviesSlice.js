import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo :null,
  },
  reducers: {
    addMovies: (state, action) => {
    state.nowPlayingMovies = action.payload;
    },
    addTrailer : (state,action)=>{
      state.trailerVideo = action.payload;
    }
  },
});

export const { addMovies ,addTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;
