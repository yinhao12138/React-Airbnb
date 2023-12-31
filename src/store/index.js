import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home";
import entireReducer from "./features/entire";
import detailReducer from "./features/detail";
import mainReducer from "./features/main";

export default configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer,
  },
});
