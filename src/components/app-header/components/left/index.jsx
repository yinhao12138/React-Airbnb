import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();

  function iconRoute() {
    navigate("/home");
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
