import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 40px;

  h3 {
    padding: 20px 0 10px 0;
  }

  .top-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .content {
      width: 20%;
      padding: 8px;
      box-sizing: border-box;

      .inner {
        cursor: pointer;
        width: 100%;

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
    }
  }
`;
