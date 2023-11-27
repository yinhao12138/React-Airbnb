import React, { memo, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Banners from "./components/bannner";
import { HomeWrapper } from "./style";
import {
  fetchDisCountHomeList,
  fetchPopularRecommendList,
  fetchHeightHomeList,
  fetchGoodHomeList,
  fetchLongForList,
  fetchPlusInfoList,
  changeGoodPriceInfo,
} from "@/store/features/home";
import SectionHeader from "./components/section-header";
import SectionTabsTabs from "./components/section-tabs";
import RoomItem from "../../components/room-item";
import LongFor from "./components/long-for";
import PlusInfo from "./components/plus-Info";

const Home = memo(() => {
  const { plusInfo, longForInfo, disCountInfo, popularRecommendInfo, goodPriceInfo, heightScoreInfo } = useSelector(
    (state) => ({
      disCountInfo: state.home.disCountInfo,
      popularRecommendInfo: state.home.popularRecommendInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      heightScoreInfo: state.home.heightScoreInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDisCountHomeList());
    dispatch(fetchPopularRecommendList());
    dispatch(fetchGoodHomeList());
    dispatch(fetchHeightHomeList());
    dispatch(fetchLongForList());
    dispatch(fetchPlusInfoList());

    return () => {};
  }, [dispatch]);

  const getTabsNames = function (tabs) {
    return tabs.dest_address?.map((it) => it.name);
  };
  const getDefaultNames = function (tabs) {
    return tabs.dest_address?.[0].name;
  };
  const [disName, setDisName] = useState(""); //useState 只有第一次初li始化值空的时候渲染才有效
  const selectionDisTabsMethod = useCallback(function (n) {
    setDisName(n);
  }, []);

  const [popularName, popularSetName] = useState("");
  const selectionPopularTabsMethod = useCallback(function (n) {
    popularSetName(n);
  }, []);

  return (
    <HomeWrapper>
      <Banners></Banners>
      <div className="content">
        <div className="box">
          <SectionHeader title={disCountInfo.title} subtitle={heightScoreInfo.subtitle}></SectionHeader>
          <SectionTabsTabs tabsNames={getTabsNames(disCountInfo)} selectionTabsMethod={(n) => selectionDisTabsMethod(n)}></SectionTabsTabs>
          {/* 当disCountInfo.dest_address里面数据有值的时候在去执行RoomItem里面的render 解决第一次useState初始化值为空的情况 */}
          {!!disCountInfo.dest_address?.length && (
            <RoomItem list={disCountInfo.dest_list[disName || getDefaultNames(disCountInfo)]} width="33%"></RoomItem>
          )}
        </div>
        <div className="box">
          <SectionHeader title={popularRecommendInfo.title}></SectionHeader>
          <SectionTabsTabs
            tabsNames={getTabsNames(popularRecommendInfo)}
            selectionTabsMethod={(n) => selectionPopularTabsMethod(n)}></SectionTabsTabs>
          {!!popularRecommendInfo.dest_address?.length && (
            <RoomItem list={popularRecommendInfo.dest_list[popularName || getDefaultNames(popularRecommendInfo)]} width="33%"></RoomItem>
          )}
        </div>
        <div className="box">
          <SectionHeader title={longForInfo.title} subtitle={longForInfo.subtitle}></SectionHeader>
          {!!longForInfo.list?.length && <LongFor longForList={longForInfo.list}></LongFor>}
        </div>
        <div className="box">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <RoomItem list={goodPriceInfo.list} width="20%"></RoomItem>
        </div>
        <div className="box">
          <SectionHeader title={heightScoreInfo.title} subtitle={heightScoreInfo.subtitle}></SectionHeader>
          <RoomItem list={heightScoreInfo.list} width="20%"></RoomItem>
        </div>
        <div className="box">
          <SectionHeader title={plusInfo.title} subtitle={plusInfo.subtitle}></SectionHeader>
          {!!plusInfo.list?.length && <PlusInfo plusInfoList={plusInfo.list}></PlusInfo>}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
