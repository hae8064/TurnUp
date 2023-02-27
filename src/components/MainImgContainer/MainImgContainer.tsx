import React from 'react';
import { MainImgStyle } from './MainImgStyle';
import { RiYoutubeFill, RiMessage3Line } from 'react-icons/ri';
import Image from 'next/image';
import MainImg from '../../assets/imgs/Image.png';
type propsType = {
  title: string;
  iconContainer: string;
  icon: any;
  platform: string;
  calendar: string;
  img: any;
  subTitle: string;
};

function MainImgContainer({
  title,
  iconContainer,
  icon,
  platform,
  calendar,
  img,
  subTitle,
}: propsType) {
  return (
    <MainImgStyle>
      <div className="title">{title}</div>
      <div className="subTitle">
        <div className="subPlatForm">
          <div className={iconContainer}>{icon}</div>
          <span className="platform">{platform}</span>
        </div>
        <span className="calendar">{calendar}</span>
      </div>

      <div className="mainImage">
        {img}
        <div className="contentsQuestion">
          <div className="title">
            <RiMessage3Line />
            <span className="titleContents">문의 내용</span>
          </div>
          <div className="subTitle">{subTitle}</div>
        </div>
      </div>
    </MainImgStyle>
  );
}

export default MainImgContainer;
