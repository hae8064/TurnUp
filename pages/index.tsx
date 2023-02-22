import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MAINRIGHTBG from '../src/assets/imgs/loginMain.png';
import { AuthLayout } from '../src/pages/Auth/styles';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { usePwdStore } from '../src/store/zustand';
import PwdForgotComponent from '../src/components/PwdForgot/PwdForgotComponent';
import SignUp from './SignUp';
import Login from './Login';

function Index() {
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

  const [currentPage, setCurrentPage] = useState('');

  const state = useRouter();

  useEffect(() => {
    setCurrentPage(state.pathname);
  }, []);

  return (
    <AuthLayout>
      <div className={'modal_bg' + pwdModalVisibleZustand}>
        <PwdForgotComponent></PwdForgotComponent>
      </div>
      <div className="auth_left">{currentUrl ? <Login /> : <SignUp />}</div>

      <div className="auth_right">
        <span className="imgMainText">
          콘텐츠에서 쇼핑 정보를
          <br /> 발견하는 즐거움 turnup
        </span>
        <span className="imgSubText">
          궁금하고, 비슷한 상품 찾고 바로 구매까지 모두 다 턴업에서!
        </span>
        <Image src={MAINRIGHTBG} alt="Main Img" />
      </div>
    </AuthLayout>
  );
}

export default Index;
