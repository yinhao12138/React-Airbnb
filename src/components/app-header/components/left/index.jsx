import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  function iconRoute() {
    console.log("test");
  }

  return (
    <LeftWrapper>
      <span onClick={iconRoute}>
        <IconLogo onClick={iconRoute} />
      </span>
    </LeftWrapper>
  );
});

export default HeaderLeft;
