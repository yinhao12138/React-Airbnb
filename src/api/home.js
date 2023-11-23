import request from "@/services/request";

// 折扣优惠房源接口
export const getDisCountList = () => {
  return request.get({ url: "/home/discount" });
};

// 热门推荐房源接口
export const getPopularRecommendList = () => {
  return request.get({ url: "home/hotrecommenddest" });
};

// 高性价比房源接口
export const getGoodPriceList = () => {
  return request.get({ url: "home/goodprice" });
};

// 高分好评房源接口
export const getHeightScoreList = () => {
  return request.get({ url: "/home/highscore" });
};

// 想往城市接口
export const getLongForList = () => {
  return request.get({ url: "/home/longfor" });
};

// 想往城市接口
export const getPlusInfoList = () => {
  return request.get({ url: "/home/plus" });
};
