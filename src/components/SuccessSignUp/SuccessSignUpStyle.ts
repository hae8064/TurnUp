import styled from 'styled-components';
interface styleInt {
  display: string;
}
export const SuccessSignUpStyle = styled.div<styleInt>`
  display: ${(props) => props.display};
  flex-direction: column;
  background: #0b0b0c;
  box-shadow: 0px 4px 20px rgba(11, 11, 12, 0.28);
  border-radius: 16px;
  padding: 44px 36px;
  position: absolute;
  z-index: 10;

  @media screen and (max-width: 500px) {
    padding: 44px 30px;
  }

  .spanTitle {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Text/Dark/Primary Text */

    color: #ffffff;
  }

  .spanSubText {
    /* PC/Body/Body 4 */

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    /* Text/Dark/Secondary Text */

    color: #e1dfdd;
    margin-top: 10px;
  }
`;
