import React, { useRef, useState } from 'react';
import { InnerContainerStyle } from './styles';
import { RiArrowRightSLine, RiChromeFill, RiYoutubeFill } from 'react-icons/ri';
import MainImgContainer from '@src/components/MainImgContainer/MainImgContainer';
import RelativeProducts from '@src/components/RelativeProducts/RelativeProducts';
import Image from 'next/image';
import MainImg from '../../assets/imgs/Image.png';
import MainImgJisoo from '../../assets/imgs/maiImage2.png';
import productImg from '../../assets/imgs/productImage.png';
import jisooProduct from '../../assets/imgs/jisooImage.png';

function InnerContainer() {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <InnerContainerStyle>
      <div className="innerContents">
        <span className="contentsTitle">이봉희님의 문의내역</span>
        <div className="contentsSub">
          <span className="subTitle">
            내가 궁금했던 컨텐츠 속 상품을 찾아보세요!
          </span>
          <div
            className="appDownBtn"
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
          >
            <RiChromeFill />
            <span className="contents">브라우저 앱 다운로드</span>
            <RiArrowRightSLine />

            {isHovering === 1 && (
              <>
                <div className={`toolTipCT` + isHovering}></div>
                <div className="toolTip">나와라</div>
              </>
            )}
          </div>
        </div>
        <MainImgContainer
          title="[#환승연애2] (2시간) 대체 현규가 누구야? 대단한~ 연하남이지~🥰 도파민
        터지게 만드.."
          iconContainer="youtubeIcon"
          icon={<RiYoutubeFill className="icon" />}
          platform="Youtube"
          calendar="2023년 02월 27일"
          img={<Image src={MainImg} width={640} height={360} alt="image" />}
          subTitle="환승연애 해은이가 입고 나온 핑크색 니트 어디꺼에요?"
        />
        <RelativeProducts
          img={
            <Image src={productImg} width={148} height={148} alt="상품이미지" />
          }
          title="여름 튤립이 니트(2COL)"
          brand="Your Name Here"
          price="79,000원"
        />

        <MainImgContainer
          title="LONDON vlog"
          iconContainer="youtubeIcon"
          icon={<RiYoutubeFill className="icon" />}
          platform="Youtube"
          calendar="2023년 01월 15일"
          img={
            <Image src={MainImgJisoo} width={640} height={360} alt="image" />
          }
          subTitle="블랙핑크 지수가 브이로그에 쓰고 나온 모자 정보 알 수 있나요?"
        />
        <RelativeProducts
          img={
            <Image src={jisooProduct} width={148} height={148} alt="image" />
          }
          title="젝스 베레모 K3107ST"
          brand="캉골"
          price="97,200원"
        />
      </div>
    </InnerContainerStyle>
  );
}

export default InnerContainer;
