import React from 'react';
import { NavigationStyle } from './NavigationStyle';
import {
  RiArrowDownSLine,
  RiAccountCircleLine,
  RiInstagramLine,
  RiBookMarkLine,
} from 'react-icons/ri';

function Navigation() {
  return (
    <NavigationStyle>
      <div className="NavigationMain">
        <div className="NavigationMainTop">
          <div className="NavProfileIcon"></div>
          <div className="NavProfileInfo">
            <span className="NavName">이봉희</span>
            <span className="NavEmail">dev.leo@riseenm.com</span>
          </div>

          <div className="arrowIcon">
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="divider"></div>

        <div className="NavigationMainContent">
          <div className="NavMyPage">
            <RiAccountCircleLine className="PersonIcon" />
            <div className="NavMyPageTitle">마이페이지</div>
          </div>
          <div className="NavMyPage">
            <RiInstagramLine className="PersonIcon" />
            <div className="NavMyPageTitle">인스타그램</div>
          </div>
          <div className="NavMyPage">
            <RiBookMarkLine className="PersonIcon" />
            <div className="NavMyPageTitle">턴업 이용가이드</div>
          </div>
        </div>
      </div>
    </NavigationStyle>
  );
}

export default Navigation;
