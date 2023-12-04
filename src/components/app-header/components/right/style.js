import styled from "styled-components";

export const RightWrapper = styled.div`
  padding-right: 80px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  .rightBox {
    display: flex;
    align-items: center;
    font-size: small;
    color: ${(props) => props.theme.textColor.primaryColor};

    span {
      padding-right: 18px;
    }
  }

  .profile {
    position: relative;
    width: 75px;
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid gray;
    color: black;
    border-width: 600;
    boxshadow: ${(props) => props.theme.mixin.boxShadow};

    .popUp {
      font-size: small;
      top: 58px;
      right: 1px;
      position: absolute;
      width: 200px;

      background-color: #fff;

      border-radius: 15px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

      .bottom {
        padding-top: 12px;

        div {
          height: 30px;
          line-height: 30px;
          padding-left: 22px;
          margin-bottom: 8px;

          &:hover {
            background-color: #efefed;
          }
        }
      }
    }
  }
`;
