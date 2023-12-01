import PropTypes from "prop-types";
import React, { memo } from "react";
import { PictureWrapper } from "./style";

const Picture = memo((props) => {
  const { picture } = props;

  function seePicture(e) {
    e.stopPropagation(); // <!-- 阻止事件冒泡 -->
    console.log("<!-- 阻止事件冒泡 -->");
  }

  return (
    <PictureWrapper>
      <div className="left">
        <div className="item">
          <img src={picture[0]} alt="" />
          <div className="cover"> </div>
        </div>
      </div>
      <div className="right">
        {picture.slice(1, 5).map((it) => {
          return (
            <div className="item" key={it}>
              {<img src={it} alt="" />} <div className="cover"> </div>
            </div>
          );
        })}
      </div>
      <div className="show-btn" onClick={(e) => seePicture(e)}>
        查看照片
      </div>
    </PictureWrapper>
  );
});

Picture.propTypes = {
  picture: PropTypes.array,
};

export default Picture;
