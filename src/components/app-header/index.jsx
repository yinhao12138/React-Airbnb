import React, { memo, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, SearchAreaPlaceholder } from "./style";
import { throttle } from "underscore";
import HeaderCenter from "./components/center";
import HeaderRight from "./components/right";
import HeaderLeft from "./components/left";

const Header = memo((props) => {
  const { isFixed } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  function searchBarClickHandle(bool) {
    setIsSearch(bool);
  }

  // 监听鼠标滚轮滚动
  useEffect(() => {
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  const prevY = useRef(0); //上一次滚动的位置
  if (!isSearch) prevY.current = scrollY;
  // Math.abs 是取的绝对值
  if (isSearch && Math.abs(scrollY - prevY.current) > 100) {
    setIsSearch(false);
  }

  return (
    <HeaderWrapper $isfixed={isFixed}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={(e) => searchBarClickHandle(true)} />
          <HeaderRight />
        </div>
        <SearchAreaPlaceholder height={isFixed === "fixed" ? (isSearch ? "180px" : "0px") : isSearch ? "100px" : "0px"} $isfixed={isFixed} />
      </div>
      {isSearch && <div className="cover" onClick={(e) => searchBarClickHandle(false)}></div>}
    </HeaderWrapper>
  );
});

Header.propTypes = {
  isFixed: PropTypes.string,
};

export default Header;
