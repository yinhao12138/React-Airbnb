import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDisCountList, getPopularRecommendList, getGoodPriceList, getHeightScoreList } from "@/api/home";

export const fetchDisCountHomeList = createAsyncThunk("fetchDiscountData", async () => {
  const res = await getDisCountList();
  return res;
});

export const fetchPopularRecommendList = createAsyncThunk("fetchPopularRecommendData", async () => {
  const res = await getPopularRecommendList();
  return res;
});

export const fetchGoodHomeList = createAsyncThunk("fetchGoodData", async () => {
  const res = await getGoodPriceList();
  return res;
});

export const fetchHeightHomeList = createAsyncThunk("fetchHeightData", async () => {
  const res = await getHeightScoreList();
  return res;
});

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState: {
    disCountInfo: {},
    popularRecommendInfo: {},
    goodPriceInfo: {},
    heightScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfo: (state, { payload }) => {
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDisCountHomeList.fulfilled, (state, action) => {
      state.disCountInfo = action.payload;
      // console.log("Discount", state.disCountInfo);
    });
    builder.addCase(fetchPopularRecommendList.fulfilled, (state, action) => {
      // console.log("PopularInfo", action.payload);
      state.popularRecommendInfo = action.payload;
    });
    builder.addCase(fetchGoodHomeList.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload;
      // console.log(state.goodPriceInfo);
    });
    builder.addCase(fetchHeightHomeList.fulfilled, (state, action) => {
      state.heightScoreInfo = action.payload;
    });
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;

export default homeSlice.reducer;
