import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="centerBox">
        <span className="searchText">搜索房源和体验</span>
        <span className="searchIcon">
          <IconSearchBar></IconSearchBar>
        </span>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
