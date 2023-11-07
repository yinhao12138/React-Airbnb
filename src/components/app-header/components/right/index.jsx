import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";

const HeaderRight = memo(() => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "click",
      () => {
        setShowPopUp(false);
      },
      true //window 第二个参数设置true为捕获
    );
    return () => {
      window.removeEventListener(
        "click",
        () => {
          setShowPopUp(false);
        },
        true
      );
    };
  }, []);

  function showPopUpMethod() {
    setShowPopUp(true);
  }

  return (
    <RightWrapper>
      <div className="rightBox">
        <span>登陆</span>
        <span>注册</span>
        <span>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={() => showPopUpMethod()}>
        <IconProfileMenu></IconProfileMenu>
        <IconProfileAvatar></IconProfileAvatar>
        {showPopUp && (
          <div className="popUp">
            <div className="top topBorder">
              <div>注册</div>
              <div>登陆</div>
            </div>
            <div className="bottom">
              <div>出租房源</div>
              <div>开展体验</div>
              <div>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
