import React, { useEffect, useState } from 'react';
import * as S from '../styles/StyledComponent';
import mainLogo from '../assets/imgs/loginMain.png';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/arrow-drop-right-line.tsx';
import { ReactComponent as MailIcon } from '../assets/mail_line.tsx';
import { ReactComponent as UserIcon } from '../assets/🕹icon.jsx';
import { ReactComponent as PhoneIcon } from '../assets/VectorPhone.tsx';
import { ReactComponent as CakeIcon } from '../assets/cake-line.tsx';
import { ReactComponent as ParentIcon } from '../assets/parent-line.tsx';
import { ReactComponent as PwdVisibleIcon } from '../assets/eye-off-line.svg';
import { ReactComponent as InformIcon } from '../assets/information-line.svg';
import { ReactComponent as XIcon } from '../assets/Union.svg';
import { Link, useNavigate } from 'react-router-dom';
import useEmailHook from '../hooks/useEmailHook';
import useNameHook from '../hooks/useNameHook';
import usePhoneHook from '../hooks/usePhoneHook';
import useBirthdayHook from '../hooks/useBirthdayHook';
import usePwdHook from '../hooks/usePwdHook';

const SignUp = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const [genderClick, setGenderClick] = useState('');
  const [emailCheckView, setEmailCheckView] = useState(false);

  //비밀번호 보이게
  const onPwdVisibleClick = () => {
    setPwdVisible(!pwdVisible);
  };

  //이메일
  const [email, emailChange, emailCheck] = useEmailHook();
  //이름
  const [name, nameChange, nameCheck] = useNameHook();
  //연락처
  const [phone, phoneChange, phoneCheck] = usePhoneHook();
  //생년월일
  const [birthday, birthdayChange, birthdayCheck] = useBirthdayHook();
  //핸드폰번호 인증번호
  const [resPhone, setResPhone] = useState();
  //비밀번호
  const [pwd, pwdChange, pwdCheck] = usePwdHook();

  const [hide, setHide] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(pwdCheck);
  }, [pwd, pwdCheck]);

  const genderOnclickEvent = () => {
    setGenderClick('woman');
  };

  const genderOnclickEvent2 = () => {
    setGenderClick('man');
  };

  const onEmailCheckViewClick = () => {
    console.log('클릭');
    setEmailCheckView(true);
  };

  const onResPhoneChange = (e) => {
    setResPhone(e.target.value);
  };

  //회원가입 버튼 클릭
  const onSignUpBtnClick = () => {
    if (emailCheck && nameCheck && phoneCheck && birthdayCheck && pwdCheck) {
      navigate('/login', { state: 'Complete' });
    }
  };

  return (
    <S.LoginComponent>
      <S.LoginLeftContainer>
        <Link
          to="/login"
          style={{
            textDecorationColor: 'none',
            color: 'inherit' /* 링크의 색상 제거 */,
          }}
        >
          <LeftContainerTop>
            <BackIcon />
            로그인 페이지로 이동
          </LeftContainerTop>
        </Link>

        <S.LoginInputsContainer height={emailCheckView ? '900px' : '856px'}>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpSubTitle>
            입력한 이메일은 로그인 아이디로 사용됩니다.
          </SignUpSubTitle>
          <S.EmailText style={{ marginTop: '39.5px' }}>
            <MailIcon style={{ marginRight: '4px' }} />
            이메일
          </S.EmailText>
          <S.PwdInputContainer>
            <S.PwdInput
              placeholder="turnup@email.com"
              value={email}
              onChange={emailChange}
            ></S.PwdInput>
            {emailCheck ? (
              <SignUpEmailCheck
                style={{ color: 'blue' }}
                onClick={onEmailCheckViewClick}
              >
                인증
              </SignUpEmailCheck>
            ) : (
              <SignUpEmailCheck>인증</SignUpEmailCheck>
            )}
          </S.PwdInputContainer>
          {emailCheckView ? (
            <S.PwdInputContainer>
              <S.PwdInput
                type="number"
                placeholder="인증번호"
                onChange={onResPhoneChange}
              ></S.PwdInput>
              {resPhone ? (
                <SignUpEmailCheck
                  style={{ color: resPhone.length === 6 && 'blue' }}
                >
                  인증
                </SignUpEmailCheck>
              ) : (
                <SignUpEmailCheck>확인</SignUpEmailCheck>
              )}
            </S.PwdInputContainer>
          ) : null}
          <S.EmailText>
            <UserIcon style={{ marginRight: '4px' }} />
            이름
          </S.EmailText>
          <S.PwdInputContainer>
            <S.PwdInput
              placeholder="홍길동"
              value={name}
              onChange={nameChange}
            ></S.PwdInput>
            {nameCheck ? null : (
              <XIcon style={{ position: 'absolute', right: '10px' }} />
            )}
          </S.PwdInputContainer>
          <S.EmailText>
            <PhoneIcon style={{ marginRight: '4px' }} />
            연락처
          </S.EmailText>
          <S.PwdInputContainer>
            <S.PwdInput
              placeholder="010-1234-5641"
              value={phone}
              onChange={phoneChange}
            ></S.PwdInput>
            {phoneCheck ? null : (
              <XIcon style={{ position: 'absolute', right: '10px' }} />
            )}
          </S.PwdInputContainer>
          <S.EmailText>
            <CakeIcon style={{ marginRight: '4px' }} />
            <XIcon style={{ position: 'absolute', right: '10px' }} />
            생년월일
          </S.EmailText>
          <S.PwdInputContainer>
            <S.PwdInput
              type="number"
              placeholder="생년월일 8자리(YYYYMMDD)"
              value={birthday}
              onChange={birthdayChange}
            ></S.PwdInput>
            {birthdayCheck ? null : (
              <XIcon style={{ position: 'absolute', right: '10px' }} />
            )}
          </S.PwdInputContainer>
          <S.EmailText>
            <ParentIcon style={{ marginRight: '4px' }} />
            성별
          </S.EmailText>
          <GenderChoice>
            <GenderWoman onClick={genderOnclickEvent} type={genderClick}>
              여성
            </GenderWoman>
            <q onClick={genderOnclickEvent2} type={genderClick}>
              남성
            </q>
          </GenderChoice>
          <S.EmailText>
            <CakeIcon style={{ marginRight: '4px' }} />
            비밀번호
          </S.EmailText>
          <S.PwdInputContainer>
            <S.PwdInput
              type={pwdVisible ? 'text' : 'password'}
              placeholder="비밀번호를 입력해 주세요"
              value={pwd}
              onChange={pwdChange}
            ></S.PwdInput>
            <PwdVisibleIcon
              onClick={onPwdVisibleClick}
              style={{ position: 'absolute', right: '10px' }}
            />
          </S.PwdInputContainer>
          <PasswordWarningConatiner>
            <InformIcon style={{ marginRight: '3.5px' }} />
            영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요.
          </PasswordWarningConatiner>
          <S.MainLoginBtn onClick={onSignUpBtnClick}>회원가입</S.MainLoginBtn>
          <BottomSmallTextContainer>
            회원가입 시
            <Link
              to="check"
              style={{ textDecorationColor: '#484848', color: '#484848' }}
            >
              사용약관
            </Link>
            및&nbsp;
            <Link
              to="useCheck"
              style={{ textDecorationColor: '#484848', color: '#484848' }}
            >
              개인정보 취급방침
            </Link>
            에 동의하는 것으로 간주합니다.
          </BottomSmallTextContainer>
        </S.LoginInputsContainer>
      </S.LoginLeftContainer>
      <S.LoginRightContainer>
        <S.LoginContentsFunnyText>
          콘텐츠에서 쇼핑 정보를
          <br /> 발견하는 즐거움 turnup
        </S.LoginContentsFunnyText>
        <S.LoginQuestionSubText>
          궁금하고, 비슷한 상품 찾고 바로 구매까지 모두 다 턴업에서!
        </S.LoginQuestionSubText>
        <S.LoginMainImgContainer>
          <img
            src={mainLogo}
            alt=""
            style={{ marginTop: '31px', width: '100%' }}
          />
        </S.LoginMainImgContainer>
      </S.LoginRightContainer>
    </S.LoginComponent>
  );
};

const BottomSmallTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */

  text-align: center;

  /* Text/Light/Disabled Text */

  color: #d2d0ce;
  width: 400px;
  margin-top: 12px;
`;

const PasswordWarningConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 390px;
  /* Mobile/Body/Regular/12 */

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Text/Light/Tertiary Text */

  color: #3b72fe;
`;

const GenderMan = styled.button`
  width: 186px;
  height: 52px;

  /* Dividers/Default */

  border: ${(props) =>
    props.type === 'man' ? ' 1px solid #3b72fe' : '1px solid #d2d0ce'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */

  /* Text/Light/Disabled Text */

  color: ${(props) => (props.type === 'man' ? '#3b72fe' : '#d2d0ce')};
  background-color: white;

  &:focus {
    color: #3b72fe;
    border: 1px solid #3b72fe;
  }
`;

const GenderWoman = styled.button`
  width: 186px;
  height: 52px;

  /* Dividers/Default */

  border: ${(props) =>
    props.type === 'woman' ? ' 1px solid #3b72fe' : '1px solid #d2d0ce'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */

  /* Text/Light/Disabled Text */

  color: ${(props) => (props.type === 'woman' ? '#3b72fe' : '#d2d0ce')};
  background-color: white;
`;

const GenderChoice = styled.div`
  width: 393px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5px;
`;

const SignUpEmailCheck = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* identical to box height, or 150% */

  /* Text/Light/Disabled Text */
  color: #d2d0ce;
  position: absolute;
  right: 10px;
`;

const LeftContainerTop = styled.div`
  position: absolute;
  left: 40px;
  top: 30px;
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;
`;

const SignUpTitle = styled.div`
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
`;

const SignUpSubTitle = styled.div`
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
  margin-top: 8px;
`;
export default SignUp;
