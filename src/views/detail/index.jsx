import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import Info from "./components/info";
import Picture from "./components/picture";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => {
    return {
      detailInfo: state.detail.detailInfo,
    };
  }, shallowEqual);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DetailWrapper>
      {!!detailInfo.picture_urls?.length && <Picture picture={detailInfo.picture_urls} name={detailInfo.name}></Picture>}
      {/* <Info></Info> */}
    </DetailWrapper>
  );
});

export default Detail;
