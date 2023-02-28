import styled from 'styled-components';

export const NavigationStyle = styled.div`
  width: 460px;
  height: 100%;
  background: #f7f7f8;
  position: relative;
  .NavigationMain {
    position: absolute;
    width: 260px;
    height: 100%;
    background: white;
    right: 0px;
    z-index: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    .NavigationMainTop {
      width: 220px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 40px;
      position: relative;
      .NavProfileIcon {
        width: 44px;
        height: 44px;

        background: #ff5b13;
        flex: none;
        order: 0;
        flex-grow: 0;
        border-radius: 15px;
      }
      .NavProfileInfo {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        .NavName {
          /* PC/Heading/Title/Title 3 */

          font-family: 'LINE Seed Sans KR';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          /* Text/Light/Primary Text */

          color: #0b0b0c;
        }
        .NavEmail {
          font-family: 'Spoqa Han Sans Neo';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          /* identical to box height, or 133% */

          /* Text/Light/Secondary Text */

          color: #484848;
        }
      }
      .arrowIcon {
        width: 9px;
        height: 6px;
        position: absolute;
        right: 0px;
      }
    }
    .divider {
      width: 220px;
      height: 0.7px;

      /* Dividers/Completed */

      background: #ebeae9;
      margin-top: 32px;
    }

    .NavigationMainContent {
      width: 220px;
      display: flex;
      flex-direction: column;
      margin-top: 28px;

      .NavMyPage {
        margin-bottom: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .PersonIcon {
          margin-right: 8px;
          width: 17px;
          height: 17px;
        }
        .NavMyPageTitle {
          font-family: 'Spoqa Han Sans Neo';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #0b0b0c;
        }
      }
    }
  }
`;
