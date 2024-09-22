import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "moviedetails",
  initialState: {
    details: null,
    types: [],
    teaser: null,
    trailer: null,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      const { details, types, teaser, trailer } = action.payload;
      state.details = { ...state.details, ...details };
      state.types = [...state.types, ...(types || [])];
      state.teaser = { ...state.teaser, ...teaser };
      state.trailer = { ...state.trailer, ...trailer };
    },
    removeMovieDetails: (state) => {
      state.details = null;
      state.types = [];
      state.teaser = null;
      state.trailer = null;
    },
  },
});

export const { addMovieDetails, removeMovieDetails } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
