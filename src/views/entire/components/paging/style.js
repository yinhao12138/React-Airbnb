import styled from "styled-components";
import { Pagination } from "antd";

export const PageIngWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0 35px 0;

  .box {
    text-align: center;

    .desc {
      padding-top: 15px;
      font-size: small;
    }
  }
`;

export const PaginationWrapper = styled(Pagination)`
  .ant-pagination-item-link {
    border-radius: 50% !important;
  }

  .ant-pagination-item-active {
    background-color: red;
    border-radius: 50%;
    border: 1px solid white;

    a {
      color: white;
    }
  }

  .ant-pagination-item {
    &:hover {
      border-radius: 50%;
      border: 1px solid white;
      a {
        color: white;
      }
    }
  }
`;
