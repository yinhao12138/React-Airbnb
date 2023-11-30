import React, { memo } from "react";
import PropTypes from "prop-types";
import { ContentWrapper } from "./style";
import SliderItem from "@/components/slider-item";
import IconStart from "@/assets/svg/icon_start";

const Content = memo((props) => {
  const { list } = props;

  console.log(list);

  function goDetail(r) {
    console.log(r);
  }

  return (
    <ContentWrapper>
      <h3>{300}多处住所</h3>
      <div className="top-box">
        {list.map((item) => {
          return (
            <div key={item.id} className="content">
              <div className="inner" onClick={() => goDetail(item)}>
                <SliderItem sliderItem={item.picture_urls}></SliderItem>
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
            </div>
          );
        })}
      </div>
    </ContentWrapper>
  );
});

PropTypes.propTypes = {
  list: PropTypes.array,
};

export default Content;
