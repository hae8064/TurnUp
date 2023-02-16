import styled from 'styled-components';

export const LoginRightContainer = styled.div`
  flex-shrink: 1;
  background: linear-gradient(180deg, #2f69ff 0%, #0638b8 100%);
  height: 100vh;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
`;

export const LoginComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

export const LoginMainImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginQuestionSubText = styled.div`
  /* PC/Body/Body 3 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;

export const LoginContentsFunnyText = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 61px;
  /* or 127% */

  display: flex;
  justify-content: center;
  text-align: center;

  color: #ffffff;
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: ${(props) => props.height};
`;

export const EmailText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => (props.type === 'email' ? '42px' : '19.5px')};

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Text/Light/Secondary Text */

  color: #484848;
`;

export const EmailInput = styled.input`
  width: 376px;
  height: 52px;

  /* Dividers/Default */

  border: 1px solid #d2d0ce;
  border-radius: 10px;

  /* identical to box height, or 150% */

  /* Text/Light/Disabled Text */
  ::placeholder {
    color: #d2d0ce;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  color: #0b0b0c;

  margin-top: 7.5px;
  text-indent: 16px;
`;

export const PwdInput = styled.input`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* identical to box height, or 150% */

  /* Text/Light/Disabled Text */

  ::placeholder {
    color: #d2d0ce;
  }

  color: #0b0b0c;
  text-indent: 16px;
  width: 340px;
  border: none;
  &:focus {
    /* outline: none; */
  }
  outline-color: #3b72fe;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 52px;
  border: 1px solid #d2d0ce;
  border-radius: 10px;
  width: 390px;
`;

export const PwdInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 390px;
  height: 52px;
  background: #ffffff;
  align-items: center;
  border: 1px solid #d2d0ce;
  border-radius: 10px;
  margin-top: 7.5px;
  justify-content: space-between;
  /* padding-right: 15.5px; */

  &:focus {
    /* outline: none; */
    border-color: red;
  }
  position: relative;
`;

export const MainLoginBtn = styled.div`
  width: 393px;
  height: 64px;

  /* Button/Disabled */

  background: #3b72fe;
  border-radius: 12px;
  margin-top: 36px;

  /* PC/Body/Body 4 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Text/Dark/Primary Text */

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
