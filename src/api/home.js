import request from "@/services/request";

export const getHomeList = () => {
  return request.get({ url: "/home/discount" });
};
