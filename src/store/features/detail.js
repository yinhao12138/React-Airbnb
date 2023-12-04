import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {},
  },
  reducers: {
    getDetailInfo: (state, { payload }) => {
      state.detailInfo = payload;
    },
  },
});

export const { getDetailInfo } = detailSlice.actions;

export default detailSlice.reducer;
