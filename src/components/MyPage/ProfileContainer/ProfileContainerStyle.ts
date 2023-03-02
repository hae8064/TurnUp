import styled from 'styled-components';

export const ProfileContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  .profileSettingContainer {
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profileSetting {
    width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > h3 {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #0b0b0c;
      margin-top: 40px;
    }

    .subTitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 8px;
      width: 100%;

      & > h4 {
        font-family: 'LINE Seed Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #484848;
      }

      & > p {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #d2d0ce;
      }

      & > p:hover {
        cursor: pointer;
      }
    }

    .profileImg {
      margin: 0 auto;
      margin-top: 48px;
      position: relative;
      display: flex;
      flex-direction: column;

      .profileEditModal {
        position: absolute;
        top: 30%;
        left: -120%;
        display: flex;
        width: 400px;
      }

      .editIcon {
        position: absolute;
        background: #3b72fe;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -10px;
        top: 80px;
        & > svg {
          width: 23px;
          color: white;
          height: 23px;
        }
      }
      & > span {
        margin-top: 12px;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #0b0b0c;
        margin-bottom: 32px;
      }
    }

    .inputCT1,
    .inputCT2,
    .inputCT3 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      & > * {
        flex: 9;
      }

      .center {
        flex: 1;
        height: 100%;
      }
    }

    .inputCT3 {
      display: flex;
      align-items: flex-start;
      & > * {
        margin-top: 0;
      }
    }

    & > p {
      width: 100%;
      height: 1px;
      background: #ebeae9;
    }

    .inputCT4 {
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > * {
        flex: 9;
      }

      .center {
        flex: 1;
        height: 100%;
      }
    }

    & > button {
      margin: 0 auto;
      width: 50%;
      margin-top: 32px;
    }
  }

  .rightGrey {
    width: 96px;
    height: 100%;
    background: #f7f7f8;
  }
`;
