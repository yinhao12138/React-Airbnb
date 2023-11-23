import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { RoomWrapper, ItemWrapper, WishModalWrapper, WishModalButtonWrapper, WishModalInputWrapper } from "./style";
import IconLoveImage from "@/assets/svg/icon_love";
import IconStart from "@/assets/svg/icon_start";
import { useNavigate } from "react-router-dom";

const RoomItem = memo((props) => {
  const [wishModelStatus, setWishModelStatus] = useState(false);
  const [wishModelInput, setWishModelInput] = useState("");
  const [WishModalDisabled, setWishModalDisabled] = useState(true);

  const { list = [], width } = props;

  const navigate = useNavigate();

  function goDetail(i) {
    // console.log(i);
    navigate("/entire");
  }

  function wishList(e, i) {
    e.stopPropagation();
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

  return (
    <RoomWrapper>
      {list.map((item) => {
        return (
          <ItemWrapper key={item.id} width={width}>
            <div className="inner" onClick={() => goDetail(item)}>
              <div className="cover">
                <img src={item.picture_url} alt="" />
                <div className="icon" onClick={(event) => wishList(event, item)}>
                  <IconLoveImage></IconLoveImage>
                </div>
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
