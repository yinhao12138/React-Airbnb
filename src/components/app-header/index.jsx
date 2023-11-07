import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderCenter from "./components/center";
import HeaderRight from "./components/right";
import HeaderLeft from "./components/left";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

export default Header;
