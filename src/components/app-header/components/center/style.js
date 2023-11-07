import styled from "styled-components";

export const CenterWrapper = styled.div`
  width: 325px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  boxshadow: ${(props) => props.theme.mixin.boxShadow};

  .centerBox {
    font-size: small;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 30px);
    margin: auto 15px;

    .searchIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: wheat;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }
`;
