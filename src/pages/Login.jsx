import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/imgs/Logo.png';
import mainImg from '../assets/imgs/loginMain.png';
import { ReactComponent as KakaoIcon } from '../assets/Vector.svg';
import { ReactComponent as GoogleIcon } from '../assets/Google__G__Logo 1.svg';
import { ReactComponent as MailIcon } from '../assets/mail_line.svg';
import { ReactComponent as PwdIcon } from '../assets/lock-password-line.svg';
import { ReactComponent as CheckIcon } from '../assets/Vector-checkBoxFill.svg';
import { ReactComponent as CheckIconClick } from '../assets/Vector 5.svg';
import { ReactComponent as TextLine } from '../assets/Vector (1).svg';
import { ReactComponent as TextLine2 } from '../assets/Group 2137891616.svg';
import { ReactComponent as PwdVisibleIcon } from '../assets/eye-off-line.svg';
import { ReactComponent as ForgotX } from '../assets/closed-captioning-line.svg';
import * as S from '../styles/StyledComponent';
import { Link, useLocation } from 'react-router-dom';
import useEmailHook from '../hooks/useEmailHook';
import usePwdHook from '../hooks/usePwdHook';
import { useEffect } from 'react';

const Login = () => {
  const [autoSave, setAutoSave] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);

  const [email, emailChange, emailCheck] = useEmailHook();
  const [pwd, pwdChange, pwdCheck] = usePwdHook();
  const { state } = useLocation();
  const [currentState, setCurrentState] = useState(state);
  const [forgotPwd, setForgotPwd] = useState(false);

  //자동 저장 버튼 클릭
  const onAutoSaveClick = () => {
    setAutoSave(!autoSave);
  };

  //비밀번호 보이게
  const onPwdVisibleClick = () => {
    setPwdVisible(!pwdVisible);
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentState('');
    }, 2000);
  }, []);

  //비밀번호 잊으셨나요 클릭 이벤트
  const forgotPwdClick = () => {
    setForgotPwd(!forgotPwd);
  };

  return (
    <LoginComponent color={forgotPwd}>
      {forgotPwd ? (
        <LoginModalContainer color={forgotPwd}>
          <ForgotPwdModal>
            <ForgotX
              style={{ position: 'absolute', right: '20px', top: '20px' }}
              onClick={forgotPwdClick}
            />
            <ForgotContainer>
              <ForgotTitle>비밀번호를 잊으셨나요?</ForgotTitle>
              <ForgotSubTitle>
                가입하신 이메일 주소를 입력하면 새 비밀번호를 설정할 수 있는
                이메일을 보내드릴게요.
              </ForgotSubTitle>
              <ForgotEmail>
                <MailIcon style={{ marginRight: '3px' }} />
                이메일
              </ForgotEmail>
              <S.PwdInputContainer style={{ width: '350px' }}>
                <S.PwdInput
                  placeholder="turnup@email.com"
                  value={email}
                  onChange={emailChange}
                ></S.PwdInput>
              </S.PwdInputContainer>
              <MainLoginBtn style={{ width: '350px' }}>
                비밀번호 재설정 전송
              </MainLoginBtn>
            </ForgotContainer>
          </ForgotPwdModal>
        </LoginModalContainer>
      ) : null}
      <LoginLeftContainer>
        <LoginLogo>
          <img src={logo} alt="" />
        </LoginLogo>
        <LoginInputsContainer>
          {currentState === 'Complete' && (
            <ModalSignUpComplete>
              <ModalTitle>회원 가입이 완료되었습니다.</ModalTitle>
              <ModalSubTitle>서비스 이용을 위해 로그인 해주세요.</ModalSubTitle>
            </ModalSignUpComplete>
          )}
          <LoginText>당신을 위한 발견의 즐거움 지금 경험해 보세요.</LoginText>
          <TextLine
            style={{ position: 'absolute', right: '25px', top: '37px' }}
          />
          <TextLine2 style={{ position: 'absolute', right: '5px' }} />
          <SnsLoginText>SNS 계정으로 로그인</SnsLoginText>
          <SnsButtons>
            <SnsButton type="kakao">
              <KakaoIcon style={{ marginRight: '4px' }} />
              카카오
            </SnsButton>
            <SnsButton type="google">
              <GoogleIcon style={{ marginRight: '4px' }} />
              구글
            </SnsButton>
          </SnsButtons>
          <LoginHrLine>
            <LoginHrLineText>또는</LoginHrLineText>
          </LoginHrLine>
          <EmailText type="email">
            <MailIcon style={{ marginRight: '3px' }} />
            이메일
          </EmailText>
          <EmailInput
            type="text"
            placeholder="turnup@email.com"
            value={email}
            onChange={emailChange}
          />
          <EmailText type="pwd">
            <PwdIcon style={{ marginRight: '3px' }} />
            비밀번호
          </EmailText>
          <PwdInputContainer>
            <PwdInput
              type={pwdVisible ? 'text' : 'password'}
              placeholder="비밀번호를 입력해 주세요"
              state="pwd"
              value={pwd}
              onChange={pwdChange}
            />
            <PwdVisibleIcon
              onClick={onPwdVisibleClick}
              style={{ position: 'absolute', right: '10px' }}
            />
          </PwdInputContainer>

          <AutoLoginContainr>
            <AutoLoginContainrLeft>
              <AutoLoginCheckBtn onClick={onAutoSaveClick} checked={autoSave}>
                {autoSave ? <CheckIconClick /> : <CheckIcon />}
              </AutoLoginCheckBtn>
              자동로그인
            </AutoLoginContainrLeft>
            <AutoLoginContainrRight onClick={forgotPwdClick}>
              비밀번호를 잊으셨나요?
            </AutoLoginContainrRight>
          </AutoLoginContainr>
          <MainLoginBtn>로그인</MainLoginBtn>
          <SignUpTextLine>
            <SignUpTextLineLeft>턴업이 처음이신가요?</SignUpTextLineLeft>
            <Link to="/signUp">
              <SignUpTextLineRight>회원가입</SignUpTextLineRight>
            </Link>
          </SignUpTextLine>
        </LoginInputsContainer>
      </LoginLeftContainer>

      <LoginRightContainer>
        <LoginContentsFunnyText>
          콘텐츠에서 쇼핑 정보를
          <br /> 발견하는 즐거움 turnup
        </LoginContentsFunnyText>
        <LoginQuestionSubText>
          궁금하고, 비슷한 상품 찾고 바로 구매까지 모두 다 턴업에서!
        </LoginQuestionSubText>
        <LoginMainImgContainer>
          <img
            src={mainImg}
            alt=""
            style={{ marginTop: '31px', width: '100%' }}
          />
        </LoginMainImgContainer>
      </LoginRightContainer>
    </LoginComponent>
  );
};

const LoginModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color && 'rgba(0, 0, 0, 0.2)'};

  z-index: 100;
`;

const ForgotEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35.5px;

  /* Mobile/Body/Regular/14 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Text/Light/Secondary Text */

  color: #484848;
  align-items: center;
`;

const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ForgotSubTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: center;

  /* Text/Light/Secondary Text */

  color: #484848;
  width: 313px;
  height: 48px;
  margin-top: 10px;
`;

const ForgotTitle = styled.div`
  width: 313px;
  height: 36px;

  /* PC/Heading/Bold/Title 1 */

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
  margin-top: 72px;
`;

const ForgotPwdModal = styled.div`
  width: 448px;
  height: 410px;

  /* Background/Light/Primary Background

대체 FEFEFA
*/
  background: #ffffff;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
  /* PC/Heading/Bold/Title 1 */

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
`;

const ModalSubTitle = styled.div`
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
`;

const ModalSignUpComplete = styled.div`
  /* Background/Dark/primaryBackground */

  background: #0b0b0c;
  box-shadow: 0px 4px 20px rgba(11, 11, 12, 0.28);
  border-radius: 16px;
  width: 355px;
  height: 158px;
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PwdInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 376px;
  height: 52px;
  background: #ffffff;
  align-items: center;
  border: 1px solid #d2d0ce;
  border-radius: 10px;
  position: relative;
`;

const LoginMainImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginQuestionSubText = styled.div`
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

const LoginContentsFunnyText = styled.div`
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

const SignUpTextLineLeft = styled.div`
  /* PC/Body/Body1 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;

  color: #000000;
`;

const SignUpTextLineRight = styled.div`
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
`;

const SignUpTextLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const MainLoginBtn = styled.div`
  width: 376px;
  height: 64px;

  /* Button/Disabled */

  background: #a8c0ff;
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

const AutoLoginContainrLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AutoLoginContainrRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  text-align: right;
  /* text-decoration-line: ; */
  border-bottom: 1px solid grey;
`;

const AutoLoginCheckBtn = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  /* 
  border: ${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
  */
  background: ${(props) => (props.checked ? '#3B72FE' : 'white')};
  border-radius: 0.4rem;
  transition: all 150ms;
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`;

const AutoLoginContainr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 11.5px;
`;

const EmailInput = styled.input`
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

const PwdInput = styled.input`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Text/Light/Disabled Text */

  ::placeholder {
    color: #d2d0ce;
  }

  color: #0b0b0c;
  /* margin-top: 7.5px; */
  text-indent: 16px;
  width: 100%;
  height: 100%;
  border: 1px solid #d2d0ce;
  border-radius: 10px;
  &:focus {
    /* outline: none; */
  }
`;

const EmailText = styled.div`
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

const LoginHrLineText = styled.div`
  position: absolute;
  width: 40px;
  height: 16px;
  background: #ffffff;
  padding-left: 13px;
  left: 160px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  color: #d6d6d6;
`;

const LoginHrLeftLine = styled.div`
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: row;
`;

const LoginHrLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  border: 1px solid #d6d6d6;
  position: relative;
`;

const SnsButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const SnsButton = styled.div`
  width: 184px;
  height: 60px;

  background: ${(props) => (props.type === 'kakao' ? '#ffeb3b' : '#DFE8FF')};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  margin-right: ${(props) => (props.type === 'kakao' ? '8px' : '0')};
  justify-content: center;
  align-items: center;
  /* PC/Body/Body 4 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Background/Dark/primaryBackground */

  color: #0b0b0c;
`;

const SnsLoginText = styled.div`
  /* PC/Heading/Medium/Title 4 */

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
`;

const LoginComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const LoginLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
`;

const LoginLogo = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('../imgs/Logo.png');
  width: 138.11px;
  height: 32px;
  position: absolute;
  left: 20px;
  top: 20px;
`;
const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 640px;
  position: relative;
`;
const LoginText = styled.div`
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
`;

const LoginRightContainer = styled.div`
  flex-shrink: 1;
  background: linear-gradient(180deg, #2f69ff 0%, #0638b8 100%);
  height: 100vh;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Login;
