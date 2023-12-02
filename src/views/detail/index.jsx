import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Info from "./components/info";
import Picture from "./components/picture";
import { headerConfigFixed, headerConfigTopHeight } from "@/store/features/main";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo,
      topHeight: state.main.topHeight,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerConfigFixed("none"));
  }, [dispatch]);

  return (
    <DetailWrapper>
      {!!detailInfo.picture_urls?.length && <Picture picture={detailInfo.picture_urls} name={detailInfo.name}></Picture>}
      <Info></Info>
    </DetailWrapper>
  );
});

export default Detail;
