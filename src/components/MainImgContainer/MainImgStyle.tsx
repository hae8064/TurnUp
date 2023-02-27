import styled from 'styled-components';

export const MainImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;

  .title {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #0b0b0c;
  }

  .subTitle {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .subPlatForm {
      display: flex;
      flex-direction: row;
      align-items: center;

      .youtubeIcon {
        margin-right: 4px;
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          color: white;
        }
      }

      .platform {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height, or 154% */

        display: flex;
        align-items: center;

        color: #717171;
      }
    }

    .calendar {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      /* identical to box height, or 143% */

      /* Text/Light/Secondary Text */

      color: #484848;
    }
  }

  .mainImage {
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    .contentsQuestion {
      height: 80px;
      background: #ffffff;

      border: 1px solid #ebeae9;
      padding: 16px;
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;

        .titleContents {
          margin-left: 6px;
          font-family: 'LINE Seed Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          /* identical to box height, or 150% */

          /* Text/Light/Primary Text */

          color: #0b0b0c;
        }
      }

      .subTitle {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        /* identical to box height, or 143% */

        /* Text/Light/Secondary Text */

        color: #484848;
        margin-top: 10px;
      }
    }
  }
`;
