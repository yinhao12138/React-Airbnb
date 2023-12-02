import React, { memo, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./router";
import { AppWrapper } from "./style";

import Header from "./components/app-header";
import Footer from "./components/app-footer.jsx";
import { useSelector, shallowEqual } from "react-redux";

const App = memo(() => {
  const { isFixed } = useSelector((state) => {
    return {
      isFixed: state.main.isFixed,
    };
  }, shallowEqual);

  const location = useLocation(); //监听路径改变回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <AppWrapper className="app">
      <div className="Header">
        <Header isFixed={isFixed}></Header>
      </div>
      <div className="Page">{useRoutes(routes)}</div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </AppWrapper>
  );
});

export default App;
