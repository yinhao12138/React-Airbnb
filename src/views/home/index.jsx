import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getHomeList } from "@/api/home";
import Banners from "./components/bannner";
import { HomeWrapper } from "./components/style";

const Home = memo(() => {
  useEffect(() => {
    getHomeList().then((res) => {
      // console.log("@@", res);
    });

    return () => {
      console.log("清除机制");
    };
  }, []);
  return (
    <HomeWrapper>
      <Banners></Banners>
    </HomeWrapper>
  );
});

export default Home;
