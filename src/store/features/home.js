import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState: {
    count: 1,
  },
  reducers: {
    increment: (state, { payload }) => {
      console.log(payload);
      state.count = payload + state.count;
    },
  },
});

export const { increment } = homeSlice.actions;

export default homeSlice.reducer;
