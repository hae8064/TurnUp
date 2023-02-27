import InnerContainer from '@src/components/InnerContainer/InnerContainer';
import Navigation from '@src/components/Navigation/Navigation';
import NothingQuestion from '@src/components/NotingQuestion/NothingQuestion';
import React from 'react';
import { MyPageContainer } from 'styles/MyPageStyle';

function Me() {
  return (
    <MyPageContainer>
      <Navigation />
      <InnerContainer />
      {/* <NothingQuestion /> */}
    </MyPageContainer>
  );
}

export default Me;
