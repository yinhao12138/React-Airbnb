import styled from "styled-components";
import { Modal, Button, Input } from "antd";

export const RoomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

export const ItemWrapper = styled.div`
  width: 20%;
  padding: 8px;
  box-sizing: border-box;

  .inner {
    cursor: pointer;
    width: 100%;

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
