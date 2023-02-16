import styled from 'styled-components';
interface PwdForgotStyle {
  visible?: boolean;
}

export const PwdForgotStyle = styled.div<PwdForgotStyle>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border-radius: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  width: 448px;
  height: 410px;
  transform: translate(-50%, -50%);
  z-index: 1;

  .topIcon {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .content {
    padding: 36px 36px 36px 36px;
  }

  .contentTitle {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Text/Light/Primary Text */

    color: #0b0b0c;
  }

  .contentSubTitle {
    /* PC/Body/Body 4 */

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: center;

    /* Text/Light/Secondary Text */

    color: #484848;
    margin-top: 10px;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    .contentSubTitle {
      width: 95%;
      /* padding-right: 10px; */
    }
    br {
      display: none;
    }
  }
`;
