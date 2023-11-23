import styled from "styled-components";

export const FilterDateWrapper = styled.div`
  display: flex;
  /* position: fixed; */

  .item {
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    margin: 0 15px;
    padding: 0 25px;
    font-size: small;
    border-radius: 14px;
    border: 1px solid rgb(221, 221, 221);

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
  }

  .checkBox {
    background-color: red;
    color: white;
  }
`;
