import styled from "styled-components";

export const LongForWrapper = styled.div`
  margin-left: -12px;
  .item {
    .image-box {
      position: relative;
      width: 230px;
      margin-left: 12px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }

      .title-box {
        width: 100%;
        height: 100%;
        bottom: 0;
        background-color: red;
        position: absolute;
        border-radius: 20px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgb(0, 0, 0, 1));

        > div {
          text-align: center;
          padding-top: 190px;
          color: white;

          .city {
            font-size: 18px;
            font-weight: 800px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
`;
