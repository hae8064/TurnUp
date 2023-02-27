import styled from 'styled-components';

export const InnerContainerStyle = styled.div`
  .innerContents {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: 308px;
    ::-webkit-scrollbar {
      display: none;
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
      }
    }
  }
`;
