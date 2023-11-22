import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .control {
    position: absolute;
    left: 0;
    height: 68px;
    width: 48px;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%);

    &.left {
      .arrow {
        background: #fff url(${require("@/assets/icon/arrow-left.svg").default}) center/12px 12px no-repeat;
      }
    }

    &.right {
      left: auto;
      right: 0;
      background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);

      .arrow {
        left: auto;
        right: -10px;
        background: #fff url(${require("@/assets/icon/arrow-right.svg").default}) center/12px 12px no-repeat;
      }
    }

    .arrow {
      position: absolute;
      width: 28px;
      height: 28px;
      left: -10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border-radius: 50%;
      background-color: #f00;
      border: 2px solid transparent;
      box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;
      cursor: pointer;
    }
  }
  .content {
    overflow: hidden; //tab外层盒子超出隐藏

    .scroll {
      position: relative;
      display: flex;
      white-space: nowrap;
      transition: transform 250ms ease;
    }
  }
`;
