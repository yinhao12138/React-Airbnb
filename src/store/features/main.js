import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    isFixed: "fixed", //none
  },

  reducers: {
    headerConfigFixed: (state, { payload }) => {
      state.isFixed = payload;
    },
  },
});

export const { headerConfigFixed } = mainSlice.actions;

export default mainSlice.reducer;
