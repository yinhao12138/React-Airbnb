import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { PictureWrapper } from "./style";
import Browser from "../browser";

const Picture = memo((props) => {
  const [showBrowser, setShowBrowser] = useState(false);

  const { picture, name } = props;

  function seePicture(e) {
    e.stopPropagation(); // <!-- 阻止事件冒泡 -->
    setShowBrowser(true);
  }

  function closePicture(l) {
    setShowBrowser(l);
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
      {!showBrowser && (
        <div className="show-btn" onClick={(e) => seePicture(e)}>
          查看照片
        </div>
      )}
      {showBrowser && <Browser pictureUrls={picture} infoName={name} closePicture={(e) => closePicture(e)}></Browser>}
    </PictureWrapper>
  );
});

Picture.propTypes = {
  picture: PropTypes.array,
  name: PropTypes.string,
};

export default Picture;
