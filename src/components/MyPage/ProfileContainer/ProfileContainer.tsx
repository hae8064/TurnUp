import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ProfileContainerStyle } from './ProfileContainerStyle';
import ProfileImg from '../../../assets/imgs/Profile Image.png';
import {
  RiPencilLine,
  RiMailLine,
  RiUser3Line,
  RiUserSettingsLine,
  RiSmartphoneLine,
  RiCakeLine,
  RiParentLine,
  RiLockPasswordLine,
  RiEyeOffLine,
} from 'react-icons/ri';
import Input from '@src/components/systems/Input/Input';
import useTotalHook from '@src/hooks/useTotalHook';
import GenderBtn from '@src/components/systems/Button/GenderBtn';
import { ButtonBox } from '@src/components/systems/Button/styles';
import { usePwdStore } from '@src/store/zustand';
import SuccessSignUp from '@src/components/Modal/SuccessSignUp/SuccessSignUp';

function ProfileContainer() {
  const {
    pwdModalVisibleZustand,
    pwdToggleZus,
    signUpSuccess,
    signUpSuccessChange,
    editProfile,
    setEditProfile,
  } = usePwdStore();
  const [pwdVisible, setPwdVisible] = useState(false);
  const [genderClick, setGenderClick] = useState('');
  const [email, emailChange, emailCheck] = useTotalHook('email');
  const [number, numberChange, numberCheck] = useTotalHook('numberCert');
  const [name, nameChange, nameCheck] = useTotalHook('name');
  const [nickName, nickNameChange, nickNameCheck] = useTotalHook('nickName');
  const [phone, phoneChange, phoneCheck] = useTotalHook('phone');
  const [birthday, birthdayChange, birthdayCheck] = useTotalHook('birthday');
  const [password, passwordChange, passwordCheck] = useTotalHook('password');
  const [pwdSecd, pwdSecdChange] = useTotalHook('pwdSecd');
  const [pwdSame, setPwdSame] = useState(false);
  const [saveBtn, setSaveBtn] = useState(false);
  const [viewSaveModal, setViewSaveModal] = useState(false);

  //비밀번호 보이게 클릭 이벤트
  const onTextClick = () => {
    setPwdVisible(!pwdVisible);
  };

  //회원탈퇴 클릭 이벤트
  const onSignUpCancel = () => {
    pwdToggleZus();
  };

  // 저장하기 버튼 클릭
  const onSaveBtn = () => {
    if (saveBtn) {
      setEditProfile();
      console.log(editProfile);
    }
  };

  useEffect(() => {
    if (pwdSecd === password) {
      setPwdSame(true);
    } else {
      setPwdSame(false);
    }
  }, [password, pwdSecd]);

  useEffect(() => {
    if (
      nameCheck &&
      phoneCheck &&
      emailCheck &&
      birthdayCheck &&
      passwordCheck &&
      pwdSame
    ) {
      setSaveBtn(true);
    } else {
      setSaveBtn(false);
    }
  }, [
    nameCheck,
    phoneCheck,
    birthday,
    birthdayCheck,
    passwordCheck,
    pwdSame,
    emailCheck,
  ]);

  return (
    <ProfileContainerStyle>
      <div className="profileSettingContainer">
        <div className="profileSetting">
          <h3>프로필 설정</h3>
          <div className="subTitle">
            <h4>
              턴업 로그인과 서비스 이용에 사용되는 프로필 정보를 설정해 주세요.
            </h4>
            <p onClick={onSignUpCancel}>회원탈퇴</p>
          </div>
          <div className="profileImg">
            {editProfile ? (
              <div className="profileEditModal">
                <SuccessSignUp
                  title="완료되었습니다."
                  subTitle="프로필 수정이 정상적으로 완료되었습니다."
                />
              </div>
            ) : null}
            <Image
              src={ProfileImg}
              width={112}
              height={112}
              alt="이미지"
            ></Image>
            <div className="editIcon">
              <RiPencilLine />
            </div>
            <span>이봉희</span>
          </div>

          <div className="inputCT1">
            <Input
              label="이름"
              LabelIcon={RiUser3Line}
              placeholder="홍길동"
              value={name}
              onChange={nameChange}
              emailCheck={nameCheck}
            />

            <div className="center"></div>

            <Input
              label="닉네임"
              LabelIcon={RiUserSettingsLine}
              placeholder="도산마피아"
              value={nickName}
              onChange={nickNameChange}
              emailCheck={nickNameCheck}
            />
          </div>

          <div className="inputCT2">
            <Input
              label="연락처"
              typeNumber={true}
              LabelIcon={RiSmartphoneLine}
              placeholder="010-1234-5641 ( -빼고 )"
              value={phone}
              onChange={phoneChange}
              emailCheck={phoneCheck}
            />
            <div className="center"></div>

            <Input
              label="이메일"
              LabelIcon={RiMailLine}
              placeholder="turnup@gmail.com"
              value={email}
              onChange={emailChange}
              emailCheck={emailCheck}
            />
          </div>

          <div className="inputCT3">
            <GenderBtn
              label="성별"
              LabelIcon={RiParentLine}
              setGenderClick={setGenderClick}
            />

            <div className="center"></div>

            <Input
              label="생년월일"
              LabelIcon={RiCakeLine}
              typeNumber={true}
              placeholder="생년월일 8자리(YYYYMMDD)"
              value={birthday}
              onChange={birthdayChange}
              emailCheck={birthdayCheck}
            />
          </div>

          <p></p>

          <div className="inputCT4">
            <Input
              type={pwdVisible ? 'text' : 'password'}
              label="비밀번호 변경"
              LabelIcon={RiLockPasswordLine}
              placeholder="새 비밀번호를 입력해 주세요."
              RightBtn={RiEyeOffLine}
              info="영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요."
              onTextClick={onTextClick}
              value={password}
              onChange={passwordChange}
              emailCheck={passwordCheck}
            />
            <div className="center"></div>
            <Input
              type={pwdVisible ? 'text' : 'password'}
              placeholder="다시 한번 더 입력해 주세요."
              RightBtn={RiEyeOffLine}
              onTextClick={onTextClick}
              value={pwdSecd}
              onChange={pwdSecdChange}
              emailCheck={pwdSame}
            />
          </div>

          <ButtonBox
            block={true}
            bgColor={saveBtn ? '#3B72FE' : '#a8c0ff'}
            onClick={onSaveBtn}
          >
            저장하기
          </ButtonBox>
        </div>
      </div>

      <div className="rightGrey"></div>
    </ProfileContainerStyle>
  );
}

export default ProfileContainer;
