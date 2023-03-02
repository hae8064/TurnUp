import React, { useEffect, useState } from 'react';
import GoogleButton from '../../components/systems/Button/GoogleButton';
import KakaoButton from '../../components/systems/Button/KakaoButton';
import Input from '../../components/systems/Input/Input';
import { ButtonBox } from '../../components/systems/Button/styles';
import CheckIcon from '../../assets/Vector-checkBoxFill';
import CheckIconClick from '../../assets/Vector 5';
import { CheckButtonStyle } from '../../components/systems/Button/CheckButtonStyle';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/Logo.png';
import TextLine from '../../assets/Vector (1)';
import TextLine2 from '../../assets/Group 2137891616';
import {
  RiMailLine,
  RiLockPasswordLine,
  RiEyeOffLine,
  RiMenuFill,
  RiCheckFill,
} from 'react-icons/ri';
import useTotalHook from '../../hooks/useTotalHook';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleOn } from '../../store/pwdSlice';
import { usePwdStore } from '../../store/zustand';
import SwrTest from '../../swrTest/swr';
import SuccessSignUp from '../../components/Modal/SuccessSignUp/SuccessSignUp';

const LoginFinal = () => {
  const [email, emailChange, emailCheck] = useTotalHook('email');
  const [password, passwordChange, passwordCheck] = useTotalHook('password');
  const [loginBtnActive, setLoginBtnActive] = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const { state } = useLocation();
  const [signUpModal, setSignUpModal] = useState(false);
  //리덕스 툴킷
  const dispatch = useDispatch();
  const pwdState = useSelector((state: RootState) => {
    return state.pwdForgot.value;
  });

  // Zustand 상태관리
  const {
    pwdModalVisibleZustand,
    signUpModalZus,
    signUpModalChange,
    pwdToggleZus,
    countState,
    countStateChange,
  } = usePwdStore();

  //비밀번호 잊으셨나요 클릭 이벤트
  const onPwdForgotClick = () => {
    // 리덕스 state 변경 코드
    dispatch(toggleOn());
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
    if (emailCheck && passwordCheck) {
      setLoginBtnActive(true);
    } else {
      setLoginBtnActive(false);
    }
  }, [emailCheck, passwordCheck]);

  useEffect(() => {
    if (state === 'signUpSuccess') {
      signUpModalChange();
    }
    console.log(signUpModalZus);
  }, []);

  return (
    <div className="inner">
      <SuccessSignUp />
      <div className="authLogo">
        <img src={logo} alt="" />
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
      {/* <ButtonBox block="false">로그인</ButtonBox> */}
      <ButtonBox
        block={true}
        // loginBtnActive={loginBtnActive}
        bgColor={loginBtnActive ? '#3B72FE' : '#a8c0ff'}
      >
        로그인
      </ButtonBox>
      <div className="loginBottomContainer">
        <span>턴업이 처음이신가요?</span>
        <Link to="/auth/signUp" style={{ listStyle: 'none', color: '#3B89FE' }}>
          <span className="loginSignUpText">회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginFinal;
