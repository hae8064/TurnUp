import styled from 'styled-components';

export const AuthLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  position: relative;
  @media screen and (max-width: 500px) {
    overflow-y: scroll;
  }
  .modal_bgtrue {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal_bgfalse {
    display: none;
  }

  .authLogo {
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 10px;
    left: 10px;
    align-items: center;
    @media screen and (max-width: 500px) {
      background: white;
      width: 100vw;
      height: 50px;
      margin: 0;
      z-index: 1;
      top: 0;
      left: 0;
      margin-left: 5px;
      .logoSignUp {
        left: 10px;
      }
    }

    span {
      @media screen and (max-width: 500px) {
        display: none;
      }
      display: flex;
    }

    .logoSignUp {
      @media screen and (max-width: 500px) {
        display: flex;
        position: absolute;
        top: 10px;
      }
      display: none;
    }
    .menuIconSignUp {
      @media screen and (max-width: 500px) {
        display: flex;
        position: absolute;
        left: 340px;
        top: 10px;
      }
      display: none;
    }

    & > img {
      position: absolute;
      left: 28px;
      top: 28px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 500px) {
        left: 0px;
        right: 50px;
        top: 20px;
      }
    }

    & > .menuIcon {
      @media screen and (max-width: 500px) {
        position: absolute;
        top: 15px;
        display: flex;
        left: 340px;
        width: 30px;
        height: 30px;
      }
      display: none;
    }

    .backIcon {
      @media screen and (max-width: 500px) {
        display: none;
      }
      display: flex;
      flex-direction: row;
    }
  }

  .inner {
    max-width: 376px;
    margin: 0 auto;
    overflow-y: auto;

    .signUpBottomInfo {
      display: flex;
      flex-direction: row;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 12px;
      text-align: center;

      color: #d2d0ce;
      margin-top: 12px;
    }

    .signUpTopText {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .innerSignUpText {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 42px;
        /* identical to box height, or 140% */

        display: flex;
        align-items: center;

        /* Text/Light/Primary Text */

        color: #0b0b0c;

        @media screen and (max-width: 500px) {
          margin-top: 48px;
        }
      }

      .innerSignUpSubTextfalse {
        /* PC/Body/Body 4 */

        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;

        /* Text/Light/Secondary Text */

        color: #484848;
        margin-bottom: 40px;
      }

      .innerSignUpSubTexttrue {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;

        /* Text/Light/Secondary Text */

        color: #484848;
        margin-bottom: 10px;
      }
      margin-top: 46px;
    }

    .loginBottomContainer {
      display: flex;
      justify-content: center;
      margin-top: 12px;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: center;

      color: #000000;

      & > .loginSignUpText {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        text-align: center;
        text-decoration-line: underline;

        /* Text/Dark/Tertiary Text */

        color: #3b89fe;
      }
    }

    .forgotPwdRowContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 11.5px;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      display: flex;
      align-items: center;
      text-align: right;

      /* Text/Light/Secondary Text */

      color: #484848;
      margin-bottom: 34px;

      @media screen and (max-width: 500px) {
        width: 97%;
      }
    }

    .autoLoginRight {
      text-decoration-line: underline;
    }

    .autoLoginLeft {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: center;

      /* Text/Light/Secondary Text */

      color: #484848;
      text-decoration-line: none;
    }

    .snsButtons {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 500px) {
        width: 97%;
      }
    }

    .loginHrOrLine {
      width: 956;
      background: #ffffff;
      padding-left: 13px;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      display: flex;
      align-items: center;

      color: #d6d6d6;
      height: 1px;
      /* border: 1px solid #d6d6d6; */
      margin-top: 37px;
      background: #d6d6d6;
      position: relative;
      margin-bottom: 40px;

      @media screen and (max-width: 500px) {
        width: 94%;
      }

      & > span {
        position: absolute;
        left: 170px;
        z-index: 1;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */

        display: flex;
        align-items: center;

        color: #d6d6d6;
        background: #ffffff;
        padding-left: 5px;
        width: 30px;
      }
    }

    .tud_input + .tud_input {
      margin-top: 24px;
    }
    .mainLogintext {
      /* PC/Heading/Bold/Display 5 */

      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 42px;
      /* or 140% */

      display: flex;
      align-items: center;

      /* Text/Light/Primary Text */

      color: #0b0b0c;
      position: relative;

      margin-top: 189px;

      @media screen and (max-width: 500px) {
        margin-top: 92px;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        height: 80px;
        /* identical to box height, or 100% */

        display: flex;
        align-items: center;

        /* Text/Light/Primary Text */

        color: #0b0b0c;
        width: 300px;
      }

      .textStyleLine {
        position: absolute;
        right: 22px;

        @media screen and (max-width: 500px) {
          left: 140px;
          width: 49%;
        }
      }

      .textStyleLine2 {
        position: absolute;
        right: 5px;
        top: -4px;

        @media screen and (max-width: 500px) {
          top: 0;
          right: 2px;
        }
      }
    }

    .mainLoginSubtext {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: center;

      /* Text/Light/Secondary Text */

      color: #484848;
      margin-top: 31px;
    }
  }

  .auth_left,
  .auth_right {
    flex: 1;
  }

  .auth_right {
    @media screen and (max-width: 500px) {
      display: none;
    }
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #2f69ff 0%, #0638b8 100%);
    justify-content: center;
    align-items: center;
    .imgMainText {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 61px;
      /* or 127% */

      display: flex;
      align-items: center;
      text-align: center;

      color: #ffffff;
      margin-top: 170px;
    }

    .imgSubText {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      /* identical to box height, or 150% */

      color: #ffffff;
      margin-top: 28px;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;
