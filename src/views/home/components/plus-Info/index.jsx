import PropTypes from "prop-types";
import React, { memo } from "react";
import { PlusInfoWrapper } from "./style";
import ScrollView from "@/components/scroll-view";
import IconStart from "@/assets/svg/icon_start";

const PlusInfo = memo((props) => {
  const { plusInfoList } = props;
  console.log("@@@", plusInfoList);

  function goDetail(i) {
    console.log("i", i);
  }
  return (
    <PlusInfoWrapper>
      <ScrollView>
        {plusInfoList.map((item, index) => {
          return (
            <div className="inner" onClick={() => goDetail(item)} key={index}>
              <div className="cover">
                <img src={item.picture_url} alt="" />
              </div>
              <div className="desc">
                <div className="left">{item.verify_info.messages.join("·")}</div>
                <div className="right">
                  <div>
                    <IconStart></IconStart>
                  </div>
                  <div className="number">
                    {item.star_rating} ({item.reviews_count})
                  </div>
                </div>
              </div>
              <div className="name">{item.name}</div>
              <div className="price">{`${item.price_format}/晚`}</div>
            </div>
          );
        })}
      </ScrollView>
    </PlusInfoWrapper>
  );
});

PlusInfo.propTypes = {
  plusInfoList: PropTypes.array,
};

export default PlusInfo;
