import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEntireList } from "@/api/entire";

export const fetchEntireList = createAsyncThunk("fetchEntireData", async (o) => {
  const res = await getEntireList(o);
  return res;
});

export const entireSlice = createSlice({
  name: "entireReduce",
  initialState: {
    entireList: [],
    total: 0,
    loading: false,
  },
  reducers: {
    getBanners: (state, { payload }) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntireList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchEntireList.fulfilled, (state, action) => {
      // console.log("xx", action.payload.list);
      state.entireList = action.payload.list;
      state.total = action.payload.totalCount;
      state.loading = false;
    });
  },
});

export const { getBanners } = entireSlice.actions;

export default entireSlice.reducer;
