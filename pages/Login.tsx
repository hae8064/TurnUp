import React, { useEffect, useState } from 'react';
import KakaoButton from '../src/components/systems/Button/KakaoButton';
import GoogleButton from '../src/components/systems/Button/GoogleButton';
import Input from '../src/components/systems/Input/Input';
import { CheckButtonStyle } from '../src/components/systems/Button/CheckButtonStyle';
import { ButtonBox } from '../src/components/systems/Button/styles';
import SuccessSignUp from '../src/components/SuccessSignUp/SuccessSignUp';
import logo from '../src/assets/imgs/Logo.png';
import TextLine from '../src/assets/Vector (1)';
import TextLine2 from '../src/assets/Group 2137891616';
import { useRouter } from 'next/router';
import useTotalHook from '../src/hooks/useTotalHook';
import { usePwdStore } from '../src/store/zustand';
import { RootState } from '../src/store';
import CheckIconClick from '../src/assets/Vector 5';
import CheckIcon from '../src/assets/Vector-checkBoxFill';
import { toggleOn } from '../src/store/pwdSlice';
import PwdForgotComponent from '../src/components/PwdForgot/PwdForgotComponent';
import SignUp from './SignUp';
import Image from 'next/image';
import {
  RiEyeOffLine,
  RiLockPasswordLine,
  RiMailLine,
  RiMenuFill,
} from 'react-icons/ri';
import Link from 'next/link';

function Login() {
  const [email, emailChange, emailCheck] = useTotalHook('email');
  const [password, passwordChange, passwordCheck] = useTotalHook('password');
  const [loginBtnActive, setLoginBtnActive] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const state = useRouter();
  const [signUpModal, setSignUpModal] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);

  // Zustand 상태관리
  const {
    pwdModalVisibleZustand,
    signUpModalZus,
    signUpModalChange,
    pwdToggleZus,
    countState,
    countStateChange,
  } = usePwdStore();

  //   비밀번호 잊으셨나요 클릭 이벤트
  const onPwdForgotClick = () => {
    pwdToggleZus();
    console.log(pwdModalVisibleZustand);
    // 리덕스 state 변경 코드
  };

  //자동 저장 버튼 클릭
  const onAutoSaveClick = () => {
    setAutoSave(!autoSave);
  };

  //로그인 버튼 클릭 이벤트
  const onLoginBtnClick = () => {
    if (emailCheck && passwordCheck) {
      setLoginBtnActive(true);
    }
  };

  useEffect(() => {
    if (pwdModalVisibleZustand) {
      setPwdVisible(true);
    } else {
      setPwdVisible(false);
    }
  }, [pwdModalVisibleZustand]);

  useEffect(() => {
    if (emailCheck && passwordCheck) {
      setLoginBtnActive(true);
    } else {
      setLoginBtnActive(false);
    }
  }, [emailCheck, passwordCheck]);

  useEffect(() => {
    console.log('state', state);
    // if (state === 'signUpSuccess') {
    //   signUpModalChange();
    // }
    // console.log(signUpModalZus);
  }, []);

  return (
    <div className="inner">
      <SuccessSignUp />
      <div className="authLogo">
        <Image src={logo} alt="logo Img" />
        <RiMenuFill className="menuIcon" />
      </div>
      <span className="mainLogintext">
        당신을 위한 발견의 즐거움
        <br />
        지금 경험해 보세요.
        <TextLine className="textStyleLine" />
        <TextLine2 className="textStyleLine2" />
      </span>
      <span className="mainLoginSubtext">SNS 계정으로 로그인</span>
      <div className="snsButtons">
        <KakaoButton />
        <GoogleButton />
      </div>
      <div className="loginHrOrLine">
        <span>또는</span>
      </div>
      <Input
        label="이메일"
        LabelIcon={RiMailLine}
        placeholder="turnup@email.com"
        type="text"
        value={email}
        onChange={emailChange}
        emailCheck={emailCheck}
      />
      <Input
        type="password"
        label="비밀번호"
        LabelIcon={RiLockPasswordLine}
        placeholder="비밀번호를 입력해 주세요."
        RightBtn={RiEyeOffLine}
        value={password}
        onChange={passwordChange}
        emailCheck={passwordCheck}
      />
      <div className="forgotPwdRowContainer">
        <span className="autoLoginLeft">
          <CheckButtonStyle onClick={onAutoSaveClick} checked={autoSave}>
            {autoSave ? <CheckIconClick /> : <CheckIcon />}
          </CheckButtonStyle>
          자동로그인
        </span>
        <span className="autoLoginRight" onClick={onPwdForgotClick}>
          비밀번호를 잊으셨나요?
        </span>
      </div>
      <ButtonBox block={true} bgColor={loginBtnActive ? '#3B72FE' : '#a8c0ff'}>
        로그인
      </ButtonBox>
      <div className="loginBottomContainer">
        <span>턴업이 처음이신가요?</span>
        <Link href="/SignUp" style={{ listStyle: 'none', color: '#3B89FE' }}>
          <span className="loginSignUpText">회원가입</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
