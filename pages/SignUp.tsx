import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  RiArrowLeftLine,
  RiCakeLine,
  RiEyeOffLine,
  RiLockPasswordLine,
  RiMailLine,
  RiParentLine,
  RiSmartphoneLine,
  RiUser3Line,
} from 'react-icons/ri';
import GenderBtn from '../src/components/systems/Button/GenderBtn';
import { ButtonBox } from '../src/components/systems/Button/styles';
import Input from '../src/components/systems/Input/Input';
import Image from 'next/image';
import useTotalHook from '../src/hooks/useTotalHook';
import Menu from '../src/assets/Menu';
import logo from '../src/assets/imgs/Logo.png';
import { useRouter } from 'next/router';

import { usePwdStore } from '../src/store/zustand';

function SignUp() {
  const navigate = useRouter();
  const [pwdVisible, setPwdVisible] = useState(false);
  const [phoneInputVisible, setPhoneInputVisible] = useState(false);
  const [genderClick, setGenderClick] = useState('');
  const [signUpBtnActive, setSignUpBtnActive] = useState(false);

  const [email, emailChange, emailCheck] = useTotalHook('email');
  const [number, numberChange, numberCheck] = useTotalHook('numberCert');
  const [name, nameChange, nameCheck] = useTotalHook('name');
  const [phone, phoneChange, phoneCheck] = useTotalHook('phone');
  const [birthday, birthdayChange, birthdayCheck] = useTotalHook('birthday');
  const [password, passwordChange, passwordCheck] = useTotalHook('password');

  // Zustand 상태관리
  const {
    pwdModalVisibleZustand,
    signUpModalZus,
    signUpModalChange,
    pwdToggleZus,
    countState,
    countStateChange,
    signUpSuccess,
    signUpSuccessChange,
    currentUrl,
    currentUrlChange,
  } = usePwdStore();

  //비밀번호 보이게 클릭 이벤트
  const onTextClick = () => {
    setPwdVisible(!pwdVisible);
  };

  //인증 클릭 이벤트
  const onCheckClick = () => {
    setPhoneInputVisible(true);
  };

  //회원가입 버튼 클릭 이벤트
  const onSignUpClick = () => {
    if (
      emailCheck &&
      numberCheck &&
      nameCheck &&
      phoneCheck &&
      birthdayCheck &&
      passwordCheck &&
      genderClick
    ) {
      signUpSuccessChange();
      navigate.push('/');
      // navigate('/auth', { state: 'signUpSuccess' });
    }
  };

  // useEffect(() => {
  //   currentUrlChange();
  // }, []);

  //회원가입 버튼 Active 이벤트
  useEffect(() => {
    if (
      emailCheck &&
      numberCheck &&
      nameCheck &&
      phoneCheck &&
      birthdayCheck &&
      passwordCheck &&
      genderClick
    ) {
      setSignUpBtnActive(true);
    }
  }, [
    emailCheck,
    numberCheck,
    nameCheck,
    phoneCheck,
    birthdayCheck,
    passwordCheck,
    genderClick,
  ]);

  return (
    <div className="inner">
      <div className="authLogo">
        <Link
          href="/"
          style={{ color: '#484848', display: 'flex' }}
          onClick={() => currentUrlChange()}
        >
          <RiArrowLeftLine className="backIcon" />
          <span>로그인 페이지로 이동</span>
          <Image src={logo} alt="logo Img" className="logoSignUp" />
        </Link>
        <Menu className="menuIconSignUp" />
      </div>

      <div className="signUpTopText">
        <span className="innerSignUpText">회원가입</span>
        <span className={'innerSignUpSubText' + phoneInputVisible}>
          입력한 이메일은 로그인 아이디로 사용됩니다.
        </span>
      </div>

      <Input
        label="이메일"
        LabelIcon={RiMailLine}
        placeholder="turnup@gmail.com"
        rightText="인증 "
        onViewClick={onCheckClick}
        value={email}
        onChange={emailChange}
        emailCheck={emailCheck}
      />
      {phoneInputVisible && (
        <Input
          type={number}
          typeNumber={true}
          placeholder="인증번호 (6자리)"
          value={number}
          onChange={numberChange}
          emailCheck={numberCheck}
        />
      )}
      <Input
        label="이름"
        LabelIcon={RiUser3Line}
        placeholder="홍길동"
        value={name}
        onChange={nameChange}
        emailCheck={nameCheck}
      />
      <Input
        label="연락처"
        typeNumber={true}
        LabelIcon={RiSmartphoneLine}
        placeholder="010-1234-5641 ( -빼고 )"
        value={phone}
        onChange={phoneChange}
        emailCheck={phoneCheck}
      />
      <Input
        label="생년월일"
        LabelIcon={RiCakeLine}
        typeNumber={true}
        placeholder="생년월일 8자리(YYYYMMDD)"
        value={birthday}
        onChange={birthdayChange}
        emailCheck={birthdayCheck}
      />

      {/* 성별 */}

      <GenderBtn
        label="성별"
        LabelIcon={RiParentLine}
        setGenderClick={setGenderClick}
        // onClick={onGenderClick}
      />

      <Input
        type={pwdVisible ? 'text' : 'password'}
        label="비밀번호"
        LabelIcon={RiLockPasswordLine}
        placeholder="비밀번호를 입력해 주세요."
        RightBtn={RiEyeOffLine}
        info="영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요."
        onTextClick={onTextClick}
        value={password}
        onChange={passwordChange}
        emailCheck={passwordCheck}
      />

      <ButtonBox
        block={true}
        bgColor={signUpBtnActive ? '#3B72FE' : '#a8c0ff'}
        style={{ marginTop: '32px' }}
        onClick={onSignUpClick}
      >
        회원가입
      </ButtonBox>
      <div className="signUpBottomInfo">
        회원가입 시<Link href="/">사용 약관</Link>및
        <Link href="/">개인정보 취급방침</Link>에 동의하는 것으로 간주합니다.
      </div>
    </div>
  );
}

export default SignUp;
