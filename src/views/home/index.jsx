import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Banners from "./components/bannner";
import { HomeWrapper } from "./style";
import { fetchHomeList, changeGoodPriceInfo } from "@/store/features/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeList());

    return () => {};
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Banners></Banners>
      <div className="content">
        <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle}></SectionHeader>
        <RoomItem info={goodPriceInfo}></RoomItem>
      </div>
    </HomeWrapper>
  );
});

export default Home;
