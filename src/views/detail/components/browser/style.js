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

  .middle {
    /* 300px 底部留白 */
    height: calc(100% - 486px);
    display: flex;

    .arrow {
      width: 75px;
      position: relative;

      > span {
        color: white;
        position: absolute;
        top: 50%;
      }
    }

    .content {
      width: 100%;
      overflow: hidden;

      .slider {
        width: calc(100% - 54%);
        margin: 0 27%;

        img {
          width: 100%;
        }
      }
    }
  }

  .bottom {
    box-sizing: border-box;
    margin: 0 75px;
    height: 100px;
    font-size: 11px;
    overflow: hidden;

    .content {
      width: calc(100% - 54%);
      margin: 5px 27% 0;
      overflow: hidden;
      transition: transform 300ms ease;

      .text {
        height: 20px;
        line-height: 20px;
        color: white;
        background-color: rgb(34, 34, 34);
        display: flex;
        justify-content: space-between;

        .right {
          width: 90px;
        }
      }

      .carousel {
        position: relative;
        display: flex;
        margin: 10px 0 0 -11px;
        transition: transform 300ms ease;

        .slider {
          padding-left: 11px;

          img {
            width: 106px;
            height: 67px;
          }
          .cover {
            width: 106px;
            height: 67px;
            position: absolute;
            background-color: rgba(34, 34, 34, 0.5);
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
