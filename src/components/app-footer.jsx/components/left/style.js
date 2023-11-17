import styled from "styled-components";
import { Drawer } from "antd";

export const LeftWrapper = styled.div`
  padding-left: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 11.5px;
  font-weight: 500;

  .icon {
    padding: 0 8px;
  }
  .item {
    &:hover {
      border-bottom: 1px solid black;
    }
  }
  .chinese {
    margin-right: 16px;
  }
  .arrowTop {
    padding-left: 5px;
  }
`;

export const DrawerWrapper = styled(Drawer)`
  border-radius: 10px 10px 0 0;

  .drawerContent {
    width: calc(100% - 160px);
    margin: auto 80px;
    display: flex;
    justify-content: space-between;

    .item {
      width: 406px;
      font-size: small;

      .name {
        font-weight: 500;
        color: rgb(72, 72, 72);
      }

      .list {
        cursor: pointer;
        margin-top: 16px;
        color: rgb(118, 118, 118);

        .iten {
          margin-bottom: 6px;
        }
      }
    }
  }
`;
