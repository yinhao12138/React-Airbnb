import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    width: 127px;
    height: 55px;
    line-height: 55px;
    margin-right: 16px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    font-size: small;
    flex-basis: 120px;
    flex-shrink: 0;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      border: 1px solid black;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .selection {
    background-color: rgb(230, 230, 230);
    border: 1px solid black;
  }
`;
