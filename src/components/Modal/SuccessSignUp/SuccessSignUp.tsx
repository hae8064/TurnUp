import React, { useEffect } from 'react';
import { usePwdStore } from '../../../store/zustand';
import { SuccessSignUpStyle } from './SuccessSignUpStyle';

type propsType = {
  title: string;
  subTitle: string;
};

const SuccessSignUp = ({ title, subTitle }: propsType) => {
  // Zustand 상태관리
  const { signUpSuccess, signUpSuccessChange, editProfile, setEditProfile } =
    usePwdStore();

  useEffect(() => {
    setTimeout(() => {
      if (signUpSuccess) {
        signUpSuccessChange();
      }
      if (editProfile) {
        setEditProfile();
      }
    }, 2000);
  }, []);

  return (
    <SuccessSignUpStyle
      display={signUpSuccess ? 'flex' : editProfile ? 'flex' : 'none'}
    >
      <span className="spanTitle">{title}</span>
      <span className="spanSubText">{subTitle}</span>
    </SuccessSignUpStyle>
  );
};

export default SuccessSignUp;
