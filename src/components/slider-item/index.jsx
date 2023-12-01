import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { SliderWrapper, CarouselWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "../Indicator";
import classNames from "classnames";

const SliderItem = memo((props) => {
  const [selectIndex, setSelectIndex] = useState(0);

  const { sliderItem } = props;

  const sliderRef = useRef(null);
  function handleArrowMethod(e, isNext = true) {
    e.stopPropagation(); // <!-- 阻止事件冒泡 -->
    isNext ? sliderRef.current.prev() : sliderRef.current.next();

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = sliderItem.length - 1;
    if (newIndex > sliderItem.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  return (
    <SliderWrapper>
      <div className="slider">
        <div className="control">
          <div className="arrowIcon left" onClick={(e) => handleArrowMethod(e, true)}>
            <IconArrowLeft size={14}></IconArrowLeft>
          </div>
          <div className="arrowIcon right" onClick={(e) => handleArrowMethod(e, false)}>
            <IconArrowRight size={14}></IconArrowRight>
          </div>
        </div>
        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {sliderItem.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              );
            })}
          </Indicator>
        </div>
        <CarouselWrapper dots={false} ref={sliderRef}>
          {sliderItem.map((it) => {
            return (
              <div className="cover" key={it}>
                <img src={it} alt="" />
              </div>
            );
          })}
        </CarouselWrapper>
      </div>
    </SliderWrapper>
  );
});

SliderItem.propTypes = {
  sliderItem: PropTypes.array,
};

export default SliderItem;
