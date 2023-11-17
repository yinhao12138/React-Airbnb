import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGoodPriceList } from "@/api/home";

export const fetchHomeList = createAsyncThunk("fetchData", async () => {
  const res = await getGoodPriceList();
  return res;
});

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeList.fulfilled, (state, action) => {
      console.log("action", action.payload);
      state.goodPriceInfo = action.payload;
    });
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;

export default homeSlice.reducer;
