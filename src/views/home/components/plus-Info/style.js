import styled from "styled-components";

export const PlusInfoWrapper = styled.div`
  .inner {
    cursor: pointer;
    width: 195px;
    padding-left: 10px;

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
