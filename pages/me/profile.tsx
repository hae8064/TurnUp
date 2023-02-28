// import UserOutModal from '@src/components/Modal/userOutModal/userOutModal';
import UserOutModal from '@src/components/Modal/userOutModal/UserOutModal';
import ProfileContainer from '@src/components/MyPage/ProfileContainer/ProfileContainer';
import Navigation from '@src/components/Navigation/Navigation';
import PwdForgotComponent from '@src/components/PwdForgot/PwdForgotComponent';
import React, { useEffect } from 'react';
import { MyPageContainer } from 'styles/MyPageStyle';
import { usePwdStore } from '../../src/store/zustand';

function Profile() {
  // Zustand 상태관리
  const { pwdModalVisibleZustand, pwdToggleZus } = usePwdStore();

  return (
    <MyPageContainer>
      <div className={'modal_bg' + pwdModalVisibleZustand}>
        <UserOutModal></UserOutModal>
      </div>

      <Navigation />
      <ProfileContainer />
    </MyPageContainer>
  );
}

export default Profile;
