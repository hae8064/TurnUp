import React from 'react';
import { Styles } from './Styles';
import { usePwdStore } from '@src/store/zustand';
import { useRouter } from 'next/router';

function UserOutModal() {
  const router = useRouter();

  // Zustand 상태관리
  const { pwdToggleZus, signUpSuccess, signUpSuccessChange, setUserOut } =
    usePwdStore();

  //회원 탈퇴 취소 버튼 클릭이벤트
  const onCancelModal = () => {
    pwdToggleZus();
  };

  const onUserOut = () => {
    signUpSuccessChange();
    setUserOut();
    router.push('/');
  };

  return (
    <Styles>
      <h3>회원을 탈퇴하시겠습니까?</h3>
      <h4>
        회원을 탈퇴하면 문의 내역을 비롯한 모든 데이터가
        <br /> 영구적으로 삭제됩니다.
      </h4>
      <div className="btnCT">
        <button onClick={onCancelModal}>취소</button>
        <button onClick={onUserOut}>확인</button>
      </div>
    </Styles>
  );
}

export default UserOutModal;
