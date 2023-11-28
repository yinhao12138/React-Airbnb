import PropTypes from "prop-types";
import React, { memo, useState, useRef } from "react";
import { Carousel } from "antd";
import { RoomWrapper, ItemWrapper, WishModalWrapper, WishModalButtonWrapper, WishModalInputWrapper, CarouselWrapper } from "./style";
import classNames from "classnames";

import IconLoveImage from "@/assets/svg/icon_love";
import IconStart from "@/assets/svg/icon_start";
import { useNavigate } from "react-router-dom";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "../Indicator";

const RoomItem = memo((props) => {
  const [wishModelStatus, setWishModelStatus] = useState(false);
  const [wishModelInput, setWishModelInput] = useState("");
  const [WishModalDisabled, setWishModalDisabled] = useState(true);
  const [selectIndex, setSelectIndex] = useState(0);

  const { list = [], width } = props;

  const navigate = useNavigate();

  function goDetail(i) {
    navigate("/entire");
  }

  function wishList(e, i) {
    setWishModelStatus(true);
  }

  function handleCancel() {
    setWishModelStatus(false);
  }

  function wishModelInputChange(e) {
    setWishModelInput(e.target.value);
    if (e.target.value) {
      setWishModalDisabled(false);
      return;
    }
    setWishModalDisabled(true);
  }

  function createWishMethod() {
    // 正常逻辑要去调接口创建数据成功在关闭弹窗但无接口
    setWishModelInput("");
    setWishModelStatus(false);
    setWishModalDisabled(true);
  }

  const sliderRef = useRef(null);
  function handleArrowMethod(isNext = true) {
    isNext ? sliderRef.current.prev() : sliderRef.current.next();

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = list?.picture_urls?.length - 1;
    if (newIndex > list?.picture_urls?.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  function silderComponent(l) {
    return (
      <div className="slider">
        <div className="control">
          <div className="arrowIcon left" onClick={() => handleArrowMethod(false)}>
            <IconArrowLeft size={14}></IconArrowLeft>
          </div>
          <div className="arrowIcon right" onClick={() => handleArrowMethod(true)}>
            <IconArrowRight size={14}></IconArrowRight>
          </div>
        </div>
        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {l.picture_urls.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              );
            })}
          </Indicator>
        </div>
        <Carousel dots={false} ref={sliderRef}>
          {l.picture_urls.map((it, index) => (
            <div className="cover" key={index}>
              <img src={it} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  function defauleComponents(l) {
    return (
      <div className="cover">
        <img src={l.picture_url} alt="" />
        <div className="icon" onClick={(event) => wishList(event, l)}>
          <IconLoveImage></IconLoveImage>
        </div>
      </div>
    );
  }

  return (
    <RoomWrapper>
      {list.map((item) => {
        return (
          <ItemWrapper key={item.id} width={width}>
            <div className="inner" onClick={() => goDetail(item)}>
              {!!item?.picture_urls?.length ? silderComponent(item) : defauleComponents(item)}
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
          </ItemWrapper>
        );
      })}
      <WishModalWrapper title="为此心愿单命名" open={wishModelStatus} onCancel={handleCancel} footer={null} width={"550px"}>
        <div className="content">
          <WishModalInputWrapper
            value={wishModelInput}
            onChange={(e) => wishModelInputChange(e)}
            placeholder={"不能超过50个字符"}
            maxLength={50}></WishModalInputWrapper>
        </div>
        <div className="button">
          <WishModalButtonWrapper disabled={WishModalDisabled} onClick={() => createWishMethod()}>
            创建
          </WishModalButtonWrapper>
        </div>
      </WishModalWrapper>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  list: PropTypes.array,
};

export default RoomItem;
