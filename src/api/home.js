import request from "@/services/request";

// 高分房源接口
export const getGoodPriceList = () => {
  return request.get({ url: "/home/highscore" });
};
