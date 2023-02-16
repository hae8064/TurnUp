import React from 'react';
import { SnsButtonStyled } from './SnsButtonStyles';
import GoogleIcon from '../../../assets/Google__G__Logo 1';

const GoogleButton = () => {
  return (
    <SnsButtonStyled background=" #DFE8FF">
      <GoogleIcon className="snsIcon" />
      <span>구글</span>
    </SnsButtonStyled>
  );
};

export default GoogleButton;
