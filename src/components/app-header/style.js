import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .content {
    position: relative;
    z-index: 9;
    transition: all 250ms ease;
    border-bottom-color: rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);

    /* border-bottom-color: ${(props) => (props.theme.isAlpha ? "rgba(238,238,238,0)" : "rgba(238,238,238,1)")};
    background-color: ${(props) => (props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)")}; */

    .top {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: white;
      z-index: 99; //解决脱离文本流图片优先级问题
      position: ${(props) => props.$isfixed};
      top: 0;
    }
  }

  .cover {
    position: fixed;
    top: 180px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9;
  }
`;

export const SearchAreaPlaceholder = styled.div`
  /* height: ${(props) => (props.$issearch ? "100px" : "0")}; */
  height: ${(props) => props.height};
  transition: height 250ms ease;
`;
