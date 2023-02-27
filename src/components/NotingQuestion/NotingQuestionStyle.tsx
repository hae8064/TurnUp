import styled from 'styled-components';

export const NotingQuestionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    /* identical to box height, or 140% */

    /* Text/Light/Primary Text */

    color: #0b0b0c;
    margin-top: 54px;
  }

  .subTitle1 {
    margin-top: 20px;
  }

  .subTitle1,
  .subTitle2,
  .subTitle3 {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    .borderCircle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #484848;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;

      span {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        color: #f3f2f1;
      }
    }
  }

  .appDownBtn {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #3b72fe;
    border-radius: 10px;
    padding: 16px 32px;
    color: white;

    span {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      /* identical to box height, or 143% */

      display: flex;
      align-items: center;

      /* Text/Dark/Primary Text */
      margin: 0 8px;
    }
  }

  .rightGrey {
    position: absolute;
    right: 0;
    width: 200px;
    height: 100%;
    background: #f7f7f8;
  }
`;
