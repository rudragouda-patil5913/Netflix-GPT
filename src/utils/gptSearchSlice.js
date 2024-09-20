import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptToggleSearch: false,
  },
  reducers: {
    addToggleGptSearchView: (state) => {
      state.gptToggleSearch = !state.gptToggleSearch;
    },
  },
});

export const { addToggleGptSearchView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
