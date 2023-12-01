import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {
      bottom_info: null,
      id: "25462304",
      image_url: "/moreitems/9b0c8c1b8bcd97630f625e21f4e6e864.jpg",
      lat: 23.19968,
      lng: 113.25826,
      name: "2.「菲立斯优品」豪华公寓 1.8米大床 拎包入住 空调电视冰箱洗衣机",
      picture_url: "https://z1.muscache.cn/im/pictures/00d4074f-f66e-4bef-906c-53eab5047970.jpg?aki_policy=large",
      picture_urls: [
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/717c9c6e-ff58-498c-8e07-6947f78e11ae.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/2f1be324-7965-4a93-8ffa-4372ddc7d506.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/5734f942-d44e-4557-8c21-8b0a75ad6cdf.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/a3ee0e25-7910-4ebd-8159-eb9588a0e30e.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/28f97cb4-687e-4d3e-a66a-1735e66ab995.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/ace4c0e9-96f1-4842-9ce8-72a3b6bb277f.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/c371274f-82c5-494b-b2a2-6b36e6fe04ad.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/28759197-f7f0-405b-87e4-f174ff305444.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/2871116f-fa5a-46d8-ab08-80e63f129a36.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/2db5f42f-c1ef-436a-be39-99499534ca18.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/3d701ae0-68f6-4967-8cf1-57119ff8b467.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/33508024-f23b-4e26-8534-1d9fd0c3d755.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/9e1e53e5-d0a9-4e87-ade1-eb3b84faf69e.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/0d1116e9-38fe-460c-b181-5cfe46ef6084.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/420007e8-f6a6-4fa9-8117-b9973b1219a5.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/5fbbf9ba-d4cb-4ae9-a746-6e7bc68b8b3e.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/7441637a-c612-47b5-9689-449d9a6c8221.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/df17937d-30ea-451f-ad88-ea6313af0121.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/a6db5da8-bd85-4e27-a531-aa570b467222.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/6d3e5f75-936a-47de-b577-2f4ff4a9646a.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/a0ab1422-580c-40eb-a607-0881ebe54946.jpeg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/miso/Hosting-49339411/original/034cbb96-32f6-4064-ae6f-6641ebf5675e.jpeg?aki_policy=large",
      ],
      price: 174,
      price_format: "￥174",
      reviews_count: 2,
      star_rating_color: "#FF5A5F",
      verify_info: { messages: Array(2), text_color: "#767676" },
      _id: "63043046432f9033d45410ea",
    },
  },
  reducers: {
    getDetailInfo: (state, { payload }) => {
      state.detailInfo = payload;
    },
  },
});

export const { getDetailInfo } = detailSlice.actions;

export default detailSlice.reducer;
