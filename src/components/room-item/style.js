import styled from "styled-components";
import { Modal, Button, Input, Carousel } from "antd";

export const RoomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

export const ItemWrapper = styled.div`
  width: ${(props) => props.width};
  padding: 8px;
  box-sizing: border-box;

  .inner {
    cursor: pointer;
    width: 100%;

    .slider {
      position: relative;
      cursor: pointer;

      .control {
        .arrowIcon {
          color: wheat;
          position: absolute;
          width: 28%;
          height: 100%;
          top: 0;
          z-index: 2;
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
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.65) 100%);
          /* background-color: red; */
          border-radius: 10px 0 0 10px;
        }

        .right {
          right: 0;
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.65) 100%);
          /* background-color: red; */
          border-radius: 0 10px 10px 0;
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

    .cover {
      position: relative;
      padding: 66.66% 8px 0;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 10px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .icon {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }
    }

    .desc {
      font-size: 11px;
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        background-color: #ebebeb;
        padding: 0 6px;
        border-radius: 4px;
      }

      .right {
        display: flex;
        align-items: center;

        .number {
          margin-left: 5px;
        }
      }
    }

    .name {
      padding-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 14px;
    }

    .price {
      padding-top: 8px;
      font-size: small;
      font-weight: 600;
    }
  }
`;

export const WishModalWrapper = styled(Modal)`
  .ant-modal-title {
    text-align: center;
  }

  .content {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    margin-top: 30px;
    height: 140px;
  }

  .button {
    height: 45px;
  }
`;

export const WishModalButtonWrapper = styled(Button)`
  margin-top: 10px;
  width: 100%;
  height: 45px;
`;

export const WishModalInputWrapper = styled(Input)`
  height: 50px;
  margin-top: 20px;
`;

export const CarouselWrapper = styled(Carousel)`
  img {
    border-radius: 10px;
    height: 194px;
    overflow: hidden;
  }
`;
