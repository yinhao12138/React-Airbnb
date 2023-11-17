import styled from "styled-components";

export const RightWrapper = styled.div`
  padding-right: 80px;
  color: rgb(176, 176, 176);
  font-size: 11px;
  text-align: right;

  .item {
    cursor: pointer;
    &:hover {
      color: black;
      border-bottom: 1px solid black;
    }
  }
`;
