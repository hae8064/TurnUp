import ProfileContainer from '@src/components/MyPage/ProfileContainer/ProfileContainer';
import Navigation from '@src/components/Navigation/Navigation';
import React from 'react';
import { MyPageContainer } from 'styles/MyPageStyle';

function Profile() {
  return (
    <MyPageContainer>
      <Navigation />
      <ProfileContainer />
    </MyPageContainer>
  );
}

export default Profile;
