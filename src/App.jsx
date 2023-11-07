import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

import Header from "./components/app-header";
import Footer from "./components/app-footer.jsx";

const App = memo(() => {
  return (
    <div className="app">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="Page">{useRoutes(routes)}</div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
});

export default App;
