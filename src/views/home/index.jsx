import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Banners from "./components/bannner";
import { HomeWrapper } from "./style";
import { fetchDisCountHomeList, fetchPopularRecommendList, fetchHeightHomeList, fetchGoodHomeList, changeGoodPriceInfo } from "@/store/features/home";
import SectionHeader from "./components/section-header";
import RoomItem from "./components/room-item";

const Home = memo(() => {
  const { disCountInfo, popularRecommendInfo, goodPriceInfo, heightScoreInfo } = useSelector(
    (state) => ({
      disCountInfo: state.home.disCountInfo,
      popularRecommendInfo: state.home.popularRecommendInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      heightScoreInfo: state.home.heightScoreInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDisCountHomeList());
    dispatch(fetchPopularRecommendList());
    dispatch(fetchGoodHomeList());
    dispatch(fetchHeightHomeList());

    return () => {};
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Banners></Banners>
      <div className="content">
        {/* <div className="box">
          <SectionHeader title={disCountInfo.title} subtitle={heightScoreInfo.subtitle}></SectionHeader>
          <RoomItem info={disCountInfo}></RoomItem>
        </div> */}
        {/* <div className="box">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <RoomItem info={goodPriceInfo}></RoomItem>
        </div> */}
        <div className="box">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <RoomItem info={goodPriceInfo}></RoomItem>
        </div>
        <div className="box">
          <SectionHeader title={heightScoreInfo.title} subtitle={heightScoreInfo.subtitle}></SectionHeader>
          <RoomItem info={heightScoreInfo}></RoomItem>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
