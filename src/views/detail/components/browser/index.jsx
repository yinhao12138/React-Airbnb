import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { BrowserWrapper, ContentWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconBelow from "@/assets/svg/icon_below";
import { Carousel } from "antd";
import classNames from "classnames";

const Browser = memo((props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [hideImageBtn, setHideImageBtn] = useState(false);
  const [allIndex, setAllIndex] = useState([]);

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

  const sliderRef = useRef();
  const carouselRef = useRef();
  const contentRef = useRef(); //获取底部dom

  function handleHideMethod() {
    setHideImageBtn(!hideImageBtn);
    const imageId = document.getElementById("imageId"); //获取底部图片的高度
    contentRef.current.style.transform = `translateY(${hideImageBtn ? 0 : imageId.height}px)`;
  }
  useEffect(() => {
    // 获取所有图片长度的数组  图片遍历index是从0开始 length长度是从1开始
    const allPictureIndex = pictureUrls.map((it, index) => {
      return index;
    });
    setAllIndex([...allPictureIndex]);
  }, [pictureUrls]);

  function getOffsetLeft(selectIndex, allArray) {
    // 底部在第五个时滚动逻辑隐藏逻辑
    const fontList = allArray.slice(0, 3); //前面三个
    const afterList = allArray.slice(-3); //后面三个

    if (!fontList.includes(selectIndex) && !afterList.includes(selectIndex)) {
      const newEl = carouselRef.current.children[selectIndex - 3]; //获取第四个盒子距离前面的偏移量
      const newOffsetLeft = newEl.offsetLeft;
      carouselRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    }

    //点击右边最后一个边偏移量列表自动定位到第一个图片
    if (!!selectIndex === false) {
      carouselRef.current.style.transform = `translateX(-${0}px)`;
    }

    //点击左边偏移量列表自动定位到最后一个图片
    if (selectIndex === allArray[allArray.length - 1]) {
      const newEl = carouselRef.current.children[selectIndex - 6]; //减6是前三个和最后是三个的不偏移
      const newOffsetLeft = newEl.offsetLeft;
      carouselRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    }
  }

  function controlArrowBtn(isNext = true) {
    if (isNext === true) {
      sliderRef.current.prev();
      //展示底部img选中第几个逻辑
      const newIndex = imageIndex <= 0 ? pictureUrls.length - 1 : imageIndex - 1;
      getOffsetLeft(newIndex, allIndex);
      setImageIndex(newIndex);
      return;
    }
    const newIndex = imageIndex >= pictureUrls.length - 1 ? 0 : imageIndex + 1;
    getOffsetLeft(newIndex, allIndex);
    setImageIndex(newIndex);
    sliderRef.current.next();
  }

  function handleClickImage(e, i) {
    // 通过图片拿到这个图片在数组里面的哪一个下标
    const findIndex = pictureUrls.findIndex((it) => i === it);
    getOffsetLeft(findIndex, allIndex);
    setImageIndex(findIndex);
    sliderRef.current.goTo(findIndex);
  }

  return (
    <BrowserWrapper>
      <div className="top" onClick={(e) => topClose(false)}>
        <IconClose></IconClose>
      </div>

      <div className="middle">
        <div className="arrow">
          <span onClick={(e) => controlArrowBtn(true)}>
            <IconArrowLeft size={60}></IconArrowLeft>
          </span>
        </div>
        <div className="content">
          <div className="slider">
            <Carousel dots={false} ref={sliderRef} fade={true}>
              {pictureUrls.map((it) => {
                return <img src={it} key={it} alt="" />;
              })}
            </Carousel>
          </div>
        </div>
        <div className="arrow">
          <span onClick={(e) => controlArrowBtn(false)}>
            <IconArrowRight size={60}></IconArrowRight>
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="content" ref={contentRef} id="contentId">
          <div className="text">
            <div>
              {imageIndex + 1}/{pictureUrls.length}: {infoName} 图片 {imageIndex + 1}
            </div>
            <div className="right" onClick={(e) => handleHideMethod()}>
              {hideImageBtn ? "显示照片列表" : "隐藏照片列表"}
              <IconBelow></IconBelow>
            </div>
          </div>
          <div className="carousel" ref={carouselRef}>
            {pictureUrls.map((it, index) => {
              return (
                <div className="slider" key={it}>
                  <div className={classNames("cover", { selectcover: imageIndex === index })} onClick={(e) => handleClickImage(e, it)}></div>
                  <img src={it} alt="" id="imageId" />
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
