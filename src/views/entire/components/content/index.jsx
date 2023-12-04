import React, { memo } from "react";
import PropTypes from "prop-types";
import { ContentWrapper } from "./style";
import SliderItem from "@/components/slider-item";
import IconStart from "@/assets/svg/icon_start";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetailInfo } from "@/store/features/detail";

const Content = memo((props) => {
  const { list } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function goDetail(e, l) {
    dispatch(getDetailInfo(l));
    navigate("/detail");
  }

  return (
    <ContentWrapper>
      <h3>{300}多处住所</h3>
      <div className="top-box">
        {list.map((item) => {
          return (
            <div key={item.id} className="content">
              <div className="inner" onClick={(e) => goDetail(e, item)}>
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
