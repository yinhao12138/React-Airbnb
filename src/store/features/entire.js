import { createSlice } from "@reduxjs/toolkit";

export const entireSlice = createSlice({
  name: "entireReduce",
  initialState: {
    banners: [],
  },
  reducers: {
    getBanners: (state, { payload }) => {
      state.banners = payload;
    },
  },
});

export const { getBanners } = entireSlice.actions;

export default entireSlice.reducer;
