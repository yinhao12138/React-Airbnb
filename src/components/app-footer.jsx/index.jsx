import React, { memo } from "react";
import { FooWrapper } from "./style";
import FootLeft from "./components/left";
import FootRight from "./components/right";

const Footer = memo(() => {
  return (
    <FooWrapper>
      <FootLeft></FootLeft>
      <FootRight></FootRight>
    </FooWrapper>
  );
});

export default Footer;
