import React, { memo } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper } from "./style";
import HeaderCenter from "./components/center";
import HeaderRight from "./components/right";
import HeaderLeft from "./components/left";

const Header = memo((props) => {
  const { isFixed } = props;

  return (
    <HeaderWrapper $isfixed={isFixed}>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

Header.propTypes = {
  isFixed: PropTypes.string,
};

export default Header;
