import { styled } from "styled-components";
import { Carousel } from "antd";
export const SliderWrapper = styled.div`
  .slider {
    position: relative;
    cursor: pointer;

    .control {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 2;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .arrowIcon {
        height: 100%;
        width: 28%;
        color: wheat;

        display: flex;
        align-items: center;
        justify-content: center;

        & :hover {
          background-color: rgba(255, 255, 255, 0.3);
          color: black;
          padding: 10px;
          border-radius: 50%;
        }
      }

      .left {
        left: 0;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
      }

      .right {
        right: 0;
        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
      }
    }

    .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
`;

export const CarouselWrapper = styled(Carousel)`
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
