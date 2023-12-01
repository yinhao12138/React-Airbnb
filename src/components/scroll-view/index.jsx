import PropTypes from "prop-types";
import React, { memo, useState, useRef, useEffect } from "react";
import { ScrollViewWrapper } from "./style";
// import classNames from "classnames";

const ScrollView = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [totalOffset, setTotalOffset] = useState(0);
  const [posIndex, setPosIndex] = useState(0);

  const scrollContentRef = useRef();
  // 功能:实现横向滚动的动能
  //一. 1.获取div一共可以滚动的长度2.获取本身占据的宽度3.scrollWidth - clientWidth 获取是否可以滚动显示图标
  //二. 将里面item flex布局使用index下标获取在第几个 在获取第二个盒子div的偏移量使用scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`进行偏移
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //一共可以滚动的长度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    const distance = scrollWidth - clientWidth;
    setTotalOffset(distance);
    setShowRightBtn(distance > 0);
  }, [props.children]);

  function controlArrowBtn(status) {
    const newPosIndex = status ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newPosIndex]; //获取第二个盒子距离前面的偏移量

    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newPosIndex);
    setShowRightBtn(totalOffset > newElOffsetLeft); // 实现右侧按钮能否显示:一共可以滚动的长度减去本身占有的宽度等于可以偏移的宽度 偏移的宽度大于偏移的宽度则展示右边的按钮
    setShowLeftBtn(newElOffsetLeft > 0); // 实现左侧按钮能否显示:只要item有偏移量就展示 否则就隐藏
  }

  return (
    //distance左侧按钮是否展示 展示不同样式
    <ScrollViewWrapper>
      {showLeftBtn && (
        <div className=" control left">
          <span className="arrow" onClick={(e) => controlArrowBtn(false)}></span>
        </div>
      )}
      <div className="content">
        <div className="scroll" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
      {showRightBtn && (
        <div className="control right">
          <span
            className="arrow"
            onClick={(e) => {
              controlArrowBtn(true);
            }}></span>
        </div>
      )}
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {
  handleListenBtnShow: PropTypes.func,
};

export default ScrollView;
