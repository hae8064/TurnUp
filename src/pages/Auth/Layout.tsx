import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import SignUpFinal from './SignUpFinal';
import { AuthLayout } from './styles';
import MAINRIGHTBG from '../../assets/imgs/loginMain.png';
import LoginFinal from './LoginFinal';
import PwdForgotComponent from '../../components/PwdForgot/PwdForgotComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const Layout = () => {
  //리덕스 툴킷
  const dispatch = useDispatch();
  const pwdState = useSelector((state: RootState) => {
    return state.pwdForgot.value;
  });
  const [pwdVisible, setPwdVisible] = useState(false);

  useEffect(() => {
    if (pwdState) {
      setPwdVisible(true);
    } else {
      setPwdVisible(false);
    }
  }, [pwdState]);

  return (
    <AuthLayout>
      <div className={'modal_bg' + pwdState}>
        <PwdForgotComponent></PwdForgotComponent>
      </div>
      <div className="auth_left">
        <Routes>
          <Route path="/" element={<LoginFinal />}></Route>
          <Route path="/signUp" element={<SignUpFinal />}></Route>
        </Routes>
      </div>
      <div className="auth_right">
        <span className="imgMainText">
          콘텐츠에서 쇼핑 정보를
          <br /> 발견하는 즐거움 turnup
        </span>
        <span className="imgSubText">
          궁금하고, 비슷한 상품 찾고 바로 구매까지 모두 다 턴업에서!
        </span>
        <img src={MAINRIGHTBG} alt="auth" />
      </div>
    </AuthLayout>
  );
};

export default Layout;
