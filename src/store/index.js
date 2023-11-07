import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home";
import entireReducer from "./features/entire";

export default configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});
