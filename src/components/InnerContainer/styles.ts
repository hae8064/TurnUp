import styled from 'styled-components';

export const InnerContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  .innerContents {
    height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 640px;
    /* margin-left: 308px; */
    flex: 1;
    ::-webkit-scrollbar {
      display: none;
    }

    .greyRight {
      width: 200px;
      height: 100px;
      background: #484848;
    }
    .contentsTitle {
      display: flex;
      justify-content: flex-start;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.5;
      color: #0b0b0c;
      margin-top: 68px;
    }

    .contentsSub {
      width: 640px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;

      .subTitle {
        font-family: 'LINE Seed Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #484848;
      }

      .appDownBtn {
        position: relative;
        background: #3b72fe;
        width: 180px;
        border-radius: 10px;
        padding: 10px 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        color: #ffffff;
        margin: 0;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        .toolTipCT1 {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .toolTip {
          position: absolute;
          top: 120%;
          width: 361px;
          height: 228px;
          background: #ffffff;
          color: #000;
          border-radius: 8px;
          z-index: 11;
        }

        .toolTipCT0 {
          /* display: none; */
        }
      }
    }
  }
`;
