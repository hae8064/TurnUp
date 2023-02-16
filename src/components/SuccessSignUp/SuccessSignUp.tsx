import React, { useEffect } from 'react';
import { usePwdStore } from '../../store/zustand';
import { SuccessSignUpStyle } from './SuccessSignUpStyle';

const SuccessSignUp = () => {
  // Zustand 상태관리
  const { signUpModalZus, signUpModalChange } = usePwdStore();

  useEffect(() => {
    setTimeout(() => {
      if (signUpModalZus) {
        signUpModalChange();
      }
    }, 2000);
  }, []);
  console.log(signUpModalZus);
  return (
    <SuccessSignUpStyle display={!signUpModalZus ? 'flex' : 'none'}>
      <span className="spanTitle">회원 가입이 완료되었습니다.</span>
      <span className="spanSubText">서비스 이용을 위해 로그인 해주세요.</span>
    </SuccessSignUpStyle>
  );
};

export default SuccessSignUp;
