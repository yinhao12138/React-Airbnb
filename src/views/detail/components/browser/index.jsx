import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconBelow from "@/assets/svg/icon_below";
import { Carousel } from "antd";
import classNames from "classnames";

const Browser = memo((props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [totalOffset, setTotalOffset] = useState(0); //偏移量

  const { pictureUrls, closePicture, infoName } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function topClose(l) {
    closePicture(l);
  }

  function handleHideMethod() {
    console.log("隐藏底部图片");
  }

  const sliderRef = useRef();
  const imageListRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    const scrollWidth = imageListRef.current.scrollWidth; //一共可以滚动的长度
    const clientWidth = imageListRef.current.clientWidth; //本身占据的宽度
    const distance = scrollWidth - clientWidth;
    setTotalOffset(distance);

    // // 获取中间图片可示div宽度
    // const contentWidth = contentRef.current.clientWidth;
    // console.log(contentWidth);
  }, [pictureUrls]);

  function getOffsetLeft(i) {
    // 底部在第五个时滚动逻辑隐藏逻辑
    // const newIndex = i > 5 ? 1 : i;
    const newEl = imageListRef.current.children[i]; //获取第二个盒子距离前面的偏移量
    const newOffsetLeft = newEl.offsetLeft;
    // console.log("--", newOffsetLeft);
    imageListRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
  }

  function controlArrowBtn(isNext = true) {
    if (isNext === true) {
      sliderRef.current.prev();
      //展示底部img选中第几个逻辑
      const newIndex = imageIndex <= 0 ? pictureUrls.length : imageIndex - 1;
      setImageIndex(newIndex);
      // getOffsetLeft(newIndex);
      return;
    }
    const newIndex = imageIndex >= pictureUrls.length ? 0 : imageIndex + 1;
    console.log("newIndex", newIndex);
    getOffsetLeft(newIndex);
    setImageIndex(newIndex);
    sliderRef.current.next();
  }

  return (
    <BrowserWrapper>
      <div className="top" onClick={(e) => topClose(false)}>
        <IconClose></IconClose>
      </div>
      <div className="box">
        <div className="left">
          <div className="arrow" onClick={(e) => controlArrowBtn(true)}>
            <IconArrowLeft size={60}></IconArrowLeft>
          </div>
        </div>
        <div className="content" ref={contentRef}>
          <Carousel dots={false} ref={sliderRef} fade={true}>
            {pictureUrls.map((it) => {
              return (
                <div className="image" key={it}>
                  <img src={it} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="right">
          <div className="arrow" onClick={(e) => controlArrowBtn(false)}>
            <IconArrowRight size={60}></IconArrowRight>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="slider-list">
          <div className="number">
            <div className="left">
              {imageIndex + 1}/{pictureUrls.length + 1}: {infoName} 图片 {imageIndex + 1}
            </div>
            <div className="right" onClick={(e) => handleHideMethod()}>
              隐藏照片列表
              <span className="icon">
                <IconBelow></IconBelow>
              </span>
            </div>
          </div>
          <div className="list" ref={imageListRef}>
            {pictureUrls.map((it, index) => {
              return (
                <div className="image" key={it}>
                  {/* <div className={classNames("cover", { selectcover: imageIndex === index })}></div> */}
                  <img src={it} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

Browser.propTypes = {
  pictureUrls: PropTypes.array,
  closePicture: PropTypes.func,
  infoName: PropTypes.string,
};

export default Browser;
