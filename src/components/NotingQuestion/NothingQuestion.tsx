import Image from 'next/image';
import React from 'react';
import { NotingQuestionStyle } from './NotingQuestionStyle';
import illust from '../../assets/imgs/Illust.png';
import { RiArrowRightSLine, RiChromeFill } from 'react-icons/ri';
function NothingQuestion() {
  return (
    <NotingQuestionStyle>
      <Image src={illust} width={200} height={116} alt="이미지" />
      <span className="title">궁금한 상품을 찾는 가장 쉬운 방법</span>
      <div className="subTitle1">
        <div className="borderCircle">
          <span>1</span>
        </div>
        “이거 갖고 싶은데 어떤 상품일까?”라는 생각이 들면
      </div>
      <div className="subTitle2">
        <div className="borderCircle">
          <span>2</span>
        </div>
        턴업 앱을 다운로드해요.
      </div>
      <div className="subTitle3">
        <div className="borderCircle">
          <span>3</span>
        </div>
        클릭 한 번이면 발견 성공!
      </div>
      <div className="appDownBtn">
        <RiChromeFill />
        <span>브라우저 앱 다운</span>
        <RiArrowRightSLine />
      </div>
      <div className="rightGrey"></div>
    </NotingQuestionStyle>
  );
}

export default NothingQuestion;
