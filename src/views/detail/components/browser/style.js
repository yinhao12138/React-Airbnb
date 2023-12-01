import { styled } from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  background-color: rgb(34, 34, 34);
  width: 100%;
  height: 100%;

  .top {
    padding: 30px 35px;
    width: 100%;
    height: 86px;
    color: white;
    box-sizing: border-box;
  }

  .box {
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: space-around;

    .left {
      color: white;
      display: flex;
      align-items: center;
      margin-left: 20px;
      position: relative;

      .arrow {
        position: absolute;
        left: 0;
      }
    }

    .content {
      width: 90%;
      overflow: hidden;

      .image {
        img {
          width: 100%;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      margin-right: 20px;
      color: white;
      position: relative;

      .arrow {
        position: absolute;
        right: 0;
      }
    }
  }

  .bottom {
    position: absolute;
    left: 25%;
    height: 100px;
    background-color: pink;
    width: 1118px;
    overflow: hidden;

    .slider-list {
      height: 100%;
      width: 1118px;

      .number {
        width: 100%;
        height: 20px;
        background-color: rgb(34, 34, 34);
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        line-height: 20px;
        color: white;

        .right {
          width: 90px;

          .icon {
            padding: 1px 0 0 5px;
          }
        }
      }

      .list {
        position: relative;
        height: 67px;
        margin-top: 13px;
        display: flex;
        margin-left: -10px;
        background-color: red;

        .image {
          padding-left: 10px;

          img {
            width: 100px;
          }
          .cover {
            position: absolute;
            background-color: rgba(34, 34, 34, 0.5);
            width: 100px;
            height: 67px;
            opacity: 1 !important;
          }

          .selectcover {
            opacity: 0 !important;
          }
        }
      }
    }
  }
`;
