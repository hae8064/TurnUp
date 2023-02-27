import React from 'react';
import { ProfileContainerStyle } from './ProfileContainerStyle';

function ProfileContainer() {
  return (
    <ProfileContainerStyle>
      <div className="profileSetting">
        <span className="title">프로필 설정</span>
      </div>
    </ProfileContainerStyle>
  );
}

export default ProfileContainer;
