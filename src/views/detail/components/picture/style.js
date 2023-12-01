import { styled } from "styled-components";

export const PictureWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 700px;
  display: flex;
  background-color: #000;

  .cover {
    opacity: 1 !important;
  }

  .item:hover {
    .cover {
      opacity: 0 !important;
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .left {
    width: 50%;
    height: 100%;

    .item {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      border: 1px solid black;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .show-btn {
    cursor: pointer;
    position: absolute;
    z-index: 99;
    left: 15px;
    top: 15px;
    line-height: 22px;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #fff;
    font-size: small;
  }
`;
