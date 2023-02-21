import React, { useState } from 'react';
import { PwdForgotStyle } from './PwdForgotStyle';
import { RiCloseLine, RiMailLine } from 'react-icons/ri';
import Input from '../systems/Input/Input';
import { ButtonBox } from '../systems/Button/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleOn } from '../../store/pwdSlice';
import { usePwdStore } from '../../store/zustand';

interface PwdForgotType {
  visible: boolean;
}
const PwdForgotComponent = () => {
  // Zustand 상태관리
  const {
    pwdModalVisibleZustand,
    signUpModalZus,
    signUpModalChange,
    pwdToggleZus,
    countState,
    countStateChange,
  } = usePwdStore();

  //비밀번호 모달창 취소 버튼 클릭이벤트
  const onCancelModal = () => {
    pwdToggleZus();
  };

  return (
    <PwdForgotStyle visible={pwdModalVisibleZustand}>
      <div className="topIcon">
        <RiCloseLine
          className="closeLineIcon"
          style={{ width: '25px', height: '25px' }}
          onClick={onCancelModal}
        />
      </div>
      <div className="content">
        <div className="contentTitle">비밀번호를 잊으셨나요?</div>
        <span className="contentSubTitle">
          가입하신 이메일 주소를 입력하면 새 비밀번호를 <br /> 설정할 수 있는
          이메일을 보내드릴게요.
        </span>
        <Input
          label="이메일"
          LabelIcon={RiMailLine}
          placeholder="turnup@email.com"
          type="text"
          // value={email}
          // onChange={emailChange}
          // emailCheck={emailCheck}
        />
        {/* <ButtonBox block={true} loginBtnActive={loginBtnActive}> */}
        <ButtonBox block={true} style={{ marginTop: '28px' }}>
          비밀번호 재설정 전송
        </ButtonBox>
      </div>
    </PwdForgotStyle>
  );
};

export default PwdForgotComponent;
