import React from 'react';
import { SnsButtonStyled } from './SnsButtonStyles';
import KakaoIcon from '../../../assets/Vector';

const KakaoButton = () => {
  return (
    <SnsButtonStyled background="#FFEB3B" margin="8px">
      <KakaoIcon className="snsIcon" />
      <span>카카오</span>
    </SnsButtonStyled>
  );
};

export default KakaoButton;
