import styled from 'styled-components';

export const RelativeProductsStyle = styled.div`
  margin-top: 20px;
  .title {
    font-family: 'LINE Seed Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #0b0b0c;
  }

  .productsContainer {
    display: flex;
    flex-direction: row;

    .productImg {
      position: relative;
      .sameContainer {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 55px;
        height: 55px;
        background: linear-gradient(0deg, #4d49fb 37.09%, #1d1abf 100%);
        opacity: 0.88;
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;

        .sameContent {
          margin-top: 4px;
          font-family: 'Spoqa Han Sans Neo';
          font-style: normal;
          font-weight: 700;
          font-size: 9px;
        }
      }
    }

    .productInfo {
      display: flex;
      flex-direction: column;
      margin-left: 16px;

      .subtitle {
        margin-top: 12px;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        /* identical to box height, or 150% */

        /* Text/Light/Primary Text */

        color: #0b0b0c;
      }

      .title {
        margin-top: 8px;
        font-family: 'LINE Seed Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        /* identical to box height, or 150% */

        /* Text/Light/Primary Text */

        color: #0b0b0c;
      }

      .price {
        margin-top: 8px;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        /* identical to box height, or 150% */

        /* Text/Light/Primary Text */

        color: #0b0b0c;
      }

      .buyBtn {
        margin-top: 15px;
        /* Dividers/Enabled */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 16px;
        border: 1px solid #3b72fe;
        border-radius: 10px;
        color: #3b72fe;

        span {
          font-family: 'Spoqa Han Sans Neo';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          margin-right: 3px;

          /* Text/Light/Tertiary Text */
        }
      }
    }
  }
`;
