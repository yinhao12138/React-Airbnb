import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import "./assets/css/reset.less";
import "./assets/css/index.less";
import store from "./store";
import { Provider } from "react-redux";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback="loading">
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </ThemeProvider>
  </HashRouter>
);
