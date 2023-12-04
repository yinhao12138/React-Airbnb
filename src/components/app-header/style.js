import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .content {
    position: relative;
    z-index: 9;
    transition: all 250ms ease;
    border-bottom-color: rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);

    .top {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      z-index: 9; //解决脱离文本流图片优先级问题
      position: ${(props) => props.$isfixed};
      background-color: white;
      top: 0;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
`;

export const SearchAreaPlaceholder = styled.div`
  /* height: ${(props) => (props.$issearch ? "100px" : "0")}; */
  /* height: ${(props) => (props.$isfixed === "none" ? "100px" : props.heigh)}; */
  height: ${(props) => props.height};
  width: 100%;
  transition: height 250ms ease;
  position: ${(props) => props.$isfixed};
  background-color: white;
  /* background-color: red; */
`;
