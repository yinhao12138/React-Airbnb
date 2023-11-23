import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEntireList } from "@/api/entire";

export const fetchEntireList = createAsyncThunk("fetchEntireData", async (o) => {
  // console.log(o);
  const res = await getEntireList(o);
  return res;
});

export const entireSlice = createSlice({
  name: "entireReduce",
  initialState: {
    entireList: [],
    total: 0,
  },
  reducers: {
    getBanners: (state, { payload }) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntireList.fulfilled, (state, action) => {
      // console.log("@@@", action.payload);
      state.entireList = action.payload.list;
      state.total = action.payload.totalCount;
    });
  },
});

export const { getBanners } = entireSlice.actions;

export default entireSlice.reducer;
