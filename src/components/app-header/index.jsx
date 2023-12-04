import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, SearchAreaPlaceholder } from "./style";
import HeaderCenter from "./components/center";
import HeaderRight from "./components/right";
import HeaderLeft from "./components/left";

const Header = memo((props) => {
  const { isFixed } = props;
  const [isSearch, setIsSearch] = useState(false);

  function searchBarClickHandle(bool) {
    setIsSearch(bool);
  }

  return (
    <HeaderWrapper $isfixed={isFixed}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={(e) => searchBarClickHandle(true)} />
          <HeaderRight />
        </div>
        <SearchAreaPlaceholder height={isSearch ? "100px" : "0px"} />
      </div>
      {isSearch && <div className="cover" onClick={(e) => searchBarClickHandle(false)}></div>}
    </HeaderWrapper>
  );
});

Header.propTypes = {
  isFixed: PropTypes.string,
};

export default Header;
