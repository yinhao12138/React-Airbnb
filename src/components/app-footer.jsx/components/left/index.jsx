import React, { memo, useState } from "react";
import IconWeiBo from "@/assets/svg/icon_weibo";
import IconWinXin from "@/assets/svg/icon_weixin";
import IconGlobal from "@/assets/svg/icon-global";
import IconArrowTop from "@/assets/svg/icon_arrow_top";
import { LeftWrapper, DrawerWrapper } from "./style";
import footerData from "@/assets/data/footer";

const FootLeft = memo(() => {
  const [openDrawerState, setOpenDrawerState] = useState(false);
  const [placement, setPlacement] = useState("bottom");

  function openDrawer() {
    setOpenDrawerState(true);
  }

  function closeDrawer() {
    setOpenDrawerState(false);
  }

  return (
    <LeftWrapper>
      <div className="icon">
        <IconWeiBo></IconWeiBo>
      </div>
      <div className="icon">
        <IconWinXin></IconWinXin>
      </div>
      <div className="icon">
        <IconGlobal></IconGlobal>
      </div>
      <span className="item chinese">简体中文(CN)</span>
      <span className="item" onClick={() => openDrawer()}>
        ￥CNY支持和资源
      </span>
      <div className="arrowTop" onClick={() => openDrawer()}>
        <IconArrowTop></IconArrowTop>
      </div>
      <DrawerWrapper placement={placement} width={500} onClose={closeDrawer} open={openDrawerState} height="269px">
        <div className="drawerContent">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.name}>
                <div className="name">{item.name}</div>
                <div className="list">
                  {item.list.map((iten) => {
                    return (
                      <div className="iten" key={iten}>
                        {iten}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </DrawerWrapper>
    </LeftWrapper>
  );
});

export default FootLeft;
