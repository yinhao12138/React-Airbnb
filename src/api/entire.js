import request from "@/services/request";

export const getEntireList = (params) => {
  return request.get({ url: `/entire/list?offset=${params.offset}&size=${params.size}` });
};
